package com.provafinaleidsw.app.controller;

import java.time.LocalTime;
import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.provafinaleidsw.app.model.Supermarket;
import com.provafinaleidsw.app.service.SupermarketService;
import com.provafinaleidsw.utility.Response;
import com.provafinaleidsw.utility.SupermarketDetailResponse;

@RestController
public class SupermarketController {
	@Autowired
	SupermarketService supermarketService;
	//it works!
	@CrossOrigin
	@PostMapping("/registerSupermarket")
	public Response doLogin(@RequestParam String name, @RequestParam String address, @RequestParam int capienza ,@RequestParam String username,
			@RequestParam String password) {
		Response response = new Response();

		Supermarket supermarket = supermarketService.getSupermarketByUsername(username);
		if (supermarket != null) {
			response.setHttpResponseCode("500");
			response.setMessage("L'username inserito già esiste. Scegline un altro.");
			return response;
		}

		int registration = supermarketService.registerSupermarket(name, address, capienza, username, password);
		if (registration > 0) {
			response.setHttpResponseCode("200");
			response.setMessage("Registrazione effettuata!");
		} else {
			response.setHttpResponseCode("400");
			response.setMessage("I campi inseriti non sono validi");
		}

		return response;
	}
	

	@CrossOrigin
	@PostMapping("/loginSupermarket")
	public Response doLogin(@RequestParam String username, @RequestParam String password) {
		Response response = new Response();
		Supermarket supermarket = supermarketService.doLogin(username, password);
		if (supermarket != null) {
			response.setHttpResponseCode("200");
			response.setResult(supermarket);
			response.setMessage("Login effettuato!");
		} else {
			response.setHttpResponseCode("400");
			response.setMessage("Le credenziali sono sbagliate!");
		}
		return response;
	}
	
	@CrossOrigin
	@RequestMapping(value="/updateSupermarket") //, method = RequestMethod.POST, produces = "application/json", consumes = "application/json"
	public Response updateSupermarket(@RequestParam String name, @RequestParam String address, @RequestParam int capienza ,@RequestParam String orarioApertura,
			@RequestParam String orarioChiusura, @RequestParam String user) {
		Response response = new Response();
		LocalTime apertura = LocalTime.parse(orarioApertura);
		LocalTime chiusura = LocalTime.parse(orarioChiusura).plusHours(1);
		boolean update = supermarketService.updateSupermarket(name, address, capienza, apertura, chiusura, user);
		if (update) {
			response.setHttpResponseCode("200");
			response.setMessage("OK!");
		} else {
			response.setHttpResponseCode("400");
			response.setMessage("Errore!");
		}
		return response;
	}
	
	
	@CrossOrigin
	@PostMapping("/changeStatus")
	public Response changeStatus(@RequestParam String username) {
		Response response = new Response();
		boolean update = supermarketService.changeStatus(username);
		if (update) {
			response.setHttpResponseCode("200");
			response.setMessage("Stato Cambiato!");
		} else {
			response.setHttpResponseCode("400");
			response.setMessage("Errore!");
		}
		return response;
	}
	
	@CrossOrigin
	@GetMapping("/getSupermarkets")
	public Response findAll() {
		Response response = new Response();
		ArrayList<Supermarket> supermarketList = (ArrayList<Supermarket>) supermarketService.getSupermarkets();

		if (supermarketList.isEmpty()) {
			response.setHttpResponseCode("500");
			response.setMessage("Impossibile ottenere la lista dei supermercati");
		} else {
			response.setHttpResponseCode("200");
			response.setResult(supermarketList);
		}
		return response;
	}

	@GetMapping("/getSupermarket/{id}")
	public Response getSupermarketDetail(@PathVariable int id) {
		SupermarketDetailResponse s = new SupermarketDetailResponse();
		Response response = new Response();

		Supermarket supermarket = supermarketService.getSupermarketByID(id);

		if (supermarket == null) {
			response.setHttpResponseCode("500");
			response.setMessage("Il supermercato non esiste.");
		} else {
			s.setSupermarket(supermarket);
		}

		ArrayList<String> daysClosed = (ArrayList<String>) supermarketService.getDaysSupermarketClosed(id);

		if (daysClosed.isEmpty())
			daysClosed.add("/");
		s.setDaysClosed(daysClosed);

		int clientInQueue = supermarketService.getActualUsersInQueue(id);
		s.setClientInQueue(clientInQueue);

		double waitingTime = clientInQueue * 15;
		s.setWaitingTime(waitingTime);

		int clientInSupermarket = supermarketService.getActualUsersInSupermarket(id);
		s.setClientInSupermarket(clientInSupermarket);

		response.setHttpResponseCode("200");
		response.setResult(s);

		return response;
	}
}

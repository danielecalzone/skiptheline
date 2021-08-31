package com.provafinaleidsw.utility;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

import org.springframework.context.annotation.PropertySource;

@PropertySource("/application.properties")
public class ConnectionFactory {
	private static final String URL = "jdbc:mysql://localhost:3306/provafinale_idsw?serverTimezone=UTC";

	private static Connection connection;

	public static void createConnection() {
		try {
			connection = DriverManager.getConnection(URL, "root", "12341234");
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}

	public static Connection getConnection() {
		if (connection == null)
			createConnection();
		return connection;
	}

}
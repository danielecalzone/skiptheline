export default function RegistrationValidator(details) {

    let errors= {}

    if(!details.name) {
        errors.name = "Nome richiesto"
    }

    if(!details.address) {
        errors.address = "Indirizzo richiesto"
    }

    if(!details.capacity) {
        errors.capacity = "Capienza richiesta"
    }

    if(!details.email) {
        errors.email = "Email richiesta"
    } else if(!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/i.test(details.email)) {
        errors.email = "Indirizzo email non valido"
    }

    if(!details.password) {
        errors.password = "Password richiesta"
    } else if (details.password.length < 8) {
        errors.password = "La password deve essere di almeno 8 caratteri"
    }

    if(!details.password2) {
        errors.password2 = "Password richiesta"
    } else if (details.password2 !== details.password) {
        errors.password2 = "Le password inserite non corrispondono"
    }

    return errors;

}
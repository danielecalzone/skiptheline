export default function LoginValidator(details) {

    let errors= {}


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


    return errors;

}
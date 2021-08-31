import React, {useState} from "react"
import Button from '@material-ui/core/Button';
import logo from "../assets/logo/logo_small.png";
import Footer from "./Footer";
import LoginValidator from "../utility/LoginValidator";
import RegistrationValidator from "../utility/RegistrationValidator";
function LoginForm ({ Login, Register, error, setError }) {

    const [details, setDetails] = useState({name: "", address: "",capacity: "",email: "", password: "", password2: ""});
    const [registrationCheck, setRegistrationCheck] = useState(true);
    const [errors, setErrors] = useState({});


    const loginHandler = e => {
        e.preventDefault()
        setErrors(LoginValidator(details));
        if (Object.entries(errors).length === 0)  {
            Login(details);
        }
    }
    const registerHandler = e => {
        e.preventDefault()
        setErrors(RegistrationValidator(details));
        if (Object.entries(errors).length === 0)  {
            Register(details);
        }
    }
    const checkRegistration = e => {
        e.preventDefault()
        setError("");
        setRegistrationCheck(!registrationCheck);
    }
    return (
        <div>
            { registrationCheck ? (
                <form className="login" onSubmit={loginHandler}>
                    <div className="form-inner">
                        <div  className="image-container">
                            <img src={logo} className="image" alt="Skip the line" />
                        </div>
                        <h2>Login</h2>
                        {(error !== "") ? ( <div className="error">{error}</div>) : ""}
                        <div className="form-group">
                            <label htmlFor="email">Email: </label>
                            <input type="email" name="email" id="email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email} />
                            {errors.email && <div className="errorField"><p>{errors.email}</p></div>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password: </label>
                            <input type="password" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password} />
                            {errors.password && <div className="errorField"><p>{errors.password}</p></div>}
                        </div>
                        <div className="button-container">
                            <Button className="button" type="submit" variant="contained" color="primary">Accedi </Button>
                            <Button className="button" variant="contained" color="primary" onClick={checkRegistration}>Registrati </Button>
                        </div>
                    </div>
                </form>
            ) : (
                <form className="registration" onSubmit={registerHandler}>
                    <div className="form-inner">
                        <div  className="image-container">
                            <img src={logo} className="image" alt="Skip the line" />
                        </div>
                        <h2>Registrazione</h2>
                        {(error !== "") ? ( <div className="error">{error}</div>) : ""}
                        <div className="form-group">
                            <label htmlFor="name">Nome: </label>
                            <input type="text" name="name" id="name" onChange={e => setDetails({...details, name: e.target.value})} value={details.name} />
                            {errors.name && <div className="errorField"><p>{errors.name}</p></div>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Indirizzo: </label>
                            <input type="text" name="name" id="name" onChange={e => setDetails({...details, address: e.target.value})} value={details.address} />
                            {errors.address && <div className="errorField"><p>{errors.address}</p></div>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Capienza: </label>
                            <input type="number" name="name" id="name" onChange={e => setDetails({...details, capacity: e.target.value})} value={details.capacity} />
                            {errors.capacity && <div className="errorField"><p>{errors.capacity}</p></div>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email: </label>
                            <input type="email" name="email" id="email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email} />
                            {errors.email && <div className="errorField"><p>{errors.email}</p></div>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password: </label>
                            <input type="password" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password} />
                            {errors.password && <div className="errorField"><p>{errors.password}</p></div>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Conferma password: </label>
                            <input type="password" name="password2" id="password2" onChange={e => setDetails({...details, password2: e.target.value})} value={details.password2} />
                            {errors.password2 && <div className="errorField"><p>{errors.password2}</p></div>}
                        </div>
                        <div className="button-container">
                            <Button className="button" type="submit" variant="contained" color="primary">Registrati </Button>
                            <Button className="button" variant="contained" color="primary" onClick={checkRegistration}>Accedi </Button>
                        </div>
                    </div>
                </form>)}
            <div className="footer-homepage">
                <Footer />
            </div>
        </div>

    )
}
export default LoginForm;
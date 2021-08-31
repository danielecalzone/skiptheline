import './index.css';
import logo from './assets/logo/logo_small.png'
import CustomizedButtons from "./components/Buttons";
import SupermarketDetailsForm from "./components/SupermarketDetailsForm";
import React, {useState} from "react";
import SupermarketList from "./components/SupermarketList";
import LoginForm from "./components/LoginForm";
import './index.css';
import Footer from "./components/Footer";
import {useUser} from "./hooks/useUser";

function App() {


    const { user,setUser,supermarkets, error, setError ,doLogin, doRegistration , doUpdate, doEnable,supermarketsDetail} = useUser();
    const Login = details => {
        doLogin(details.email, details.password);
    }

    const Register = details => {
        doRegistration(details.name,details.address,details.capacity,details.email, details.password);
    }

    const Logout = () => {
        setUser(null);
        setError("Logout effettuato!");
    }
    const [isCheckedRegistration, setCheckedRegistration] = useState(false);
    const [isCheckedList, setCheckedList] = useState(false);
    return (
        <div className="App">
            {(user != null) ? (
                <div className="welcome">
                    <div  className="image-container">
                        <img src={logo} className="image"  alt="Skip the line"/>
                    </div>
                    <h2> BENVENUTO, <span>{user.nome}</span></h2>
                    <div>
                        <CustomizedButtons setCheckedRegistration={setCheckedRegistration} isCheckedRegistration={isCheckedRegistration} isCheckedList={isCheckedList} setCheckedList={setCheckedList} Logout={Logout} user={user}/>
                        <SupermarketDetailsForm  isCheckedRegistration={isCheckedRegistration} user={user} doUpdate={doUpdate} setUser={setUser} supermarketsDetail={supermarketsDetail}/>
                        <SupermarketList isCheckedList={isCheckedList} doEnable={doEnable} supermarkets={supermarkets} />
                    </div>
                    <div className="footer-in">
                        <Footer />
                    </div>
                </div>
            ) : (
                <LoginForm Login={Login} Register={Register} error={error} setError={setError}/>
            )}
        </div>
    );
}

export default App;

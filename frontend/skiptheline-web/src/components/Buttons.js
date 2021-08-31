import React from 'react';
import Button from '@material-ui/core/Button';

export default function Buttons(props) {

    const { isCheckedRegistration,setCheckedRegistration, isCheckedList , setCheckedList, Logout, user } = props;

    function handleRegistrationButton(){
        setCheckedRegistration(!isCheckedRegistration);
    }
    function handleListButton(){
        setCheckedList(!isCheckedList);
    }
    return (
        <div>
            {user.amministratore ? (<Button id="inline-buttons" variant="contained" color="primary"  onClick={handleListButton}>
                Gestione supermercati
            </Button>) : (<Button id="inline-buttons" variant="contained" color="primary"  onClick={handleRegistrationButton}>
                Dati supermercato
            </Button>)}
            <Button id="inline-buttons" variant="contained" color="primary"  onClick={Logout}>
                logout
            </Button>
        </div>
    );
}
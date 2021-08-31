import React from 'react';
import {Grid} from "@material-ui/core";
import Button from "@material-ui/core/Button";


export default function SupermarketDetailsForm(props) {


    const { isCheckedRegistration, user , doUpdate , setUser,supermarketsDetail} = props;

    function handleSubmit(e) {
        e.preventDefault();
        doUpdate(user.nome,user.indirizzo,user.capienza,user.orarioApertura,user.orarioChiusura);
    }



    return (
        isCheckedRegistration ? (
            <form className="login" id="login" noValidate autoComplete="off" name="RegistrationForm" onSubmit={handleSubmit}>
                <div className="form-inner">
                    <Grid>
                        <div className="form-group">
                            <label htmlFor="name">Clienti in coda: </label>
                            <input type="text" name="name" id="name" value={supermarketsDetail.clientInQueue} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Clienti in supermercato: </label>
                            <input type="text" name="name" id="name" value={supermarketsDetail.clientInSupermarket} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Nome supermercato: </label>
                            <input type="text" name="name" id="name" value={user.nome} onChange={e => setUser({...user, nome: e.target.value})}  />
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Indirizzo: </label>
                            <input type="text" name="address" id="address" value={user.indirizzo} onChange={e => setUser({...user, indirizzo: e.target.value})}  />
                        </div>
                    </Grid>
                    <Grid>
                        <div className="form-group">
                            <label htmlFor="name">Capienza: </label>
                            <input type="number" name="capacity" id="capacity" value={user.capienza} onChange={e => setUser({...user, capienza: e.target.value})}  />
                        </div>
                    </Grid>
                    <Grid>
                        <div className="form-group">
                            <label htmlFor="name">Orario di apertura: </label>
                            <input type="time" name="openingHour" id="openingHour" value={user.orarioApertura} onChange={e => setUser({...user, orarioApertura: e.target.value})} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Orario di chiusura: </label>
                            <input type="time" name="closingHour" id="closingHour" value={user.orarioChiusura} onChange={e => setUser({...user, orarioChiusura: e.target.value})}  />
                        </div>
                    </Grid>
                    <Button variant="contained" color="primary" type="submit">
                        Salva
                    </Button>
                </div>
            </form>
        ) :  null
    );
}

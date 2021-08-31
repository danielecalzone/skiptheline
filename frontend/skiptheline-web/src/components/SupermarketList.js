import React from 'react';
import FlatList from 'flatlist-react';
import Grid from '@material-ui/core/Grid';
import {Divider, useMediaQuery} from "@material-ui/core";
import SwitchActivate from "./Switch";

export default function SupermarketList(props) {

    const { isCheckedList, doEnable,supermarkets } = props;

    const matches = useMediaQuery("(max-width:650px)");


    function renderElements(item) {
        return (
            <div key={item.id}>
                <Grid container style={matches ? {display:"block"} : null}>
                    <div className="form-group">
                        <ul className="App-list">
                            {item.nome}
                        </ul>
                        <div className="App-switch">
                            <SwitchActivate item={item} doEnable={doEnable} />
                        </div>
                        <Divider />
                    </div>
                </Grid>
            </div>
        );
    }


    return (
        isCheckedList ?
            <form>
                <div className="form-inner">
                    <Grid container direction="column"
                          justify="center"
                          alignItems="center"
                    >
                        <Grid item xs={12}>
                            <h2>Gestione supermercati</h2>
                        </Grid>
                        <FlatList
                            list={supermarkets}
                            renderItem={renderElements}
                        />
                    </Grid>
                </div>
            </form>
            : null
    );
}


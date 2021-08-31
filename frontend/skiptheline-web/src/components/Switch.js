import FormControlLabel from "@material-ui/core/FormControlLabel";
import React from "react";
import {withStyles} from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";

const OrangeSwitch = withStyles({
    switchBase: {
        color: "#ff4c04",
        '&$checked': {
            color: "#ff4c04",
        },
        '&$checked + $track': {
            backgroundColor: "#fca404",
        },
    },
    checked: {},
    track: {},
})(Switch);

function SwitchActivate(props) {

    const { item, doEnable } = props;
    const [active, setActive] = React.useState(item.abilitato);
    const handleChangeEnabled = (event) => {
        active ? doEnable(item.user) : doEnable(item.user);
        setActive(!active);
    };

    return (
        <FormControlLabel
            className="App-switch"
            control={<OrangeSwitch
                checked={active}
                onChange={handleChangeEnabled}
                inputProps={{'aria-label': 'secondary checkbox'}}
            />}
            label={active ? "Abilitato" : "Disabilitato"}
        />
    )
}

export default SwitchActivate;
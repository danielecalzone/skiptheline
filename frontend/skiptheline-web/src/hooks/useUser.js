import {useEffect, useState} from "react";
import { BASE_URL } from "../utility/BaseUrl";

export function useUser() {


    const [isLoading, setLoading] = useState(false);
    const [user, setUser] = useState(null);
    const [supermarkets, setSupermarkets] = useState(null);
    const [supermarketsDetail, setSupermarketDetail] = useState(null);
    const [error, setError] = useState("");

    useEffect(() => {
        getSupermarkets();
    }, []);

    const doLogin = (username, password) => {
        setLoading(true);
        fetch(`${BASE_URL}/loginSupermarket?username=${username}&password=${password}`, {
            method: "POST",
            headers: { 'Content-Type' : 'application/json', 'Accept': 'application/json'}
        })
            .then((response) => response.json())
            .then((json) => {
                getSupermarketDetail(json.result.id);
                if (json.httpResponseCode === 200) {
                    setError("");
                    setUser(json.result);
                } else {
                    setError(json.message);
                    setUser(json.result);
                }
            })
            .catch((err) => err)
            .finally(() => {
                setLoading(false);
            });
    };

    const doRegistration = (name,address,capacity,username, password) => {
        setLoading(true);
        fetch(`${BASE_URL}/registerSupermarket?name=${name}&address=${address}&capienza=${capacity}&username=${username}&password=${password}`, {
            method: "POST",
            headers: { 'Content-Type' : 'application/json', 'Accept': 'application/json'}
        })
            .then((response) => response.json())
            .then((json) => {
                if (json.httpResponseCode === 200) {
                    setError("Registrazione avvenuta con successo!");
                    setUser(json.result);
                } else {
                    setError(json.message);
                    setUser(json.result);
                }
            })
            .catch((err) => err)
            .finally(() => setLoading(false));
    };

    const doUpdate = (name,address,capacity,orarioApertura,orarioChiusura) => {
        setLoading(true);
        fetch(`${BASE_URL}/updateSupermarket?name=${name}&address=${address}&capienza=${capacity}&orarioApertura=${orarioApertura}&orarioChiusura=${orarioChiusura}&user=${user.user}`, {
            method: "POST",
            headers: { 'Content-Type' : 'application/json', 'Accept': 'application/json'},
        })
            .then((response) => response.json())
            .catch((err) => err)
            .finally(() => setLoading(false));
    };

    const doEnable = (username) => {
        setLoading(true);
        fetch(`${BASE_URL}/changeStatus?username=${username}`, {
            method: "POST",
            headers: { 'Content-Type' : 'application/json', 'Accept': 'application/json'}
        })
            .then((response) => response.json())
            .then((json) => { getSupermarkets(); })
            .catch((err) => err)
            .finally(() => setLoading(false));
    };

    const getSupermarkets = () => {
        setLoading(true);
        fetch(`${BASE_URL}/getSupermarkets`, {
            method: "GET",
            headers: { 'Content-Type' : 'application/json', 'Accept': 'application/json'}
        })
            .then((response) => response.json())
            .then((json) => {
                let filteredSupermarket = json.result.filter((item) => {
                    return(item.amministratore === false);
                });
                setSupermarkets(filteredSupermarket);
            })
            .catch((err) => err)
            .finally(() => setLoading(false));
    };

    const getSupermarketDetail = (id) => {
        fetch(`${BASE_URL}/getSupermarket/${id} `)
            .then((response) => response.json())
            .then((json) => {
                setSupermarketDetail(json.result);
            })
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }


    return {
        isLoading,
        user,
        setUser,
        supermarkets,
        error,
        setError,
        doLogin,
        doRegistration,
        doUpdate,
        doEnable,
        supermarketsDetail
    };
}

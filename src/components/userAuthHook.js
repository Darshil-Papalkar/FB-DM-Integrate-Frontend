import { useState, useEffect } from "react";

export const AuthHook = () => {
    const [data, setData] = useState({});
    console.log(data);
    
    const login = (response) => {
        if(response.accessToken){
            window.sessionStorage.setItem('data', response);
            setData(response);
        }
    };

    const logout = () => {
        window.sessionStorage.removeItem('data');
        setData({});
    };

    useEffect(() => {
        const detail = window?.sessionStorage?.getItem('data');
        console.log(detail);
        if(detail){
            console.log(typeof detail)
            setData(JSON.parse(detail));
        }
    }, []);

    return {data, login, logout};
};

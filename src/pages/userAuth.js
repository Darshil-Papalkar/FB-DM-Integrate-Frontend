import axios from "axios";
import React, { useState } from "react";

import Login from "../components/userLogin/login";
import Register from "../components/userLogin/register";
import FacebookIntegration from "../components/userLogin/facebookIntegrationDisconnect";

import "./userAuth.css";

const UserAuth = () => {
    const [login, setLogin] = useState(true);
    const [isValidated, setIsValidated] = useState(false);
    const [isIntegrated, setIsIntegrated] = useState(false);

    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        state: false
    });

    const updateState = () => {
        if(login === false) 
            setData(prev => ({...prev, name: undefined}));
        setLogin(prev => !prev);
    };

    const updateValidation = () => {
        setIsValidated(prev => !prev);
    }

    const actions = {
        
        updateName : (e) => {
            setData(prev => ({...prev, name: e.target.value}));
        }, 
        
        updateEmail : (e) => {
            setData(prev => ({...prev, email: e.target.value}));
        },
        
        updatePassword : (e) => {
            setData(prev => ({...prev, password: e.target.value}));
        },
        
        updateRemember: (e) => {
            setData(prev => ({...prev, state: e.target.checked}));
        }
    };

    const submit = async (e) => {
        e.preventDefault();
        
        if(login){
            try{
                const res = await axios.post('http://localhost:5000/login', { data: JSON.stringify(data) })
                if(res.status === 200) updateValidation();
                else throw res.status;
            }
            catch(err){
                console.log("Error occurred while logging in", err.message);
            }
        }
        else{
            try{
                const res = await axios.post('http://localhost:5000/register', { data: JSON.stringify(data) });
                if(res.status === 200) updateValidation();
                else throw res.status;
            }
            catch(err){
                console.log("Error occurred while registering", err.message);
            }
        }
    };

    return(
        <div className="authPage">
            <div className="card">
                {
                    isValidated ?
                        <FacebookIntegration setIsIntegrated={setIsIntegrated} isIntegrated={isIntegrated} /> :
                        <React.Fragment>

                            <div className="register-login-section">
                                {
                                    login ? 
                                        <Login data={data} actions={actions} /> :
                                        <Register data={data} actions={actions}/>
                                }
                            </div>
                            <div className="register-login-checkbox">
                                <input type={'checkbox'} checked={data.state} onChange={actions.updateRemember} />
                                <div style={{paddingLeft: "15px"}}>Remember Me</div>
                            </div>
                            <div className="register-login-submit">
                                <button className="form-submit" onClick={submit}>
                                    {
                                        login ?
                                            <span>Login</span> : 
                                            <span>Sign Up</span>
                                    }
                                </button>
                            </div>
                            <div className="register-login-toggle">
                                {
                                    login ?
                                    <div>
                                        Already have an Account ? <span onClick={updateState}>Login</span>
                                    </div> :
                                    <div>
                                        Don't have an Account ? <span onClick={updateState}>Sign Up</span>
                                    </div>
                                        
                                }
                            </div>
                        </React.Fragment>
                }
            </div>
        </div>
    );

};

export default UserAuth;

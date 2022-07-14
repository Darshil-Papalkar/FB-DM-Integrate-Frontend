import React from 'react';
import FacebookLogin from "react-facebook-login";
import { Link } from 'react-router-dom';
import { AuthHook } from '../userAuthHook';

const FacebookIntegration = ({isIntegrated, setIsIntegrated}) => {

    const { data, login, logout } = AuthHook();

    const responseFacebook = (response) => {
        login(response);
        if(response.accessToken){
            setIsIntegrated(true);
        }
    }

    const deleteIntegration = () => {
        setIsIntegrated(false);
        logout();
    };

    return(
        <div className="registerpage-layout">
            <div className="registerpage-title">Facebook Page Integration</div>
            {
                isIntegrated ? 
                <div>
                    <span>Integrated Page: {data.name}</span>
                    <div>
                        <button className="form-submit delete" onClick={deleteIntegration}>
                            Delete Integration
                        </button>
                    </div>
                    <div>
                        <button type={'button'} className="form-submit">
                            <Link to={'/dashboard'}>
                                Reply To Messages
                            </Link>
                        </button>
                    </div>
                </div> :
                <div className="register-login-submit">
                    <FacebookLogin 
                        appId="535108554979975"
                        autoLoad={false}
                        fields="name,email,picture"
                        callback={responseFacebook}
                    />
                </div>
            }
        </div>
    );
};

export default FacebookIntegration;

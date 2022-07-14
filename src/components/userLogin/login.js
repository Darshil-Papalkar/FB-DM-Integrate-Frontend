import React from "react";

const Login = ({data, actions}) => {
    return(
        <div className="registerpage-layout">
            <div className="registerpage-title">Login to your account</div>
            <div className="registerpage-section">
                
                <div className="registerpage-label-field">
                    <div className="label">Email</div>
                    <input name="email" type={'email'} 
                        value={data.email} onChange={actions.updateEmail}
                    />
                </div>
                
                <div className="registerpage-label-field">
                    <div className="label">Password</div>
                    <input name="password" type={'password'} 
                        value={data.password} onChange={actions.updatePassword}
                    />
                </div>
            </div>
        </div>
    );
};

export default Login;

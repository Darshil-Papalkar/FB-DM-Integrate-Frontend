import React from "react";

const Register = ({data, actions}) => {

    return(
        <div className="registerpage-layout">
            <div className="registerpage-title">Create Account</div>
            <div className="registerpage-section">
                <div className="registerpage-label-field">
                    <div className="label">Name</div>
                    <input name="name" type={'text'} 
                        value={data.name || ''} onChange={actions.updateName} 
                    />
                </div>
                
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

export default Register;

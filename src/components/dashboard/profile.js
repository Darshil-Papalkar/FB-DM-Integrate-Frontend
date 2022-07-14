import React from 'react';

import { AuthHook } from '../userAuthHook';

const Profile = () => {

    const { data } = AuthHook();


    return(
        <div className='profile-custom-container'>
            <div className="profile-image-container">
                <div className='chat-image-container'>
                    <img src={data?.picture?.data?.url} alt='profile img'/>
                </div>
                <div className='chat-user-status'>
                    <div className='chat-user-name'>{data?.name}</div>
                    <div className='status-combo'>
                        <div className='dot'></div>
                        <div className='user-status'>Active</div>
                    </div>
                </div>
                <div className='user-connect-button'>
                    <button>
                        <i class="fas fa-phone-alt"></i> Call 
                    </button>
                    <button>
                        <i class="fas fa-user-circle"></i> Profile
                    </button>
                </div>
            </div>
            <div className='profile-detail-cotainer'>
                <div className='chat-card'>
                    <div className='chat-card-container'>
                        <div className='chat-card-title'>Customer Details</div>
                        
                        <div className='chat-user-Email'>
                            <div className='chat-email'>Email</div>
                            <div className='chat-user-email'>{data?.email}</div>
                        </div>
                        <div className='chat-user-first-name'>
                            <div className='chat-first'>First Name</div>
                            <div className='chat-user-first'>{data?.name?.split(' ')[0]}</div>
                        </div>
                        <div className='chat-user-last-name'>
                            <div className='chat-last'>Last Name</div>
                            <div className='chat-user-last'>{data?.name?.split(' ')[1]}</div>
                        </div>
                    </div>
                    <div className='chat-card-link'>
                        View more details
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
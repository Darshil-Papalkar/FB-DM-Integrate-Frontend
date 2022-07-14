import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInbox, faUserFriends, faChartLine } from '@fortawesome/free-solid-svg-icons';

import { AuthHook } from '../userAuthHook';

const Navigation = () => {
    
    const { data } = AuthHook();

    const setActive = (id) => {
        document.getElementById('1').classList.remove('activeLink');
        document.getElementById('2').classList.remove('activeLink');
        document.getElementById('3').classList.remove('activeLink');
        document.getElementById('4').classList.remove('activeLink');

        document.getElementById(id).classList.add('activeLink');
    };

    return(
        <div className='navigationSection'>
            <div className='navigationActionLinks'>
                <div id='1' className='navigationIcon' onClick={() => setActive('1')}>
                    <i className="fab fa-dribbble-square" />
                </div>
                <div id='2' className='navigationIcon activeLink' onClick={() => setActive('2')}>
                    <FontAwesomeIcon icon={faInbox} />
                </div>
                <div id='3' className='navigationIcon' onClick={() => setActive('3')}>
                    <FontAwesomeIcon icon={faUserFriends} />
                </div>
                <div id='4' className='navigationIcon' onClick={() => setActive('4')}>
                    <FontAwesomeIcon icon={faChartLine} />
                </div>
            </div>
            <div className="navigationProfile">
                <div className="imageContainer">
                    <img className="navigationImage" src={data?.picture?.data?.url} alt="Profile"/>
                </div>
            </div>
        </div>
    );
};

export default Navigation;
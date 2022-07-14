import React from 'react';

const ChatList = () => {
    return(
        <div className='converstion-section'>
            <div className='converstion-navbar'>
                <div className='conversationFilterTitle'>
                    <div className='conversationFilterIconContainer'>
                        <i className="fas fa-align-left"></i>
                    </div>
                    <div className='conversationTitle'>
                        Conversations
                    </div>
                </div>
                <div className='conversationRefresh'>
                    <i className="fas fa-redo"></i>
                </div>
            </div>
            <div className='conversation-chatList-container'>
                <ul className='conversation-chatList'>
                    {
                        [1,2,3,4,5,6,7].map(item => {
                            return(
                                <li className='conversation-chatList-item'>
                                    <div className='chatList-check-name-time'>
                                        <div className='chatList-check-name'>
                                            <div className='chatList-check'>
                                                <input type={'checkbox'} />
                                            </div>
                                            <div className='chatList-name-status'>
                                                <div className='chatList-name'>
                                                    Amit RG
                                                </div>
                                                <div className='chatList-status'>
                                                    Facebook Post
                                                </div>
                                            </div>
                                        </div>
                                        <div className='chatList-time'>
                                            10m
                                        </div>
                                    </div>
                                    <div className='chatList-message-title-description'>
                                        <div className='chatList-message-title'>
                                            Awesome Product
                                        </div>
                                        <div className='chatList-message-description'>
                                            LOREM Ipsfisakjnad gnsgwghnskjghabsjsnbjnzshgikjzsh ngkJSEMEhtnkSjthnSujtkhSnjjfhsbnkjfmszjsbztjnjzhsgjkjvhtnkgj
                                        </div>
                                    </div>
                                </li>
                            )
                        })
                    }
                    
                </ul>
            </div>
        </div>
    );
};

export default ChatList;
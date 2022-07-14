import React from 'react';

import Chat from '../components/dashboard/chat';
import Profile from '../components/dashboard/profile';
import ChatList from '../components/dashboard/chatList';
import Navigation from '../components/dashboard/navigation';

import "./dashboard.css";

const Dashboard = () => {
    return(
        <div className="dashboardSection">
            <Navigation />
            <ChatList />
            <Chat />
            <Profile />
        </div>
    );
};

export default Dashboard;
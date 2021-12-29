import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MessageIcon from '@mui/icons-material/Message';


function Header() {
    return (
        <div className="header">
            <div className="header_left">
                <img src="https://cdn-icons.flaticon.com/png/512/3536/premium/3536505.png?token=exp=1640767901~hmac=3450b322f8666378897831d90deb1b07" alt="profile" />

                <div className="header_search">
                    <SearchIcon />
                    <input type="text" placeholder="Search" />
                </div>
            </div>


            <div className="header_right">
                <HeaderOption Icon={HomeIcon} title="Home" />
                <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
                <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
                <HeaderOption Icon={MessageIcon} title="Messages" />
                <HeaderOption Icon={NotificationsIcon} title="Notifications" />

                
            </div>
        </div>
    )
}

export default Header;

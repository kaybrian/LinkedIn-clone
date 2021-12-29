import React from 'react';
import './HeaderOption.css';
import { Avatar } from '@mui/material';

function HeaderOption({avatar, Icon, title}) {
    return (
        <div className="headerOption">
            {Icon && <Icon className='headerOption_icon' />}
            {avatar && <Avatar src={avatar} className='headerOption_icon' />}
            <h5 className='headerOption_title'>{title}</h5>
        </div>
    )
}

export default HeaderOption;

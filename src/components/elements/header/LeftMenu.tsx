import React, {FC} from 'react';
import './LeftMenu.scss';
import profile from './profile.jpg';
import {BsChatDotsFill, BsGrid} from 'react-icons/bs';
import {GoIssueOpened} from 'react-icons/go';
import {AiOutlineTeam} from 'react-icons/ai';
import {FiSettings, FiLogOut} from 'react-icons/fi';
import {Link} from 'react-router-dom';

const LeftMenu : FC<{}> = () => {
    return (
        <div className="left-menu">
            <div className="profile">
                <div className="profile-img">
                    <img src={profile} alt=""/>
                </div>
                <span>heokyunam</span>
            </div>
            <ul className="actions">
                <li><Link to="/chats"><BsChatDotsFill />Chats</Link></li>
                <li><Link to="/projects"><BsGrid />Projects</Link></li>
                <li><Link to="/issues"><GoIssueOpened />Issues</Link></li>
                <li><Link to="/teams"><AiOutlineTeam />Teams</Link></li>
                <li><Link to="/settings"><FiSettings />Settings</Link></li>
            </ul>
            <div className="logout">
                <a href=""><FiLogOut />Log Out</a>
            </div>
        </div>
    )
}

export default LeftMenu;
import React, {FC} from 'react';
import './index.scss';
import profile from './profile.jpg';
import {BsChatDotsFill, BsGrid} from 'react-icons/bs';
import {GoIssueOpened} from 'react-icons/go';
import {AiOutlineTeam} from 'react-icons/ai';
import {FiSettings, FiLogOut} from 'react-icons/fi';
import {NavLink} from 'react-router-dom';

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
                <li><NavLink activeClassName='active' to="/chats"><BsChatDotsFill />Chats</NavLink></li>
                <li><NavLink activeClassName='active' to="/projects"><BsGrid />Projects</NavLink></li>
                <li><NavLink activeClassName='active' to="/issues"><GoIssueOpened />Issues</NavLink></li>
                <li><NavLink activeClassName='active' to="/teams"><AiOutlineTeam />Teams</NavLink></li>
                <li><NavLink activeClassName='active' to="/settings"><FiSettings />Settings</NavLink></li>
            </ul>
            <div className="logout">
                <a href=""><FiLogOut />Log Out</a>
            </div>
        </div>
    )
}

export default LeftMenu;
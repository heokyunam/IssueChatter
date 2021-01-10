import React, {FC} from 'react';
import './LeftMenu.scss';
import profile from '../../images/profile.jpg';
import {BsChatDotsFill, BsGrid} from 'react-icons/bs';
import {GoIssueOpened} from 'react-icons/go';
import {AiOutlineTeam} from 'react-icons/ai';
import {FiSettings, FiLogOut} from 'react-icons/fi';

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
                <li><a href="javascript:;"><BsChatDotsFill />Chats</a></li>
                <li><a href="javascript:;"><BsGrid />Projects</a></li>
                <li><a href="javascript:;"><GoIssueOpened />Issues</a></li>
                <li><a href="javascript:;"><AiOutlineTeam />Teams</a></li>
                <li><a href="javascript:;"><FiSettings />Settings</a></li>
            </ul>
            <div className="logout">
                <a href="javascript:;"><FiLogOut />Log Out</a>
            </div>
        </div>
    )
}

export default LeftMenu;
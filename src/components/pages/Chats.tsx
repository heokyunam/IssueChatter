import React from 'react';
import './Chats.scss';
import { ChatRooms } from '../elements/chatRooms';
import { ChatList } from '../elements/chatList';

const Chats = () => {
    return (
        <div className="contents">
            <ChatRooms />
            <ChatList />
        </div>
    )
}

export default Chats;
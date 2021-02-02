import React from 'react';
import './Chats.scss';
import { ChatRooms } from '../elements/chatRooms/rooms';
import { ChatList } from '../elements/chatList/chat';

const Chats = () => {
    return (
        <div className="contents">
            <ChatRooms />
            <ChatList />
        </div>
    )
}

export default Chats;
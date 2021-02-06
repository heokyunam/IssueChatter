import React from 'react';
import { ChatRooms } from '../elements/chatRooms/rooms';
import { ChatList } from '../elements/chatList/chat';

const Chats = () => {
    return (
        <div className="chat-page">
            <ChatRooms />
            <ChatList />
        </div>
    )
}

export default Chats;
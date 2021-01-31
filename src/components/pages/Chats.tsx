import React, { useState } from 'react';
import {v4} from "uuid";
import {useSelector, useDispatch} from "react-redux";
import {RootState} from "../../stores";
import './Chats.scss';
import { NEED_LOGIN, NEED_MOVE_ROOM } from '../../lang';

const Chats: React.FC = () => {
    const dispatch = useDispatch();
    const loginUserId = useSelector((state: RootState) => state.login.loginUserId);
    let selectedRoom = useSelector((state: RootState) => state.rooms.selectedRoom);
    const rooms = useSelector((state: RootState) => state.rooms.rooms);
    const chats = useSelector((state: RootState) => state.chats.chats);

    const [newRoom, setNewRoom] = useState('');
    const [newChat, setNewChat] = useState('');
    
    if(selectedRoom == null) {
        if(rooms.length > 0) {
            dispatch({
                type: "MOVE_ROOM",
                payload: rooms[0]
            })

            selectedRoom = rooms[0];
        }
    }

    const insertRoom = (title: string)  => {
        let newRoom = {
            uuid: v4(),
            title: title,
            chats: [],
        }

        dispatch({
            type: "INSERT_ROOM",
            payload: newRoom
        }) 
    }

    const insertChat = (text: string) => {
        if(loginUserId != null && selectedRoom != null) {
            let newChat = {
                uuid: v4(),
                text: text,
                writerId: loginUserId,
                chatRoomId: selectedRoom,
            }

            dispatch({
                type: "INSERT_CHAT",
                payload: newChat,
            })
        }

        if(loginUserId == null) {
            alert(NEED_LOGIN);
        } else if(selectedRoom == null) {
            alert(NEED_MOVE_ROOM);
        }
    }

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        switch(e.target.name) {
            case "room":
                setNewRoom(e.target.value);
                break;
            case "chat":
                setNewChat(e.target.value);
                break;
        }
    }

    const onClickAdd = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        switch(e.currentTarget.name) {
            case "room":
                insertRoom(newRoom);
                setNewRoom('');
                break;
            case "chat":
                insertChat(newChat);
                setNewChat('');
                break;
        }
    }

    return (
        <div style={{display:'flex'}}>
            <div className="rooms">
                {rooms.map((value) => (
                    <div className="room" key={value.uuid}>
                        {value.title}
                    </div>
                ))}
                <div>
                    <input name="room" value={newRoom} onChange={onChange}/>
                    <button name="room" onClick={onClickAdd}>추가</button>
                </div>
            </div>
            <div className="chats">
                {chats.map((value) => (
                    <div className="chat" key={value.uuid}>
                        {value.text}
                    </div>
                ))}
                <div>
                    <input name="chat" value={newChat} onChange={onChange}/>
                    <button name="chat" onClick={onClickAdd}>추가</button>
                </div>
            </div>
        </div>
    )
}

export default Chats;
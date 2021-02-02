import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 } from "uuid";
import { NEED_LOGIN, NEED_MOVE_ROOM } from "../../../lang";
import { RootState } from "../../../stores";
import './chat.scss';
import profile from "../LeftMenu/profile.jpg"
import attach from "./attach-2.svg";
import more from "./more-vertical.svg";

export const ChatList = () => {
    const dispatch = useDispatch();
    const loginUserId = useSelector((state: RootState) => state.login.loginUserId);
    const chats = useSelector((state: RootState) => state.chats.chats);
    let selectedRoom = useSelector((state: RootState) => state.rooms.selectedRoom);
    const [newChat, setNewChat] = useState('');    

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewChat(e.target.value);
    }

    const onClickAdd = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        insertChat(newChat);
        setNewChat('');
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
    
    return (
        <div className="chats">
            <div className="room-title">
                <div className="profile">
                    <img src={profile} alt=""/>
                    <div className="text">
                        <div className="title">방 타이틀</div>
                        <div className="status">writing...</div>
                    </div>
                </div>
                <div className="actions">
                    <div className="attach"><a><img src={attach}></img></a></div>
                    <div className="more"><a><img src={more}></img></a></div>
                </div>
            </div>
            <div className="chat-list">
                {chats.map((value) => (
                    <div className="chat" key={value.uuid}>                        
                        <img src={profile} alt=""/>
                        <div className="text">
                            {value.text}
                        </div>
                    </div>
                ))}
            </div>
            <div>
                <input name="chat" value={newChat} onChange={onChange}/>
                <button name="chat" onClick={onClickAdd}>추가</button>
            </div>
        </div>
    )
}
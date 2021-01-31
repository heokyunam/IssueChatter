import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 } from "uuid";
import { RootState } from "../../../stores";
import './index.scss';

export const ChatRooms = () => {
    const rooms = useSelector((state: RootState) => state.rooms.rooms);
    let selectedRoom = useSelector((state: RootState) => state.rooms.selectedRoom);
    const [newRoom, setNewRoom] = useState('');  
    const dispatch = useDispatch();      
    
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

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewRoom(e.target.value);
    }

    const onClickAdd = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        insertRoom(newRoom);
        setNewRoom('');
    }
    
    return (
        <div className="rooms">
            <div className="top">
                <div>
                    <div className="title">Chat Rooms</div>
                    <div className="sort">Recent Chats &gt;</div>
                </div>
                <div>
                    <div>
                        <input type="text"  value={newRoom} onChange={onChange}/>
                    </div>
                    <div>
                        <span className="btn-add" onClick={onClickAdd}>
                            New Room
                        </span>
                    </div>
                    
                </div>
            </div>
            <div className="rooms-list">
                {rooms.map((value) => (
                    <div className="room" key={value.uuid}>
                        <div className="profile">
                            <div className="title">
                                {value.title}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
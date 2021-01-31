import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 } from "uuid";
import { RootState } from "../../../stores";


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

    const onClickAdd = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        insertRoom(newRoom);
        setNewRoom('');
    }
    
    return (
        <div className="rooms">
            <div className="title">
                <div>Chat Rooms</div>
                <div>Recent Chats &gt;</div>
            </div>
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
    )
}
export type ChatRoom = {
    uuid: string,
    title: string,
}

type InsertRoomAction = {
    type: "INSERT_ROOM",
    payload: ChatRoom,
}

type MoveRoomAction = {
    type: "MOVE_ROOM",
    payload: ChatRoom,
}

export type RoomsAction = InsertRoomAction | MoveRoomAction;

export type RoomsState = {
    rooms: ChatRoom[],
    selectedRoom: ChatRoom | null,
}

const initialState: RoomsState = {
    rooms: [
        {
            uuid: "1234",
            title: "방 타이틀"
        }
    ],
    selectedRoom: null
}

export const roomsReducer = (
    state: RoomsState = initialState,
    action: RoomsAction
) => {
    switch(action.type) {
        case "INSERT_ROOM":
            return {
                ...state
                , rooms: [...state.rooms, action.payload]
                , selectedRoom: action.payload
            }
        case "MOVE_ROOM":
            return {
                ...state
                , selectedRoom: action.payload
            }
        default:
            return state;
    }
}
export type Chat = {
    uuid: string,
    text: string,
    writerId: string,
    chatRoomId: string,
}

export type ChatRoom = {
    uuid: string,
    title: string,
    chats: Chat[],
}

type InsertChatAction = {
    type: "INSERT_CHAT",
    payload: Chat,
}

type InsertRoomAction = {
    type: "INSERT_ROOM",
    payload: ChatRoom,
}

type MoveRoomAction = {
    type: "MOVE_ROOM",
    payload: ChatRoom,
}

export type ChatAction = InsertChatAction | InsertRoomAction | MoveRoomAction;

export type ChatsState = {
    rooms: ChatRoom[],
    selectedRoom: ChatRoom | null,
}

const initialState: ChatsState = {
    rooms: [
        {
            uuid: "1234",
            title: "방 타이틀",
            chats: [
                {
                    uuid: "1134",
                    text: "챗챗",
                    writerId: "111",
                    chatRoomId: "1234"
                }
            ]
        }
    ],
    selectedRoom: null
}

export const chatsReducer = (
    state: ChatsState = initialState,
    action: ChatAction
) => {
    switch(action.type) {
        case "INSERT_ROOM":
            return {
                ...state
                , rooms: [...state.rooms, action.payload]
                , selectedRoom: action.payload
            };
        case "INSERT_CHAT":
            let selectedRoom = state.selectedRoom;

            selectedRoom?.chats.push(action.payload);

            return {
                ...state
                , rooms: [...state.rooms, selectedRoom]
                , selectedRoom
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
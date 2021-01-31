export type Chat = {
    uuid: string,
    text: string,
    writerId: string,
    chatRoomId: string,
}

type InsertChatAction = {
    type: "INSERT_CHAT",
    payload: Chat,
}

export type ChatAction = InsertChatAction;

export type ChatsState = {
    chats: Chat[]
}

const initialState: ChatsState = {
    chats: [
        {
            uuid: "2333",
            text: "챗챗",
            writerId: "heokyunam",
            chatRoomId: "1234",
        }
    ]
}

export const chatsReducer = (
    state: ChatsState = initialState,
    action: ChatAction
) => {
    switch(action.type) {
        case "INSERT_CHAT":
            return {
                ...state
                , chats: [...state.chats, action.payload]
            }
        default:
            return state;
    }
}
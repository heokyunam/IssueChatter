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
            text: "오늘은 바빠서 내일 할 수 있을 것 같아요. 나중에 시간 될 때 연락 드릴게요.",
            writerId: "asdf",
            chatRoomId: "1234",
        },
        {
            uuid: "2333",
            text: "네, 그럼 내일 부탁드리겠습니다.",
            writerId: "heokyunam",
            chatRoomId: "1234",
        },
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
export type LoginUserState = {
    loginUserId: string | null,
}

export type LoginAction = {
    type: "LOGIN",
    payload: string,
}

const initialState: LoginUserState = {
    loginUserId: 'heokyunam'
}

export const loginUserReducer = (
    state: LoginUserState = initialState,
    action: LoginAction
) => {
    return state;
}
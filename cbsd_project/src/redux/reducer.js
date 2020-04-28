import { USER_SIGN_UP, USER_SIGN_IN, USER_SIGN_OUT, USER_AUTH_ERROR } from "./action"

const defaultAuth = { userName: "", email: "", error: "" }

export const authReducer = (state = defaultAuth, action) => {
    switch (action.type) {
        case USER_SIGN_UP:
            return { email: action.payload.email, refreshToken: action.payload.refreshToken }
        case USER_SIGN_IN:
            return { email: action.payload.email, refreshToken: action.payload.refreshToken }
        case USER_AUTH_ERROR:
            return { ...state, error: action.payload }
        case USER_SIGN_OUT:
            return defaultAuth
        default:
            return state
    }
}
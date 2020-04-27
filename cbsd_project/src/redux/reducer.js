import { SIGN_IN, SING_OUT, SIGN_UP } from "./action"

const defaultAuth = {
    userName: "",
    email: ""
}
export const authReducer = (state = defaultAuth, action) => {
    switch (action.type) {
        case SIGN_IN:
            return state
        case SING_OUT:
            return state
        case SIGN_UP:
        default:
            return state
    }
}
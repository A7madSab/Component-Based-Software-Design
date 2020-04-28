// Auth Action
import firebase from "../config/index"
import { AsyncStorage } from "react-native"

export const USER_SIGN_UP = "USER_SIGN_UP"
export const USER_SIGN_IN = "USER_SIGN_IN"
export const USER_SIGN_OUT = "USER_SIGN_OUT"
export const USER_AUTH_ERROR = "USER_AUTH_ERROR"

export const signUp = signUpUser => async dispatch => {
    try {
        const { user } = await firebase.auth().createUserWithEmailAndPassword(signUpUser.email, signUpUser.password)
        const signedUpInUser = { id: user.uid, email: user.email, refreshToken: user.refreshToken }
        dispatch({ type: USER_SIGN_UP, payload: signedUpInUser })
    } catch (err) {
        dispatch({ type: USER_AUTH_ERROR, payload: err.message })
    }
}
export const signIn = signInUser => async dispatch => {
    try {
        const { user } = await firebase.auth().signInWithEmailAndPassword(signInUser.email, signInUser.password)
        const signedInUser = { id: user.uid, email: user.email, refreshToken: user.refreshToken }
        dispatch({ type: USER_SIGN_IN, payload: signedInUser })
    } catch (err) {
        dispatch({ type: USER_AUTH_ERROR, payload: err.message })
    }
}
export const signOut = () => async dispatch => {
    try {
        const data = await firebase.auth().signOut()
        console.log("data", data)
        dispatch({ type: USER_SIGN_OUT })
    } catch (err) {
        console.log("err", err)
    }
}
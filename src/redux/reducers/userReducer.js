import { USER_LOGIN } from "../../utils/constants";
import { LOGIN, REGISTER } from "../types/userType"

let user = null;
let accessTokenUser = null;
if (localStorage.getItem(USER_LOGIN)) {
    user = JSON.parse(localStorage.getItem(USER_LOGIN));
    accessTokenUser = JSON.parse(localStorage.getItem(USER_LOGIN)).accessToken;
}
const initialState = {
    userLogin: user,
    accessToken: accessTokenUser
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER: {
            return { ...state };
        }
        case LOGIN: {
            localStorage.setItem(USER_LOGIN, JSON.stringify(action.payload))
            return { ...state };
        }
        default: {
            return state
        }
    }
}

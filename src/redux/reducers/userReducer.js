import { ACCESS_TOKEN, USER_LOGIN } from "../../utils/constants";
import { GET_PROFILE, LOGIN, REGISTER, UPDATE_PROFILE } from "../types/userType"

let user = null;
let accessTokenUser = null;
if (localStorage.getItem(USER_LOGIN)) {
    user = JSON.parse(localStorage.getItem(USER_LOGIN));
    accessTokenUser = JSON.parse(localStorage.getItem(USER_LOGIN)).accessToken;
}
const initialState = {
    userLogin: user,
    accessToken: accessTokenUser,
    userProfile: null,
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER: {
            return { ...state };
        }
        case LOGIN: {
            localStorage.setItem(USER_LOGIN, JSON.stringify(action.payload))
            localStorage.setItem(ACCESS_TOKEN, action.payload.accessToken)
            return { ...state };
        }
        case GET_PROFILE: {
            state.userProfile = action.payload;
            return { ...state };
        }
        case UPDATE_PROFILE: {
            state.userProfile = action.payload;
            return { ...state };
        }
        default: {
            return state
        }
    }
}

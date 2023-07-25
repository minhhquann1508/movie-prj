import { applyMiddleware, combineReducers, createStore } from "redux";
import { manageMovieReducer } from '../reducers/manageMovieReducer'
import { manageCinemaReducer } from '../reducers/manageCinemaReducer'
import { loadingReducer } from '../reducers/loadingReducer'
import { userReducer } from '../reducers/userReducer'
import thunk from "redux-thunk";
const rootReducer = combineReducers({
    manageMovieReducer,
    manageCinemaReducer,
    loadingReducer,
    userReducer
})
export const store = createStore(rootReducer, applyMiddleware(thunk))
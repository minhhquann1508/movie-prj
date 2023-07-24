import { applyMiddleware, combineReducers, createStore } from "redux";
import { manageMovieReducer } from '../reducers/manageMovieReducer'
import { manageCinemaReducer } from '../reducers/manageCinemaReducer'
import { loadingReducer } from '../reducers/loadingReducer'
import thunk from "redux-thunk";
const rootReducer = combineReducers({
    manageMovieReducer,
    manageCinemaReducer,
    loadingReducer
})
export const store = createStore(rootReducer, applyMiddleware(thunk))
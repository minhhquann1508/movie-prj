import { applyMiddleware, combineReducers, createStore } from "redux";
import { manageMovieReducer } from '../reducers/manageMovieReducer'
import thunk from "redux-thunk";
const rootReducer = combineReducers({
    manageMovieReducer
})
export const store = createStore(rootReducer, applyMiddleware(thunk))
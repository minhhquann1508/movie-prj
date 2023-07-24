import { HIDE_LOADING_HOME_TIME, HIDE_LOADING_SHOW_TIME, HIDE_LOADING_THEME, SHOW_LOADING_HOME_TIME, SHOW_LOADING_SHOW_TIME, SHOW_LOADING_THEME } from "../types/loadingType"

const initialState = {
    isLoadingTheme: false,
    isLoadingShowtime: false,
    isLoading: false,
}

export const loadingReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_LOADING_THEME: {
            state.isLoadingTheme = true;
            return { ...state };
        }
        case HIDE_LOADING_THEME: {
            state.isLoadingTheme = false;
            return { ...state };
        }
        case SHOW_LOADING_SHOW_TIME: {
            state.isLoadingShowtime = true;
            return { ...state };
        }
        case HIDE_LOADING_SHOW_TIME: {
            state.isLoadingShowtime = false;
            return { ...state };
        }
        case SHOW_LOADING_HOME_TIME: {
            state.isLoading = true;
            return { ...state };
        }
        case HIDE_LOADING_HOME_TIME: {
            state.isLoading = false;
            return { ...state };
        }
        default: {
            return state
        }
    }
}

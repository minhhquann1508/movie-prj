import { GET_BANNER, GET_DETAIL_MOVIE, GET_MOVIE_LIST } from "../types/movieType"

const initialState = {
    listBanner: null,
    movieList: null,
    movieDetail: null
}

export const manageMovieReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_BANNER: {
            state.listBanner = action.payload;
            return { ...state };
        }
        case GET_MOVIE_LIST: {
            state.movieList = action.payload;
            return { ...state };
        }
        case GET_DETAIL_MOVIE: {
            state.movieDetail = action.payload;
            return { ...state };
        }
        default: {
            return state
        }
    }
}

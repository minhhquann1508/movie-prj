import { manageMovieService } from "../../services/ManageMovieService"
import { GET_BANNER, GET_MOVIE_LIST } from "../types/movieType";

export const getBannerAction = () => {
    return async (dispatch) => {
        try {
            let result = await manageMovieService.getBannerList();
            if (result.status === 200) {
                dispatch({
                    type: GET_BANNER,
                    payload: result.data.content
                })
            }
        }
        catch (error) {
            console.log(error);
        }
    }
}
export const getMovieListAction = () => {
    return async (dispatch) => {
        try {
            let result = await manageMovieService.getMovieList();
            if (result.status === 200) {
                dispatch({
                    type: GET_MOVIE_LIST,
                    payload: result.data.content
                })
            }
        }
        catch (error) {
            console.log(error);
        }
    }
}
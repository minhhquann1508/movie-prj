import { manageMovieService } from "../../services/ManageMovieService"
import { GET_BANNER, GET_DETAIL_MOVIE, GET_MOVIE_LIST } from "../types/movieType";
import { hideLoadingHometimeAction, hideLoadingThemeAction, showLoadingHomeAction, showLoadingThemeAction } from "./loadingAction";
//xử lý hành động lấy các banner
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
//xử lý hành động lấy danh sách phim
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

//Lấy chi tiết phim 
export const getDetailAction = (id) => {
    return async (dispatch) => {
        await dispatch(showLoadingHomeAction())
        try {
            await new Promise((resolve) => setTimeout(resolve, 1000));
            let result = await manageMovieService.getDetailMovie(id);
            if (result.status === 200) {
                dispatch({
                    type: GET_DETAIL_MOVIE,
                    payload: result.data.content
                })
            }
            await dispatch(hideLoadingHometimeAction())
        }
        catch (error) {
            console.log(error);
            await dispatch(hideLoadingHometimeAction())
        }
    }
} 
import { manageCinemaService } from "../../services/ManageCinemaService";
import { GET_LIST_CINEMA, GET_LIST_CINEMA_BRAND, GET_LIST_SEAT, GET_LIST_SHOWTIME_BY_CINEMA } from "../types/cinemaType";
import { hideLoadingHometimeAction, hideLoadingShowtimeAction, hideLoadingThemeAction, showLoadingHomeAction, showLoadingShowtimeAction, showLoadingThemeAction } from "./loadingAction";
export const getListCinemaByIdAction = (maHeThongRap, img) => {
    return async (dispatch) => {
        await dispatch(showLoadingThemeAction())
        try {
            await new Promise((resolve) => setTimeout(resolve, 1000));
            let result = await manageCinemaService.getListCinemaById(maHeThongRap);
            if (result.status === 200) {
                await dispatch({
                    type: GET_LIST_CINEMA,
                    payload: result.data.content,
                    img,
                    maHeThongRap
                })
            }
            await dispatch(hideLoadingThemeAction())
        }
        catch (error) {
            console.log(error);
            await dispatch(hideLoadingThemeAction())
        }
    }
}

export const getShowTimeByCinemaAction = (maHeThongRap, maCumRap) => {
    return async (dispatch) => {
        await dispatch(showLoadingShowtimeAction())
        try {
            await new Promise((resolve) => setTimeout(resolve, 1000));
            let result = await manageCinemaService.getShowtimeByCinema(maHeThongRap);
            if (result.status === 200) {
                await dispatch({
                    type: GET_LIST_SHOWTIME_BY_CINEMA,
                    payload: result.data.content,
                    maCumRap
                })
            }
            await dispatch(hideLoadingShowtimeAction())
        }
        catch (error) {
            console.log(error);
        }
    }
}

export const getCinemaBrandAction = () => {
    return async (dispatch) => {
        try {
            let result = await manageCinemaService.getCinemaBrand();
            if (result.status === 200) {
                await dispatch({
                    type: GET_LIST_CINEMA_BRAND,
                    payload: result.data.content,
                })
            }
        }
        catch (error) {
            console.log(error);
        }
    }
}

export const getListSeatAction = (maLichChieu) => {
    return async (dispatch) => {
        await dispatch(showLoadingHomeAction())
        try {
            let result = await manageCinemaService.getListSeat(maLichChieu);
            if (result.status === 200) {
                await dispatch({
                    type: GET_LIST_SEAT,
                    payload: result.data.content,
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


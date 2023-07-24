import { HIDE_LOADING_HOME_TIME, HIDE_LOADING_SHOW_TIME, HIDE_LOADING_THEME, SHOW_LOADING_HOME_TIME, SHOW_LOADING_SHOW_TIME, SHOW_LOADING_THEME } from "../types/loadingType"
//gọi load phần side bar
export const showLoadingThemeAction = () => {
    return {
        type: SHOW_LOADING_THEME
    }
}
//Gọi hide load phần sidebar

export const hideLoadingThemeAction = () => {
    return {
        type: HIDE_LOADING_THEME
    }
}

//Gọi load phần showtime
export const showLoadingShowtimeAction = () => {
    return {
        type: SHOW_LOADING_SHOW_TIME
    }
}
//Gọi hide load phần showtime
export const hideLoadingShowtimeAction = () => {
    return {
        type: HIDE_LOADING_SHOW_TIME
    }
}
//Gọi load phần home mỗi lần qua trang mới
export const showLoadingHomeAction = () => {
    return {
        type: SHOW_LOADING_HOME_TIME
    }
}
//Tắt load phần home mỗi lần qua trang mới
export const hideLoadingHometimeAction = () => {
    return {
        type: HIDE_LOADING_HOME_TIME
    }
}
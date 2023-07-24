import { GET_LIST_CINEMA, GET_LIST_CINEMA_BRAND, GET_LIST_SEAT, GET_LIST_SHOWTIME_BY_CINEMA } from "../types/cinemaType"

const initialState = {
    listCinema: null,
    logoImage: null,
    maHeThongRap: null,
    listShowtime: null,
    listCinemaBrand: null,
    listSeat: null
}

export const manageCinemaReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_LIST_CINEMA: {
            state.listCinema = action.payload;
            state.logoImage = action.img;
            state.listShowtime = null;
            state.maHeThongRap = action.maHeThongRap;
            return { ...state };
        }
        case GET_LIST_SHOWTIME_BY_CINEMA: {
            const { payload, maCumRap } = action;
            let newListShowtime = payload[0].lstCumRap.filter(cinema => cinema.maCumRap === maCumRap);
            state.listShowtime = newListShowtime;
            return { ...state };
        }
        case GET_LIST_CINEMA_BRAND: {
            state.listCinemaBrand = action.payload;
            return { ...state };
        }
        case GET_LIST_SEAT: {
            state.listSeat = action.payload;
            return { ...state };
        }
        default: {
            return state
        }
    }
}

import { GROUP_ID } from "../utils/constants";
import { BaseService } from "./BaseService";

class ManageCinemaService extends BaseService {
    constructor() {
        super()
    }
    getListCinemaById = (maHeThongRap) => {
        return this.get(`api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${maHeThongRap}`)
    }
    getShowtimeByCinema = (maHeThongRap) => {
        return this.get(`api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${maHeThongRap}&maNhom=${GROUP_ID}`)
    }
    getCinemaBrand = () => {
        return this.get(`api/QuanLyRap/LayThongTinHeThongRap`)
    }
    getListSeat = (maLichChieu) => {
        return this.get(`api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`)
    }
}

export const manageCinemaService = new ManageCinemaService()
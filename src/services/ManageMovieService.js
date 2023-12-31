import { GROUP_ID } from "../utils/constants";
import { BaseService } from "./BaseService";

class ManageMovieService extends BaseService {
    constructor() {
        super()
    }
    getBannerList() {
        return this.get('api/QuanLyPhim/LayDanhSachBanner')
    }
    getMovieList() {
        return this.get(`api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUP_ID}`)
    }
    getDetailMovie(id) {
        return this.get(`api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${id}`)
    }
}

export const manageMovieService = new ManageMovieService()
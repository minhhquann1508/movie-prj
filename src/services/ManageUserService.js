import { GROUP_ID } from "../utils/constants";
import { BaseService } from "./BaseService";
class ManageUservice extends BaseService {
    constructor() {
        super()
    }
    register = (user) => {
        return this.post('api/QuanLyNguoiDung/DangKy', user)
    }
    login = (user) => {
        return this.post('api/QuanLyNguoiDung/DangNhap', user)
    }
    getProfileUser = () => {
        return this.post(`api/QuanLyNguoiDung/ThongTinTaiKhoan`, '')
    }
    updateProfile = (newProfile) => {
        return this.put(`api/QuanLyNguoiDung/CapNhatThongTinNguoiDung`, newProfile)
    }
}

export const manageUservice = new ManageUservice()
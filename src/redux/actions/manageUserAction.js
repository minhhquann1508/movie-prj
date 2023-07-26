import { manageUservice } from "../../services/ManageUserService"
import { CHANGE_USER_TAB, GET_PROFILE, LOGIN, REGISTER, UPDATE_PROFILE } from "../types/userType";
import Swal from 'sweetalert2'
//Xử lý hành động đăng ký
export const registerAction = (user, resetForm) => {
    return async (dispatch) => {
        try {
            let result = await manageUservice.register(user);
            if (result.status === 200) {
                await dispatch({
                    type: REGISTER,
                    payload: user
                })
            }
            await Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Đăng ký thành công',
                showConfirmButton: false,
                timer: 1500
            })
            await resetForm();
        }
        catch (error) {
            console.log(error);
            await Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: error.response.data.content,
                showConfirmButton: false,
                timer: 1500
            })
        }
    }
}

//Xử lý hành động đăng nhập 
export const loginAction = (user, resetForm, navigate) => {
    return async (dispatch) => {
        try {
            let result = await manageUservice.login(user);
            if (result.status === 200) {
                await dispatch({
                    type: LOGIN,
                    payload: result.data.content
                })
            }
            await Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Đăng nhập thành công',
                showConfirmButton: false,
                timer: 1500
            })
            await resetForm();
            await navigate('/');
            window.location.reload();
        }
        catch (error) {
            console.log(error);
            await Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: error.response.data.content,
                showConfirmButton: false,
                timer: 1500
            })
        }
    }
}

//Lấy thông tin chi tiết tài khoản
export const profielUser = () => {
    return async (dispatch) => {
        try {
            let result = await manageUservice.getProfileUser();
            if (result.status === 200) {
                await dispatch({
                    type: GET_PROFILE,
                    payload: result.data.content
                })
            }
        }
        catch (error) {
            console.log(error);
        }
    }
}

//Sửa thông tin tài khoản người dùng
export const updateProfile = (newProfile) => {
    return async (dispatch) => {
        try {
            let result = await manageUservice.updateProfile(newProfile);
            if (result.status === 200) {
                await dispatch({
                    type: UPDATE_PROFILE,
                    payload: result.data.content
                })
                await Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Chỉnh sửa thông tin thành công',
                    showConfirmButton: false,
                    timer: 1500
                })
                window.location.reload();
            }
        }
        catch (error) {
            await Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: error.response.data.content,
                showConfirmButton: false,
                timer: 1500
            })
        }
    }
}
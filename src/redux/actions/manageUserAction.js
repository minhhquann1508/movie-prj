import { manageUservice } from "../../services/ManageUserService"
import { LOGIN, REGISTER } from "../types/userType";
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
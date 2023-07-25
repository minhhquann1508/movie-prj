import React from 'react'
import BreadCrumb from '../../components/BreadCrumb'
import { loginItems } from '../../utils/constants'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { loginAction } from '../../redux/actions/manageUserAction';
import { useNavigate } from 'react-router-dom';
import MyForm from '../../components/test';
const SignupSchema = Yup.object().shape({
    taiKhoan: Yup.string()
        .min(2, 'Tài khoản quá ngắn')
        .max(50, 'Tài khoản vượt quá ký tự cho phép')
        .required('Không bỏ trống trường này'),
    matKhau: Yup.string()
        .min(2, 'Mật khẩu quá ngắn')
        .max(50, 'Mật khẩu vượt quá ký tự cho phép')
        .required('Không bỏ trống trường này'),
});
export default function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            taiKhoan: '',
            matKhau: '',
        },
        validationSchema: SignupSchema,
        onSubmit: (values, { resetForm }) => {
            dispatch(loginAction(values, resetForm, navigate))
        },
    });
    return (
        <section className='flex justify-center pb-20'>
            <div className="w-4/5 flex flex-col items-center">
                <BreadCrumb data={['Đăng ký']} />
                <div className="w-full max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-900 dark:text-gray-100 border-2 border-pink-600">
                    <h1 className="text-2xl font-bold text-center text-pink-600">Đăng nhập</h1>
                    <form onSubmit={formik.handleSubmit} className="space-y-6">
                        {loginItems.map((item, index) => {
                            return (
                                <div key={index} className="space-y-1 text-sm">
                                    <label className="block dark:text-gray-400 font-semibold">{item.label}</label>
                                    <input type={item.type} name={item.name} value={formik.values[item.name]} onChange={formik.handleChange} placeholder={item.placeholder} className="border focus:outline-pink-600 focus:border-pink-600 w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-red-400" />
                                    {formik.errors[item.name] ? <div className='text-red-600'>{formik.errors[item.name]}</div> : ''}
                                </div>
                            )
                        })}
                        <button type='submit' className="block w-full p-3 text-center rounded-lg text-white font-bold dark:text-gray-900 dark:bg-red-400 bg-pink-600 hover:bg-pink-700 duration-300">Đăng nhập</button>
                    </form>
                    <p className="text-xs text-center sm:px-6 dark:text-gray-400">Chưa có tài khoản?
                        <a rel="noopener noreferrer" href="#" className="underline dark:text-gray-100 text-pink-600 font-semibold">Đăng ký ngay</a>
                    </p>
                </div>
            </div>
        </section>
    )
}

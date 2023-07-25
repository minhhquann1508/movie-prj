import React, { useEffect, useState } from 'react'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useSelector } from 'react-redux';
// Định nghĩa schema validation bằng Yup
const validationSchema = Yup.object().shape({
    taiKhoan: Yup.string().required('Vui lòng nhập tên.'),
    // matKhau: Yup.string().required('Vui lòng nhập tên.'),
    hoTen: Yup.string().required('Vui lòng nhập tên.'),
    soDT: Yup.string().required('Vui lòng nhập tên.'),
    email: Yup.string().required('Vui lòng nhập email.'),
});
export default function MyForm() {
    const { userLogin } = useSelector(state => state.userReducer);
    const [userData, setUserData] = useState({ taiKhoan: '', hoTen: '', soDT: '', email: '', });
    useEffect(() => {
        setUserData(userLogin);
    }, [])
    const handleSubmit = (values, { setSubmitting }) => {
        // Do something with the form values (e.g., make an API call to update data)
        console.log(values);
        // Update data back to API if needed
        setSubmitting(false);
    };
    return (
        <Formik
            initialValues={userData}
            enableReinitialize // Cho phép cập nhật lại initialValues khi userData thay đổi
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {({ isSubmitting }) => (
                <Form>
                    <div>
                        <label htmlFor="name">Tài khoản:</label>
                        <Field type="text" name="taiKhoan" />
                    </div>
                    {/* <div>
                        <label htmlFor="name">Mật khẩu:</label>
                        <Field type="password" name="matKhau" />
                    </div> */}
                    <div>
                        <label htmlFor="name">Họ tên</label>
                        <Field type="text" name="hoTen" />
                    </div>
                    <div>
                        <label htmlFor="name">Số điện thoại</label>
                        <Field type="text" name="soDT" />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <Field type="email" name="email" />
                    </div>
                    <div>
                        <button type="submit" disabled={isSubmitting}>
                            Cập nhật
                        </button>
                    </div>
                </Form>
            )}
        </Formik>
    );
}

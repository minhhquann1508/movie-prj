import React, { useEffect, useState } from 'react';
import {
    DesktopOutlined,
    PieChartOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import BreadCrumb from '../../components/BreadCrumb';
import '../../global.scss'
import { useDispatch, useSelector } from 'react-redux';
import { Field, Form, Formik } from 'formik';
import { profielUser, updateProfile } from '../../redux/actions/manageUserAction';
const { Content, Sider } = Layout;
function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}
const items = [
    getItem('Thông tin tài khoản', '1', <PieChartOutlined />, 'Nội dung 1'),
    getItem('Thông tin đặt vé', '2', <DesktopOutlined />, 'Nội dung 2'),
];
//Render table người dùng
const RenderProfile = (props) => {
    const dispatch = useDispatch();
    const { data } = props;
    const [profileUser, setProfileUser] = useState({ taiKhoan: '', hoTen: '', soDT: '', email: '', matKhau: '', maNhom: 'GP00', loaiNguoiDung: 'KhachHang' });
    const [isEdit, setIsEdit] = useState(false);
    const handleSubmit = (values) => {
        if (!isEdit) {
            dispatch(updateProfile(values));
        }
    };
    useEffect(() => {
        if (data !== null) {
            setProfileUser(data);
        }
    }, [data])
    return (
        <Formik
            initialValues={profileUser}
            enableReinitialize
            onSubmit={handleSubmit}
        >
            {() => (
                <section className="p-6 dark:bg-gray-800 dark:text-gray-50">
                    <Form className="container flex flex-col mx-auto space-y-12">
                        <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
                            <div className="space-y-2 col-span-full lg:col-span-1">
                                <p className="font-medium">Thông tin người dùng</p>
                                <p className="text-xs">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci fuga autem eum!</p>
                            </div>
                            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                                <div className="col-span-full sm:col-span-3">
                                    <label className="text-sm font-semibold">Tài khoản</label>
                                    <Field disabled={!isEdit} type="text" name='taiKhoan' className="w-full p-2 border rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" />
                                </div>
                                <div className="col-span-full sm:col-span-3">
                                    <label className="text-sm font-semibold">Mật khẩu</label>
                                    <Field disabled={!isEdit} type="text" name='matKhau' className="w-full p-2 border rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" />
                                </div>
                                <div className="col-span-full">
                                    <label className="text-sm font-semibold">Email</label>
                                    <Field disabled={!isEdit} type="email" name='email' className="w-full p-2 border rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" />
                                </div>
                                <div className="col-span-full">
                                    <label className="text-sm font-semibold">Họ tên</label>
                                    <Field disabled={!isEdit} type="text" name='hoTen' className="w-full p-2 border rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" />
                                </div>
                                <div className="col-span-full">
                                    <label className="text-sm font-semibold">Số điện thoại</label>
                                    <Field disabled={!isEdit} type="text" name='soDT' className="w-full p-2 border rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" />
                                </div>
                                <div className='text-right col-span-full'>
                                    {isEdit ?
                                        <button type="submit" className='bg-pink-600 p-2 rounded-md font-semibold text-white'
                                            onClick={() => setIsEdit(!isEdit)}
                                        >
                                            Cập nhật
                                        </button> :
                                        <button type="submit" className='bg-pink-600 p-2 rounded-md font-semibold text-white'
                                            onClick={() => setIsEdit(!isEdit)}
                                        >
                                            Chỉnh sửa
                                        </button>
                                    }

                                </div>
                            </div>
                        </fieldset>
                    </Form>
                </section>
            )}
        </Formik>
    )
}

const RenderListFilm = (props) => {
    return (
        <div className="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10 dark:bg-gray-900 dark:text-gray-100">
            <h2 className="text-xl font-semibold">Your cart</h2>
            <ul className="flex flex-col divide-y divide-gray-700">
                <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
                    <div className="flex w-full space-x-2 sm:space-x-4">
                        <img className="flex-shrink-0 object-cover w-20 h-20 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500" src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80" alt="Polaroid camera" />
                        <div className="flex flex-col justify-between w-full pb-4">
                            <div className="flex justify-between w-full pb-2 space-x-2">
                                <div className="space-y-1">
                                    <h3 className="text-lg font-semibold leadi sm:pr-8">Polaroid camera</h3>
                                    <p className="text-sm dark:text-gray-400">Classic</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-lg font-semibold">59.99€</p>
                                    <p className="text-sm line-through dark:text-gray-600">75.50€</p>
                                </div>
                            </div>
                            <div className="flex text-sm divide-x">
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    )
}

const UserInformation = () => {
    const dispacth = useDispatch()
    //Set state chuyển tab
    const [tabs, setTabs] = useState('2')
    const [collapsed, setCollapsed] = useState(false);
    const { userProfile } = useSelector(state => state.userReducer)
    useEffect(() => {
        dispacth(profielUser())
    }, [])
    return (
        <Layout
            style={{
                minHeight: '100vh',
            }}
        >
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <div className="demo-logo-vertical" />
                <Menu theme="dark" defaultSelectedKeys={tabs} mode="inline">
                    {items.map((item) => (
                        <Menu.Item key={item.key} icon={item.icon} onClick={() => setTabs(item.key)}>
                            {item.label}
                        </Menu.Item>
                    ))}
                </Menu>
            </Sider>
            <Layout>
                <Content
                    style={{
                        margin: '0 16px',
                    }}
                >
                    <BreadCrumb data={['Quản lý tài khoản', 'minhhquann1508']} />
                    <div style={{ padding: 24 }}>
                        {tabs === '1' ? <RenderProfile data={userProfile} /> : <RenderListFilm />}
                    </div>
                </Content>
            </Layout>
        </Layout>
    );
};
export default UserInformation;
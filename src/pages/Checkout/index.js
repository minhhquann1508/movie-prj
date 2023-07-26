import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getListSeatAction, pickSeatAction } from '../../redux/actions/manageCinema';
import { useNavigate, useParams } from 'react-router-dom';
import style from './style.module.scss'
import BreadCrumb from '../../components/BreadCrumb';
import HomeLoading from '../Loading/HomeLoading';
export default function Checkout() {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const { checkoutId } = useParams();
    const { listSeat, listSeatBooking } = useSelector(state => state.manageCinemaReducer);
    const { isLoading } = useSelector(state => state.loadingReducer);
    const { userLogin } = useSelector(state => state.userReducer);
    useEffect(() => {
        dispatch(getListSeatAction(checkoutId))
        if (!userLogin) {
            navigate('/login')
        }
    }, []);
    console.log(userLogin);
    //Hàm xử lý render ra trạng thái và danh sách các hàng ghế
    const renderSeat = () => {
        let cssSeat = '';
        return listSeat?.danhSachGhe.map((seat, index) => {
            if (seat.daDat) {
                return (
                    <div key={index} className='text-center'>
                        <button disabled className={`${style[`bookedSeat`]} w-10 h-10 rounded-md opacity-90 hover:opacity-100 text-white`} style={{ border: '1px solid #fff' }}>{seat.tenGhe}</button>
                    </div>
                )
            }
            else {
                let newIndex = listSeatBooking?.findIndex((bookingSeat) => bookingSeat.maGhe === seat.maGhe);
                if (newIndex !== -1) {
                    return (
                        <div key={index} className='text-center'>
                            <button className={`${style[`bookingSeat`]}  w-10 h-10 rounded-md opacity-90 hover:opacity-100 text-white`}
                                style={{ border: '1px solid #fff' }}
                                onClick={() => {
                                    dispatch(pickSeatAction(seat))
                                }}
                            >
                                {seat.tenGhe}
                            </button>
                        </div>
                    )
                }
                else {
                    if (seat.loaiGhe === 'Thuong') {
                        cssSeat = 'normalSeat';
                    }
                    else {
                        cssSeat = 'vipSeat';
                    }
                    return (
                        <div key={index} className='text-center'>
                            <button className={`${style[`${cssSeat}`]}  w-10 h-10 rounded-md opacity-90 hover:opacity-100 text-white`}
                                style={{ border: '1px solid #fff' }}
                                onClick={() => {
                                    dispatch(pickSeatAction(seat))
                                }}
                            >
                                {seat.tenGhe}
                            </button>
                        </div>
                    )
                }
            }
        })
    }
    if (isLoading) {
        return <HomeLoading />
    }
    else {
        return (
            <section className='flex flex-col items-center py-5'>
                <div className="w-4/5">
                    <BreadCrumb data={['Đặt vé']} />
                </div>
                <div className="w-4/5 flex">
                    <div className='w-2/3 py-10 flex flex-col items-center' style={{ backgroundColor: 'rgba(38,38,38,0.9)' }}>
                        {/* Phần thông tin loại ghế */}
                        <div className='flex justify-center w-full mb-10'>
                            <div className='w-3/4 grid grid-cols-3 gap-2'>
                                <div className='flex items-center gap-1'>
                                    <button className='w-5 h-5 rounded-md' style={{ backgroundColor: 'rgb(114, 46, 209)', border: '1px solid #fff' }}></button>
                                    <span className='text-white'>Ghế còn trống</span>
                                </div>
                                <div className='flex items-center gap-1'>
                                    <button className='bg-red-600 w-5 h-5 rounded-md' style={{ border: '1px solid #fff' }}></button>
                                    <span className='text-white'>Ghế vip</span>
                                </div>
                                <div className='flex items-center gap-1'>
                                    <button className='w-5 h-5 rounded-md' style={{ backgroundColor: 'rgba(64,64,64,1)', border: '1px solid #fff' }}></button>
                                    <span className='text-white'>Ghế đã đặt</span>
                                </div>
                                <div className='flex items-center gap-1'>
                                    <button className='w-5 h-5 rounded-md bg-pink-600' style={{ border: '1px solid #fff' }}></button>
                                    <span className='text-white'>Ghế đang đặt</span>
                                </div>
                                <div className='flex items-center gap-1'>
                                    <button className='bg-green-700 w-5 h-5 rounded-md' style={{ border: '1px solid #fff' }}></button>
                                    <span className='text-white'>Ghế bạn đã đặt</span>
                                </div>
                            </div>
                        </div>
                        <div className='w-full text-center'>
                            <div className='w-1/2 h-2 rounded-lg bg-white mb-2 block m-auto'></div>
                            <h1 className='text-white mb-5'>Màn hình</h1>
                        </div>
                        <div className='w-full grid grid-cols-12 gap-3 px-10 mb-10'>
                            {renderSeat()}
                        </div>
                    </div>
                    <div className='w-1/3 ml-5 px-3 border-2 rounded-lg border-pink-600 h-fit py-10'>
                        {/* Thông tin ghế đặt  */}
                        <h1 className='font-bold text-xl text-center mb-5 text-pink-600'>Thông tin đặt ghế</h1>
                        {/* Phần thông tin phim đang đặt */}
                        <div className='flex items-center pb-3'>
                            <div className='w-32 text-center mb-3'>
                                <img src={listSeat?.thongTinPhim.hinhAnh} alt={listSeat?.thongTinPhim.tenPhim} />
                            </div>
                            <div className='ml-3 w-full'>
                                <h1 className='font-semibold text-lg'>{listSeat?.thongTinPhim.tenPhim}</h1>
                                <p className='text-sm text-gray-500'><span className='font-semibold text-black'>Cụm rạp</span> {listSeat?.thongTinPhim.tenCumRap}</p>
                                <p className='text-sm flex'><span className='font-semibold'>Hàng ghế:</span>
                                    {listSeatBooking.map((seat) => seat.tenGhe).sort((a, b) => {
                                        return a - b;
                                    }).map((seat, index) => {
                                        return (
                                            <span className='mr-1' key={index}>
                                                {seat}
                                            </span>
                                        );
                                    })}
                                </p>
                                <p className='text-sm'><span className='font-semibold'>Rạp:</span>{listSeat?.thongTinPhim.tenRap}</p>
                                <p className='text-sm text-gray-500'><span className='text-black font-semibold'>Ngày chiếu:</span> {listSeat?.thongTinPhim.ngayChieu}</p>
                                <p className='text-sm text-gray-500'><span className='text-black font-semibold'>Giờ chiếu:</span> {listSeat?.thongTinPhim.gioChieu}</p>
                            </div>
                        </div>
                        <hr />
                        {/* Phần thông tin người dùng */}
                        <div className='mt-5'>
                            <h1 className='font-bold text-xl text-center mb-5 text-pink-600'>Thông tin người đặt</h1>
                            <p className='font-semibold text-sm'>Họ tên: <span className='font-normal text-gray-600'>{userLogin?.hoTen}</span></p>
                            <p className='font-semibold text-sm'>Số điện thoại: <span className='font-normal text-gray-600'>{userLogin?.soDT}</span></p>
                            <p className='font-semibold text-sm'>Email: <span className='font-normal text-gray-600'>{userLogin?.email}</span></p>
                        </div>
                        {/* Phần tổng tiền và đặt vé */}
                        <div className='flex justify-between w-full px-1 mt-5'>
                            <p className='font-bold'>Tổng tiền:
                                <span className='font-semibold ml-2'>
                                    {listSeatBooking?.reduce((total, seat) => {
                                        return total + seat.giaVe;
                                    }, 0).toLocaleString()}đ
                                </span>
                            </p>
                            <button className='bg-pink-600 px-2 py-1 rounded-md text-white'>Thanh toán</button>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

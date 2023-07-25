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
                    <div className='w-1/3 pl-3'>

                    </div>
                </div>
            </section>
        )
    }
}

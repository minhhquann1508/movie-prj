import React, { Fragment, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { StarFilled } from '@ant-design/icons';
import { LIST_CINEMA } from '../../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import SideBar from '../../components/CinemaList/SideBar';
import Showtime from '../../components/CinemaList/Showtime';
import { getListCinemaByIdAction } from '../../redux/actions/manageCinema';
import HomeLoading from '../Loading/HomeLoading';
export default function Cinemas() {
    const { cinema } = useParams();
    const { listCinema, logoImage, maHeThongRap, listShowtime } = useSelector(state => state.manageCinemaReducer);
    const { isLoadingTheme, isLoading } = useSelector(state => state.loadingReducer);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getListCinemaByIdAction(cinema, LIST_CINEMA.find((cinemaBrand) => cinemaBrand.key === cinema).img));
    }, [cinema])
    if (isLoading) {
        return (
            <HomeLoading />
        )
    }
    else {
        return (
            <Fragment>
                {/* render phần giới thiệu rạp */}
                {LIST_CINEMA.filter((item) => item.key === cinema).map((item, index) => {
                    return (
                        <div key={index} className='relative' style={{ backgroundImage: `url(${item.background})`, height: '450px', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                            <div className='absolute left-0 top-0 w-full h-full flex justify-center items-end' style={{ background: 'rgba(0,0,0,0.4)' }}>
                                <div className='w-4/5 flex flex-col items-start md:items-center md:flex-row pb-10'>
                                    <div className='w-32 h-32 flex justify-center bg-white p-3 rounded-md'>
                                        <img src={item.img} alt="anh" />
                                    </div>
                                    <div className='pt-2 md:pl-5'>
                                        <h1 className='font-bold text-white text-4xl mb-1'>{item.key}</h1>
                                        <h6 className='text-gray-400 text-base mb-1'>{item.moTa}</h6>
                                        <p className='flex items-center text-white mb-1'>
                                            {Array.from({ length: 5 }).map((_, index) => {
                                                return (
                                                    <StarFilled key={index} className='text-orange-400' />
                                                )
                                            })}
                                            <span className='mx-1'>5.0</span> / <span className='mx-1'>{item.danhGia}</span> Đánh giá
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
                {/* render lịch chiếu phim của rạp */}
                <h1 className='text-pink-600 font-bold text-2xl text-center pt-10'>Thông tin rạp chiếu</h1>
                <div className='flex justify-center py-10'>
                    <div className='bg-white md:flex flex-col lg:flex-row w-4/5 border'>
                        <div className='py-5 lg:w-1/3' style={{ borderRight: '1px solid #ccc' }}>
                            <div className='text-center px-5 pb-2'>
                                <input type="text" placeholder='Tìm theo rạp' className='w-full py-2 px-2 rounded-lg' style={{ border: '1px solid #ccc' }} />
                            </div>
                            {/* Phần trục dọc sidebar */}
                            {<SideBar listCinema={listCinema} img={logoImage} isLoading={isLoadingTheme} maHeThongRap={maHeThongRap} />}
                            <div className='text-center mt-3'>
                                <button className='bg-pink-600 p-1 rounded-md font-bold text-sm text-gray-100'>Xem thêm</button>
                            </div>
                        </div>
                        <div className='lg:w-2/3'>
                            <Showtime data={listShowtime} logoImage={logoImage} />
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

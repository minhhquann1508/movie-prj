import React from 'react';
import style from './style.module.scss'
import moment from 'moment/moment';
import LoadingTheme from '../LoadingTheme'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
export default function Showtime(props) {
    const { data, logoImage } = props;
    const navigate = useNavigate();
    const renderShowtime = () => {
        if (data === null) {
            return (
                <div className='flex justify-center items-center'>
                    <div className='flex flex-col items-center'>
                        <img src="https://homepage.momocdn.net/next-js/_next/static/public/cinema/not-found.svg" alt="error image" />
                        <h1 className='font-bold'>Hãy chọn rạp bạn muốn xem nhé ♥</h1>
                    </div>
                </div>
            )
        }
        else {
            return data?.map((item) => {
                return item.danhSachPhim.filter((movie) => movie.dangChieu === true).slice(0, 10).map((movie, index) => {
                    return (
                        <div key={index} className='p-8' style={{ borderBottom: '1px solid rgba(0,0,0,0.1)' }}>
                            <div className='flex flex-col items-start md:items-center md:flex-row'>
                                <div className='w-full md:w-1/6'>
                                    <img src={movie.hinhAnh} width={120} height={180} onError={(e) => e.target.src = "https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-1920.jpg?w=2000"} className='rounded-md cursor-pointer' alt="anh" />
                                </div>
                                <div className='mt-5 md:ml-5 w-full md:w-5/6'>
                                    <span className='text-xs p-0.5 mb-1 bg-orange-400 text-gray-100 rounded-sm font-semibold'>16+</span>
                                    <h6 className={`${style.title} font-bold text-base mb-1 text-gray-700 cursor-pointer`}
                                        onClick={() => {
                                            navigate(`/detail/${movie.maPhim}`)
                                        }}
                                    >{movie.tenPhim}</h6>
                                    <p className='mb-3 text-xs text-gray-400'>Phim đang chiếu</p>
                                    <h6 className='font-bold text-base mb-1 text-gray-700'>2D Phụ đề</h6>
                                    <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
                                        {movie.lstLichChieuTheoPhim.slice(0, 8).map((suat, index) => {
                                            return (
                                                <button key={index}
                                                    onClick={() => {
                                                        navigate(`/checkout/${suat.maLichChieu}`)
                                                    }}
                                                    className='border border-blue-300 px-5 py-1 rounded-lg text-blue-600 font-semibold'>{moment(suat.ngayChieuGioChieu).format('hh:mm A')}</button>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            })
        }
    }
    const { isLoadingShowtime } = useSelector(state => state.loadingReducer);
    if (isLoadingShowtime) {
        return (
            <LoadingTheme />
        )
    }
    else {
        return (
            <div className='overflow-y-scroll re' style={{ height: '500px' }}>
                <div className='flex items-center justify-start bg-gray-100 px-3 py-3 sticky z-10 top-0' style={{ borderBottom: '1px solid rgba(0,0,0,0.1)' }}>
                    <img src={logoImage} style={{ width: 35, height: 35 }} alt="anh" />
                    <div className='w-full pl-5'>
                        <h1 className={`${style.title} font-semibold text-base cursor-pointer`}>Lịch chiếu phim {data?.map((item, index) => {
                            return (
                                <span key={index}>{item.tenCumRap}</span>
                            )
                        })}</h1>
                        <p className='text-sm text-gray-500'>Địa chỉ {data?.map((item, index) => {
                            return (
                                <span key={index}>{item.tenCumRap}</span>
                            )
                        })}
                        </p>
                    </div>
                </div>
                <div className='w-full bg-gray-200'>
                    <h3 className='text-pink-600 p-3 text-sm font-semibold md:text-base'>Ưu đãi cả tuần: 58K/VÉ 2D từ T2-T6, 62K/VÉ 2D từ T7-CN</h3>
                </div>
                {renderShowtime()}
            </div>
        )
    }

}

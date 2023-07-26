import React, { Fragment, useEffect, useState } from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import style from './style.module.scss'
//Hiệu ứng ngôi sao lấp lánh
import Sparkle from 'react-sparkle';
//modal video
import 'react-modal-video/scss/modal-video.scss';
//icon antd
import { PlayCircleTwoTone, StarFilled } from '@ant-design/icons';
import ModalVideo from 'react-modal-video';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useDispatch, useSelector } from 'react-redux';
import { getMovieListAction } from '../../redux/actions/manageMovieAction';
import { useNavigate } from 'react-router-dom';
export default function MovieList(props) {
    const [isOpen, setOpen] = useState(false);
    const [linkModal, setLinkModal] = useState('');
    const navigate = useNavigate()
    const { movieList } = useSelector(state => state.manageMovieReducer);
    const dispatch = useDispatch();
    //call api gửi dữ liệu lấy danh sách phim
    useEffect(() => {
        dispatch(getMovieListAction())
    }, [])
    //Hàm giúp render ra phần carousel mục danh sách phim
    const renderSelection = () => {
        return movieList?.filter(movie => movie.dangChieu === props.dangChieu)
            .map((movie, index) => {
                return (
                    <SwiperSlide key={index}>
                        <div className={`${style.movieItem} h-auto relative overflow-hidden rounded-md`} style={{ border: '1px solid rgba(255,255,255,0.3)', backgroundImage: `url(${movie.hinhAnh})`, width: '100%', minHeight: '250px', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                            <div className='over-play absolute left-0 top-0 w-full h-full' style={{ backgroundColor: 'rgba(0,0,0,0.2)' }}>
                                <div className='ml-2 mt-2 flex items-center gap-1'>
                                    <button className='bg-blue-600 font-bold text-white text-xs p-1 rounded-md'>
                                        {movie.danhGia >= 7 ? '13+' : '16+'}
                                    </button>
                                    <button className='bg-red-600 font-bold text-white text-xs p-1 rounded-md'>
                                        HOT
                                    </button>
                                </div>
                                <div className='absolute' style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}>
                                    <button className='text-white text-4xl' onClick={() => {
                                        const urlArr = movie.trailer.split('/');
                                        setLinkModal(urlArr[urlArr.length - 1])
                                        setOpen(true)
                                    }}><PlayCircleTwoTone twoToneColor={'#88888'} /></button>
                                </div>
                                <div className='absolute' style={{ bottom: '2%', left: '2%' }}>
                                    <span className='font-bold text-4xl md:text-6xl text-gray-500'>
                                        {index + 1}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className='mt-2'>
                            <h1 className={`${props.dangChieu ? 'text-white' : ''} font-bold text-sm uppercase ${style.title}`}
                                onClick={() => navigate(`/detail/${movie.maPhim}`)}
                            >
                                {movie.tenPhim.length <= 15 ? movie.tenPhim : movie.tenPhim.slice(0, 15) + '...'}
                            </h1>
                            <p className='text-gray-400 text-sm'>
                                {movie.moTa.length <= 20 ? movie.moTa : movie.moTa.slice(0, 20) + '...'}
                            </p>
                            {props.dangChieu ?
                                <div className='flex mt-2'>
                                    <button className={`${style.button} bg-pink-700 text-gray-200 px-2 py-1 rounded-md mr-1`}
                                        onClick={() => navigate(`/detail/${movie.maPhim}`)}
                                    >Đặt vé</button>
                                    <p className={`${props.dangChieu ? 'text-white' : ''} flex items-center`}><StarFilled style={{ color: '#fbbf24' }} /> <span className='ml-1'>{movie.danhGia > 0 ? movie.danhGia.toFixed(1) : <span className='text-xs '>Chưa có đánh giá</span>}</span></p>
                                </div>
                                :
                                <div className='flex mt-2'>
                                    <button className={`${style.detailBtn} bg-pink-600 text-gray-100 px-2 py-1 rounded-md mr-1`}
                                        onClick={() => navigate(`/detail/${movie.maPhim}`)}
                                    >Chi tiết</button>
                                </div>
                            }
                        </div>
                    </SwiperSlide>
                )
            })
    }
    return (
        <section className='flex justify-center items-center' style={{ backgroundImage: `${props.dangChieu ? 'url("https://homepage.momocdn.net/img/momo-upload-api-210701105436-637607336767432408.jpg")' : ''}`, width: '100%', minHeight: '650px', backgroundSize: '100%', backgroundPosition: 'center' }}>
            <div className='w-4/5'>
                <div className='text-center mb-5 md:mb-10'>
                    <h1 className={`${props.dangChieu ? 'text-white' : 'text-pink-600'} py-5 text-2xl font-bold md:text-4xl inline-block relative`}>
                        <Sparkle color={'#FFCC00'} count={5} flickerSpeed={'slowest'} fadeOutSpeed={20} minSize={15} />
                        {props.dangChieu ? 'Phim đang chiếu' : 'Phim sắp chiếu'}
                    </h1>
                </div>
                <Fragment>
                    <ModalVideo
                        channel="youtube"
                        youtube={{ mute: 0, autoplay: 0 }}
                        isOpen={isOpen}
                        videoId={linkModal}
                        onClose={() => setOpen(false)}
                    />
                    <Swiper
                        // install Swiper modules
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={50}
                        navigation
                        className='mb-10'
                        breakpoints={{
                            250: {
                                slidesPerView: 1,
                            },
                            300: {
                                slidesPerView: 2,
                            },
                            650: {
                                slidesPerView: 3,
                            },
                            912: {
                                slidesPerView: 4
                            },
                            1150: {
                                slidesPerView: 5
                            }
                        }}
                    >
                        {renderSelection()}
                    </Swiper>
                </Fragment>
            </div >
        </section >
    )
}

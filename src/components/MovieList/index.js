import React, { Fragment, useEffect, useState } from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import style from './style.module.scss'
import Sparkle from 'react-sparkle';
import 'react-modal-video/scss/modal-video.scss';
import { LikeTwoTone, PlayCircleTwoTone } from '@ant-design/icons';
import ModalVideo from 'react-modal-video';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useDispatch, useSelector } from 'react-redux';
import { getMovieListAction } from '../../redux/actions/manageMovieAction';
export default function MovieList() {
    const [isOpen, setOpen] = useState(false);
    const { movieList } = useSelector(state => state.manageMovieReducer)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getMovieListAction())
    }, [])
    console.log(movieList);
    return (
        <section className='flex justify-center items-center' style={{ backgroundImage: 'url("https://homepage.momocdn.net/img/momo-upload-api-210701105436-637607336767432408.jpg")', width: '100%', minHeight: '550px', backgroundSize: '100%', backgroundPosition: 'center' }}>
            <div className='w-4/5'>
                <div className='text-center mb-5 md:mb-10'>
                    <h1 className='text-2xl text-white font-bold md:text-4xl inline-block relative'>
                        <Sparkle color={'#FFCC00'} count={5} flickerSpeed={'slowest'} fadeOutSpeed={20} minSize={15} />
                        Phim đang chiếu
                    </h1>
                </div>
                <Fragment>
                    <ModalVideo
                        channel="youtube"
                        youtube={{ mute: 0, autoplay: 0 }}
                        isOpen={isOpen}
                        videoId="L61p2uyiMSo"
                        onClose={() => setOpen(false)}
                    />

                    <Swiper
                        // install Swiper modules
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={50}
                        navigation
                        breakpoints={{
                            250: {
                                slidesPerView: 1,
                            },
                            300: {
                                slidesPerView: 2,
                            },
                            605: {
                                slidesPerView: 3,
                            },
                            912: {
                                slidesPerView: 4
                            },
                            1024: {
                                slidesPerView: 5
                            }
                        }}
                    >
                        <SwiperSlide className='overflow-hidden rounded-md' style={{ border: '1px solid rgba(255,255,255,0.3)' }}>
                            <div className={`${style.movieItem} h-auto relative`} style={{ backgroundImage: `url("https://cinema.momocdn.net/img/a59b2101-f495-4293-b8ae-848cd1f46edc-67607886214446405.jpg")`, width: '100%', minHeight: '250px', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                                <div className='over-play absolute left-0 top-0 w-full h-full' style={{ backgroundColor: 'rgba(0,0,0,0.2)' }}>
                                    <div className='mt-2 ml-2 flex items-center'>
                                        <button className={`${style.tagMovie} mr-2 text-xs p-1 rounded-sm text-gray-200 font-bold`}>
                                            <span>16+</span>
                                        </button>
                                        <button className={`${style.tagHot} text-xs p-1 rounded-sm text-gray-200 font-bold m-0`}>
                                            <span className='flex items-center'><LikeTwoTone className='mr-1' twoToneColor="#fff" /> PHIM HOT</span>
                                        </button>
                                    </div>
                                    <div className='absolute' style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}>
                                        <button className='text-white text-4xl' onClick={() => setOpen(true)}><PlayCircleTwoTone twoToneColor={'#88888'} /></button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='rounded-md h-auto' style={{ backgroundImage: `url("https://cinema.momocdn.net/img/a59b2101-f495-4293-b8ae-848cd1f46edc-67607886214446405.jpg")`, width: '100%', minHeight: '250px', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='rounded-md h-auto' style={{ backgroundImage: `url("https://cinema.momocdn.net/img/a59b2101-f495-4293-b8ae-848cd1f46edc-67607886214446405.jpg")`, width: '100%', minHeight: '250px', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='rounded-md h-auto' style={{ backgroundImage: `url("https://cinema.momocdn.net/img/a59b2101-f495-4293-b8ae-848cd1f46edc-67607886214446405.jpg")`, width: '100%', minHeight: '250px', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='rounded-md h-auto' style={{ backgroundImage: `url("https://cinema.momocdn.net/img/a59b2101-f495-4293-b8ae-848cd1f46edc-67607886214446405.jpg")`, width: '100%', minHeight: '250px', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='rounded-md h-auto' style={{ backgroundImage: `url("")`, width: '100%', minHeight: '250px', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                        </SwiperSlide>
                    </Swiper>
                </Fragment>
            </div >
        </section >
    )
}

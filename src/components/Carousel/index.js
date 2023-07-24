import React, { useEffect } from 'react'
import { CheckCircleFilled } from '@ant-design/icons';
import style from '../../global.scss'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useDispatch, useSelector } from 'react-redux';
import { getBannerAction } from '../../redux/actions/manageMovieAction';
function Carousel() {
    const dispatch = useDispatch();
    const { listBanner } = useSelector(state => state.manageMovieReducer)
    useEffect(() => {
        dispatch(getBannerAction())
    }, [])
    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, Autoplay, A11y]}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
        >
            {listBanner?.map((item, index) => {
                return (
                    <SwiperSlide key={index} className='flex justify-center'>
                        <div className='rounded-xl' style={{ backgroundImage: `url(${item.hinhAnh})`, width: '100%', height: 300, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    )
}

export default function CarouselSection() {
    return (
        <section className='block lg:flex lg:justify-center bg-pink-50 py-20'>
            <div className='flex w-full flex-col-reverse px-5 items-center md:px-5 md:flex-row md:justify-between lg:px-40'>
                <div className='w-full md:w-1/2'>
                    <h1 className='text-2xl py-5 text-pink-600 font-bold xl:text-4xl lg:pb-5'>Đặt mua vé xem phim MoMo</h1>
                    <p className='text-sm md:text-md lg:text-lg py-1 flex items-center gap-2'><CheckCircleFilled className={`${style.checkIcon}`} />Mua vé Online, <b>trải nghiệm phim hay</b></p>
                    <p className='text-sm md:text-md lg:text-lg py-1 flex items-center gap-2'><CheckCircleFilled className={`${style.checkIcon}`} /><b>Đặt vé an toàn</b> trên MoMo</p>
                    <p className='text-sm md:text-md lg:text-lg py-1 flex items-center gap-2'><CheckCircleFilled className={`${style.checkIcon}`} />Tha hồ <b>chọn chỗ ngồi, mua bắp nước</b> tiện lợi.</p>
                    <p className='text-sm md:text-md lg:text-lg py-1 flex items-center gap-2'><CheckCircleFilled className={`${style.checkIcon}`} /><b>Lịch sử đặt vé</b> được lưu lại ngay</p>
                    <button className='bg-pink-600 mt-5 py-2 px-3 rounded-lg font-bold text-gray-100'>ĐẶT VÉ NGAY</button>
                </div>
                <div className='w-full md:w-1/2'>
                    <Carousel />
                </div>
            </div>
        </section>
    )
}

import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import Tabs from './Tabs';
import SideBar from './SideBar';
import Showtime from './Showtime';
import { BarsOutlined } from '@ant-design/icons'
export default function CinemasList() {
    const { listCinema, logoImage, maHeThongRap, listShowtime } = useSelector(state => state.manageCinemaReducer);
    const { isLoadingTheme } = useSelector(state => state.loadingReducer);
    const [isActiveSideBar, setIsActiveSideBar] = useState(false)
    return (
        <section className='flex justify-center bg-pink-50 py-20' style={{ minHeight: 500 }}>
            <div className='w-4/5'>
                <div className='text-center'>
                    <h1 className='text-pink-600 font-bold text-2xl md:text-4xl'>Lịch chiếu phim</h1>
                </div>
                {/* Phần content */}
                <div className='mt-10 border border-gray-200'>
                    <nav className='border flex justify-between relative bg-gray-50 pb-5 px-3' style={{ borderBottom: '1px solid #ccc' }}>
                        <button className='text-2xl block md:hidden'
                            onClick={() => {
                                setIsActiveSideBar(!isActiveSideBar)
                            }}
                        ><BarsOutlined /></button>
                        {/* Phần tabs */}
                        <ul className={`${isActiveSideBar ? 'grid' : 'hidden'} bg-gray-50 border border-b-2 md:border-none absolute grid grid-cols-2 sm:grid-cols-3 gap-3 left-0 top-full md:relative md:flex md:justify-start w-full pl-3 md:gap-8 py-4 `}>
                            {<Tabs />}
                        </ul>
                    </nav>
                    <div className='bg-white md:flex flex-col lg:flex-row'>
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
                <div className='text-center mt-5'>
                    <button className='px-4 py-2 bg-pink-600 font-bold text-gray-100 rounded-lg'>Xem tất cả</button>
                </div>
            </div>
        </section>
    )
}

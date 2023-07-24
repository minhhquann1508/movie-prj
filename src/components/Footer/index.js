import React from 'react'
import { NavLink } from 'react-router-dom'
import { FacebookFilled, InstagramFilled, YoutubeFilled } from '@ant-design/icons'
export default function Footer() {
    return (
        <footer className="p-6 dark:bg-gray-800 dark:text-gray-100" style={{ backgroundColor: '#171717' }}>
            <div className="container grid grid-cols-2 mx-auto gap-x-3 gap-y-8 sm:grid-cols-3 md:grid-cols-4">
                <div className="flex flex-col space-y-4 text-gray-200">
                    <h2 className="font-medium text-lg">Lịch chiếu phim</h2>
                    <div className="flex flex-col space-y-2 text-sm dark:text-gray-400">
                        <a rel="noopener noreferrer" className='text-base hover:text-gray-300 text-gray-400' href="#">Phim đang chiếu</a>
                        <a rel="noopener noreferrer" className='text-base hover:text-gray-300 text-gray-400' href="#">Phim sắp chiếu</a>
                    </div>
                </div>
                <div className="flex flex-col space-y-4 text-gray-200">
                    <h2 className="font-medium text-lg">Rạp chiếu</h2>
                    <div className="flex flex-col space-y-2 text-sm dark:text-gray-400">
                        <a rel="noopener noreferrer" className='text-base hover:text-gray-300 text-gray-400' href="#">CGV</a>
                        <a rel="noopener noreferrer" className='text-base hover:text-gray-300 text-gray-400' href="#">BHD Cineplex</a>
                        <a rel="noopener noreferrer" className='text-base hover:text-gray-300 text-gray-400' href="#">CineStar</a>
                        <a rel="noopener noreferrer" className='text-base hover:text-gray-300 text-gray-400' href="#">Galaxy Cinema</a>
                        <a rel="noopener noreferrer" className='text-base hover:text-gray-300 text-gray-400' href="#">Lotte Cinema</a>
                        <a rel="noopener noreferrer" className='text-base hover:text-gray-300 text-gray-400' href="#">MegaGS</a>
                    </div>
                </div>
                <div className="flex flex-col space-y-4 text-gray-200">
                    <h2 className="font-medium text-lg">Mạng xã hội</h2>
                    <div className="flex flex-col space-y-2 text-sm dark:text-gray-400">
                        <p className='flex items-center gap-2 text-base hover:text-gray-300 text-gray-400 cursor-pointer'>
                            <FacebookFilled className='text-2xl' />
                            Facebook
                        </p>
                        <p className='flex items-center gap-2 text-base hover:text-gray-300 text-gray-400 cursor-pointer'>
                            <InstagramFilled className='text-2xl' />
                            Instagram
                        </p>
                        <p className='flex items-center gap-2 text-base hover:text-gray-300 text-gray-400 cursor-pointer'>
                            <YoutubeFilled className='text-2xl' />
                            Youtube
                        </p>
                    </div>
                </div>
                <div className="flex flex-col space-y-4 text-gray-200">
                    <h2 className="font-medium text-lg">Chăm sóc khách hàng</h2>
                    <div className="flex flex-col space-y-2 text-sm dark:text-gray-400">
                        <p className='text-base hover:text-gray-300 text-gray-400'>
                            Địa chỉ: Tầng M, Tòa nhà Victory Tower, Số 12 Tân Trào, Phường Tân Phú, Quận 7, Thành phố Hồ Chí Minh
                        </p>
                        <p className='text-base hover:text-gray-300 text-gray-400'>
                            Hotline: <NavLink className='hover:text-pink-600 font-semibold'>1900 5454 41</NavLink> (1000 đ/phút)
                        </p>
                        <p className='text-base hover:text-gray-300 text-gray-400'>
                            Email: <NavLink className='hover:text-pink-600 font-semibold'>hotro@momo.vn</NavLink>
                        </p>
                        <p className='text-base hover:text-gray-300 text-gray-400'>
                            Tổng đài gọi ra: <a className='hover:text-pink-600 font-semibold cursor-pointer'>028.7306.5555</a> - <a className='hover:text-pink-600 font-semibold cursor-pointer'>028.9999.5555</a>
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center px-6 pt-12 text-sm">
                <span className="text-gray-400 ">© Copyright 1986. All Rights Reserved.</span>
            </div>
        </footer>
    )
}

import React from 'react'
import { NavLink } from 'react-router-dom'
export default function Suport() {
    return (
        <section className='flex justify-center py-20 bg-pink-50'>
            <div className="w-4/5">
                <section className="dark:bg-gray-800 dark:text-gray-100">
                    <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                        <h2 className="text-2xl font-bold sm:text-4xl text-pink-600">Bạn hỏi, Ví MoMo trả lời</h2>
                        <p className="mt-4 mb-8 dark:text-gray-400 text-gray-500">Không tìm thấy câu hỏi của bạn. Vui lòng xem thêm <NavLink className="underline text-pink-600">tại đây</NavLink></p>
                        <div className="space-y-4">
                            <details className="w-full border rounded-lg">
                                <summary className="px-4 py-6 focus:outline-none focus-visible:ri font-bold text-base lg:text-xl text-gray-600 hover:text-gray-500 cursor-pointer">Có thể mua vé xem phim những rạp nào trên Ví MoMo?</summary>
                                <p className="px-4 py-6 ml-4 -mt-4 dark:text-gray-400 text-base pt-5">
                                    Hiện tại bạn có thể đặt vé tại <NavLink className="font-semibold text-pink-600">rạp phim</NavLink> cũng như xem <NavLink className="font-semibold text-pink-600">lịch chiếu phim </NavLink>
                                    tại các rạp sau: CGV Cinemas, Lotte Cinema, Galaxy Cinema, BHD Star, Mega GS, Dcine, Cinestar.
                                    <NavLink className="font-semibold text-pink-600">Đặt vé xem phim ngay</NavLink>
                                </p>
                            </details>
                            <details className="w-full border rounded-lg">
                                <summary className="px-4 py-6 focus:outline-none focus-visible:ri font-bold text-base lg:text-xl text-gray-600 hover:text-gray-500 cursor-pointer">Lợi ích của việc mua vé xem phim trên Ví MoMo?</summary>
                                <p className="px-4 py-6 ml-4 -mt-4 dark:text-gray-400 text-base pt-5">
                                    Nhanh chóng, trực quan không cần ra mua vé trực tiếp tại rạp. Tiết kiệm thời gian và tiện lợi. Có nhiều chương trình khuyến mãi với giá vé vô cùng hấp dẫn.
                                    <NavLink className="font-semibold text-pink-600">Mua vé xem phim ngay</NavLink>
                                </p>
                            </details>
                            <details className="w-full border rounded-lg">
                                <summary className="px-4 py-6 focus:outline-none focus-visible:ri font-bold text-base lg:text-xl text-gray-600 hover:text-gray-500 cursor-pointer">Vé xem phim có được đổi trả, hoàn hủy không?</summary>
                                <p className="px-4 py-6 ml-4 -mt-4 dark:text-gray-400 text-base pt-5">
                                    Các vé xem phim khi tra cứu
                                    <NavLink className="font-semibold text-pink-600"> lịch chiếu phim </NavLink>
                                    tại Ví MoMo hiện tại không hỗ trợ đổi trả hay hoàn hủy vé.
                                </p>
                            </details>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    )
}

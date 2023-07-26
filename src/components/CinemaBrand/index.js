import React, { useEffect } from 'react'
import { StarFilled, TagFilled } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux'
import { getCinemaBrandAction } from '../../redux/actions/manageCinema';
import { descCinemaBrandList } from '../../utils/constants';

export default function CinemaBrand() {
    const dispatch = useDispatch();
    const { listCinemaBrand } = useSelector(state => state.manageCinemaReducer)
    useEffect(() => {
        dispatch(getCinemaBrandAction())
    }, [])
    return (
        <section className='flex justify-center'>
            <div className="w-4/5 py-20">
                <div className='text-center'>
                    <h1 className='text-xl md:text-4xl text-pink-600 font-bold mb-3'>Hệ thống rạp chiếu phim</h1>
                    <p className='text-sm md:text-lg text-gray-500 mb-5'>Danh sách hệ thống rạp chiếu phim lớn có mặt khắp cả nước</p>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                    {listCinemaBrand?.map((brand, index) => {
                        return (
                            <div key={index} className='shadow border hover:shadow-xl flex items-center gap-5 p-8 rounded-lg cursor-pointer'>
                                <img width={60} height={60} src={brand.logo} alt="movie logo" />
                                <div className='w-full'>
                                    <h1 className='text-base font-bold text-pink-600 md:text-lg'>{brand.tenHeThongRap}</h1>
                                    <p className='text-xs md:text-sm text-gray-500 mb-2'>{descCinemaBrandList[index].moTa}</p>
                                    <p className='text-xs md:text-sm font-semibold text-pink-500 mb-3 flex items-center gap-2'><TagFilled className='text-pink-600' /> <span>{descCinemaBrandList[index].uuDai}</span></p>
                                    <p className='flex items-center'>
                                        {Array.from({ length: 5 }).map((_, index) => {
                                            return (
                                                <StarFilled key={index} className='text-orange-400' />
                                            )
                                        })}
                                        <span className='ml-2 text-xs text-gray-500'>{descCinemaBrandList[index].danhGia} đánh giá</span>
                                    </p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

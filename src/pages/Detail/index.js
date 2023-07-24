import React, { Fragment, useEffect, useRef, useState } from 'react'
import BreadCrumb from '../../components/BreadCrumb'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { StarFilled, PlayCircleFilled } from '@ant-design/icons';
import { getDetailAction } from '../../redux/actions/manageMovieAction';
import moment from 'moment/moment';
import HomeLoading from '../Loading/HomeLoading';
import ReactPlayer from 'react-player';
import { Modal } from 'antd';
import '../../global.scss'
export default function Detail() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { movieDetail, movieList } = useSelector(state => state.manageMovieReducer);
    const { isLoading } = useSelector(state => state.loadingReducer);
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = async () => {
        setIsModalOpen(false);
    };
    const handleCancel = async () => {
        setIsModalOpen(false);
    };
    useEffect(() => {
        dispatch(getDetailAction(id))
    }, [id])
    if (isLoading) {
        return (
            <HomeLoading />
        )
    }
    else {
        return (
            <Fragment>
                {/* Phần chỉ mục */}
                <div className='flex justify-center'>
                    <div className="w-4/5">
                        <BreadCrumb data={['Chi tiết', movieDetail?.tenPhim]} />
                    </div>
                </div>
                {/* phần hình ảnh và nội dung chi tiết phim */}
                <div className='relative' style={{ height: '700px', backgroundImage: `url(${movieDetail?.hinhAnh})`, backgroundSize: '100%', backgroundRepeat: 'no-repeat' }}>
                    <div className='absolute left-0 top-0 w-full h-full flex justify-center items-center' style={{ backgroundColor: 'rgba(0,0,0,0.85)' }}>
                        <div className='w-6/7 flex-col items-start flex gap-2 md:gap-8 relative px-5 lg:flex-row lg:w-4/5 lg:items-center'>
                            <div className='w-20 sm:w-32 md:w-40 lg:w-1/4 relative'>
                                <img src={movieDetail?.hinhAnh} alt={movieDetail?.tenPhim} />
                                <div className='absolute' style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} onClick={showModal}>
                                    <PlayCircleFilled className='text-white text-4xl cursor-pointer hover:text-gray-700 duration-500' />
                                </div>
                            </div>
                            <div className='w-full lg:w-3/4 lg:ml-5'>
                                <button className='bg-blue-600 p-1 rounded-sm text-white text-xs font-bold mb-1 md:mb-3'>16+</button>
                                <h1 className='font-bold text-white lg:text-2xl xl:text-4xl mb-1 md:mb-3'>{movieDetail?.tenPhim}</h1>
                                <p className='font-semibold lg:text-base xl:text-lg text-gray-400 mb-1 md:mb-3'>
                                    {movieDetail?.heThongRapChieu.map((cinemaBrand) => {
                                        return cinemaBrand.cumRapChieu.map((lichChieu) => {
                                            return lichChieu.lichChieuPhim.map((suatChieu, index) => {
                                                return (
                                                    <span key={index} className='mr-1'>{suatChieu.thoiLuong}</span>
                                                )
                                            })
                                        })
                                    })}
                                    phút
                                </p>
                                {movieDetail?.danhGia === 0 ? <p className='flex items-center mb-1 md:mb-3'><StarFilled style={{ color: '#fbbf24' }} /> <span className='ml-1 font-semibold lg:text-base xl:text-lg text-gray-400'>Chưa có đánh giá</span></p> :
                                    <p className='flex items-center mb-3'><StarFilled style={{ color: '#fbbf24' }} /> <span className='ml-1 font-bold text-2xl text-white'>{movieDetail?.danhGia.toFixed(1)}</span></p>
                                }
                                <p className='font-bold lg:text-sm xl:text-lg text-white md:mb-2'>Nội dung:</p>
                                <p className='text-gray-400 mb-1 md:mb-3 lg:text-sm xl:text-lg'>
                                    {movieDetail?.moTa}
                                </p>
                                <div>
                                    <p className='text-gray-400 lg:text-sm xl:text-lg'>Ngày chiếu</p>
                                    <p className='font-bold text-white lg:text-sm xl:text-lg'>
                                        {moment(movieDetail?.ngayKhoiChieu).format('DD/MM/YYYY')}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Modal destroyOnClose={true} open={isModalOpen} width={1000} onOk={handleOk} onCancel={handleCancel}
                    footer={
                        <footer className='flex p-5 items-center'>
                            <div>
                                <img src={movieDetail?.hinhAnh} alt={movieDetail?.tenPhim} />
                            </div>
                            <div className='text-left ml-5'>
                                <h1 className='text-pink-600 font-bold text-xl'>{movieDetail?.tenPhim}</h1>
                                <p className='text-gray-400'>{movieDetail?.moTa}</p>
                                <div className='mt-2'>
                                    <button className='bg-pink-600 font-bold text-white px-2 py-1 rounded-md'>Đặt vé</button>
                                </div>
                            </div>
                        </footer>
                    }>
                    <ReactPlayer width={'100%'} playing={isModalOpen} url={movieDetail?.trailer} />
                </Modal>
                {/* Các phần liên quan */}
                <div className='flex flex-row justify-center'>
                    <div className="w-4/5 flex flex-col lg:flex-row gap-10 py-20">
                        {/* Phần rạp phim và các suất chiếu */}
                        <div className="w-full lg:w-3/4">
                            <h1 className='font-semibold mb-5 text-xl'>Lịch chiếu {movieDetail?.tenPhim}</h1>
                            <ul className='border rounded-md'>
                                {movieDetail?.heThongRapChieu.map((cinemaBrand) => {
                                    return cinemaBrand.cumRapChieu.map((lichChieu, index) => {
                                        return (
                                            <li key={index} className='py-5 border-b border-gray-300'>
                                                <div className='flex ml-5 items-center mb-3'>
                                                    <img src={cinemaBrand.logo} width={50} height={50} alt="logo" />
                                                    <div className='ml-5'>
                                                        <h2 className='font-semibold text-base'>{lichChieu.tenCumRap}</h2>
                                                        <p className='text-sm text-gray-600'>{lichChieu.diaChi}</p>
                                                    </div>
                                                </div>
                                                <div className='ml-5'>
                                                    <h2 className='font-semibold mb-3'>2D Phụ đề</h2>
                                                    <div className='grid-cols-3 sm:grid-cols-5 md:grid-cols-6 xl:grid-cols-8 grid gap-3'>
                                                        {lichChieu.lichChieuPhim.map((suatChieu, index) => {
                                                            return (
                                                                <button key={index} className='border-blue-400 border-2 rounded-md text-blue-600 py-1 font-semibold'
                                                                    onClick={() => {
                                                                        navigate(`/checkout/${suatChieu.maLichChieu}`)
                                                                    }}
                                                                >{moment(suatChieu.ngayChieuGioChieu).format('hh:mm A')}</button>
                                                            )
                                                        })}
                                                    </div>
                                                </div>
                                            </li>
                                        )
                                    })
                                })}
                            </ul>
                        </div>
                        {/* Phần các phim đang chiếu */}
                        <div className="w-full lg:w-1/4">
                            <h1 className='font-semibold mb-5 text-xl'>Phim đang chiếu</h1>
                            {movieList?.filter(movie => movie.dangChieu === true).map((movie, index) => {
                                return (
                                    <div key={index} className='flex flex-nowrap items-center border-b py-3'>
                                        <div className='w-16 flex-none'>
                                            <img src={movie.hinhAnh} alt="anh" />
                                        </div>
                                        <div className='flex-1 pl-4'>
                                            <button className='bg-blue-600 p-0.5 rounded-sm text-white text-xs font-bold'>16+</button>
                                            <h2 className='font-semibold text-base cursor-pointer hover:text-pink-600 transition-all duration-200 mb-1'
                                                onClick={() => {
                                                    navigate(`/detail/${movie.maPhim}`)
                                                }}
                                            >{movie.tenPhim}</h2>
                                            <p className='flex items-center text-xs'><StarFilled style={{ color: '#fbbf24' }} /> <span className='ml-1'>{movie.danhGia === 0 ? 'Chưa có đánh giá' : movie.danhGia.toFixed(1)}</span></p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </Fragment >
        )
    }
}

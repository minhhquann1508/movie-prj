import React, { Fragment, useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom'
import MovieList from '../../components/MovieList';
import BreadCrumb from '../../components/BreadCrumb'
import CarouselSection from '../../components/Carousel';
import CinemasList from '../../components/CinemaList';
export default function Films() {
    const { type } = useParams();
    const movieListRef = useRef(null);
    useEffect(() => {
        // Khi component Films mount, cuộn đến phần MovieList
        movieListRef.current.scrollIntoView({ behavior: 'smooth' });
    }, [type]);
    return (
        <Fragment>
            <div className='px-20'>
                {type === 'phimDangChieu' ? <BreadCrumb data={['Lịch chiếu', 'Phim đang chiếu']} /> : <BreadCrumb data={['Lịch chiếu', 'Phim sắp chiếu']} />}
            </div>
            <CarouselSection />
            <div ref={movieListRef}>
                {type === 'phimDangChieu' ? <MovieList dangChieu={true} /> : <MovieList dangChieu={false} />}
            </div>
            <CinemasList />
        </Fragment>
    )

}

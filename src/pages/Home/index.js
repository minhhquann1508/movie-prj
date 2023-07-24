import React, { Fragment } from 'react'
import CarouselSection from '../../components/Carousel'
import MovieList from '../../components/MovieList'
import CinemasList from '../../components/CinemaList'
import CinemaBrand from '../../components/CinemaBrand'
import Suport from '../../components/Suport'
export default function Home() {
    return (
        <Fragment>
            <CarouselSection />
            <MovieList dangChieu={true} />
            <MovieList dangChieu={false} />
            <CinemasList />
            <CinemaBrand />
            <Suport />
        </Fragment>
    )
}

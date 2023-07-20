import React, { Fragment } from 'react'
import CarouselSection from '../../components/Carousel'
import MovieList from '../../components/MovieList'
export default function Home() {
    return (
        <Fragment>
            <CarouselSection />
            <MovieList />
            {/* <MovieList /> */}
        </Fragment>
    )
}

import React, { Fragment } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../components/Header'

export default function HomeTemplate() {
    return (
        <Fragment>
            <Header />
            <Outlet />
        </Fragment>
    )
}

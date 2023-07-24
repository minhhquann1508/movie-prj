import React, { useState } from 'react'
import LoadingTheme from '../LoadingTheme';
import style from './style.module.scss'
import { useDispatch } from 'react-redux';
import { getShowTimeByCinemaAction } from '../../../redux/actions/manageCinema';
export default function SideBar(props) {
    const { listCinema, img, isLoading, maHeThongRap } = props;
    const [isActive, setIsActive] = useState('');
    const dispatch = useDispatch()
    if (isLoading) {
        return <LoadingTheme />
    }
    else {
        return listCinema?.slice(0, 6).map((place, index) => {
            return (
                <li key={index} className={`${isActive === place.maCumRap ? 'bg-pink-100' : ''} ${style.listItem} flex items-center px-5 py-2 cursor-pointer w-full`}
                    onClick={() => {
                        setIsActive(place.maCumRap);
                        dispatch(getShowTimeByCinemaAction(maHeThongRap, place.maCumRap))
                    }}
                >
                    <div style={{ width: 40, height: 40, borderRadius: '50%', marginRight: '12px' }}>
                        <img src={img ? img : ''} alt="anh" />
                    </div>
                    <div className='text-sm w-full'>
                        <p>{place.tenCumRap}</p>
                    </div>
                </li>
            )
        })
    }
}

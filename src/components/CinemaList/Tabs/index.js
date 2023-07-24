import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { LIST_CINEMA } from '../../../utils/constants';
import { getListCinemaByIdAction } from '../../../redux/actions/manageCinema';
export default function Tabs(props) {
    const dispatch = useDispatch();
    const [isActive, setIsActive] = useState('BHDStar');
    const [defaultImage, setDefaultImage] = useState(LIST_CINEMA[0].img)
    useEffect(() => {
        dispatch(getListCinemaByIdAction('BHDStar', defaultImage))
    }, [])
    return LIST_CINEMA.map((item, index) => {
        return (
            <li className={`${isActive === item.key ? 'border-pink-600' : 'border-gray-300'} flex flex-row items-center gap-1 border rounded-lg md:flex-col md:items-center`} key={index}
                onClick={() => {
                    if (isActive !== item.key) {
                        setIsActive(item.key)
                        dispatch(getListCinemaByIdAction(item.key, item.img))
                    }
                }}
                style={{ cursor: 'pointer', width: 50, height: 50 }}>
                <img src={item.img} alt={item.img} />
                <div className={`${isActive === item.key ? 'text-pink-600' : ''} font-medium`}>{item.key}</div>
            </li>
        )
    })
}

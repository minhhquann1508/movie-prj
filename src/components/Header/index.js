import React, { useEffect, useState } from 'react'
import DropdownItem from '../Dropdown'
import { NavLink } from 'react-router-dom';
import { ArrowDownOutlined } from '@ant-design/icons';
import { useSpring, animated } from '@react-spring/web'
import style from './style.module.scss'
const filmItems = [
    {
        label: 'Phim đang chiếu',
        key: 'phimDangChieu',
        type: 'movies'
    },
    {
        label: 'Phim sắp chiếu',
        key: 'phimSapChieu',
        type: 'movies'
    }
];

const cinemaItems = [
    {
        label: 'CGV',
        key: 'CGV',
        type: 'cinemas'
    },
    {
        label: 'BHD',
        key: 'BHDStar',
        type: 'cinemas'
    },
    {
        label: 'CineStar',
        key: 'CineStar',
        type: 'cinemas'
    },
    {
        label: 'Galaxy Cinema',
        key: 'Galaxy',
        type: 'cinemas'
    },
    {
        label: 'Lotte Cinema',
        key: 'LotteCinima',
        type: 'cinemas'
    },
    {
        label: 'MegaGS',
        key: 'MegaGS',
        type: 'cinemas'
    },
]

const DropDownMoblie = (props) => {
    const [isOpen, setIsOpen] = useState(false)
    const { items, title } = props
    return (
        <li className='border border-1'>
            <NavLink className='ml-4 py-3 block text-lg' onClick={() => setIsOpen(!isOpen)}>
                {title} <span className='float-right pr-8'><ArrowDownOutlined /></span>
            </NavLink>
            <ul className={`${isOpen ? 'grid grid-cols-2' : 'hidden'} bottom-0  bg-gray-200 w-full b-0`} style={{ borderTop: '1px solid #ccc' }}>
                {items.map((item, index) => {
                    return (
                        <li key={index} >
                            <NavLink to={`${item.type}/${item.key}`} className={`ml-4 py-4 block`}>{item.label}</NavLink>
                        </li>
                    )
                })}
            </ul>
        </li>
    )
}

export default function Header() {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [animationProps, api] = useSpring(() => ({
        from: { opacity: 1, top: isMobileMenuOpen ? '0%' : '100%' },
        to: { opacity: 0, top: isMobileMenuOpen ? '100%' : '0%' },
        config: { duration: 300 }
    }));
    useEffect(() => {
        api.start({
            opacity: isMobileMenuOpen ? 1 : 0,
            top: isMobileMenuOpen ? '100%' : '0'
        });
    }, [isMobileMenuOpen, api]);
    return (
        <header className="relative p-4 dark:bg-gray-800 dark:text-gray-100 shadow-md">
            <div className="container flex justify-between h-16 mx-auto lg:px-10">
                <NavLink rel="noopener noreferrer" to='' aria-label="Back to homepage" className="flex items-center p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-8 h-8 dark:text-red-400">
                        <path d="M27.912 7.289l-10.324-5.961c-0.455-0.268-1.002-0.425-1.588-0.425s-1.133 0.158-1.604 0.433l0.015-0.008-10.324 5.961c-0.955 0.561-1.586 1.582-1.588 2.75v11.922c0.002 1.168 0.635 2.189 1.574 2.742l0.016 0.008 10.322 5.961c0.455 0.267 1.004 0.425 1.59 0.425 0.584 0 1.131-0.158 1.602-0.433l-0.014 0.008 10.322-5.961c0.955-0.561 1.586-1.582 1.588-2.75v-11.922c-0.002-1.168-0.633-2.189-1.573-2.742zM27.383 21.961c0 0.389-0.211 0.73-0.526 0.914l-0.004 0.002-10.324 5.961c-0.152 0.088-0.334 0.142-0.53 0.142s-0.377-0.053-0.535-0.145l0.005 0.002-10.324-5.961c-0.319-0.186-0.529-0.527-0.529-0.916v-11.922c0-0.389 0.211-0.73 0.526-0.914l0.004-0.002 10.324-5.961c0.152-0.090 0.334-0.143 0.53-0.143s0.377 0.053 0.535 0.144l-0.006-0.002 10.324 5.961c0.319 0.185 0.529 0.527 0.529 0.916z"></path>
                        <path d="M22.094 19.451h-0.758c-0.188 0-0.363 0.049-0.515 0.135l0.006-0.004-4.574 2.512-5.282-3.049v-6.082l5.282-3.051 4.576 2.504c0.146 0.082 0.323 0.131 0.508 0.131h0.758c0.293 0 0.529-0.239 0.529-0.531v-0.716c0-0.2-0.11-0.373-0.271-0.463l-0.004-0.002-5.078-2.777c-0.293-0.164-0.645-0.26-1.015-0.26-0.39 0-0.756 0.106-1.070 0.289l0.010-0.006-5.281 3.049c-0.636 0.375-1.056 1.055-1.059 1.834v6.082c0 0.779 0.422 1.461 1.049 1.828l0.009 0.006 5.281 3.049c0.305 0.178 0.67 0.284 1.061 0.284 0.373 0 0.723-0.098 1.027-0.265l-0.012 0.006 5.080-2.787c0.166-0.091 0.276-0.265 0.276-0.465v-0.716c0-0.293-0.238-0.529-0.529-0.529z"></path>
                    </svg>
                </NavLink>
                {/* List hiện khi mở desktop */}
                <ul className="hidden space-x-3 md:items-center md:justify-around md:flex gap-5">
                    <li className="flex">
                        <DropdownItem items={filmItems} title='Lịch chiếu' />
                    </li>
                    <li className="flex">
                        <DropdownItem items={cinemaItems} title='Rạp' />
                    </li>
                    <li className="flex">
                        <NavLink rel="noopener noreferrer" to='/about' className={`${style.linkItem} font-bold text-gray-600 flex -mb-1 dark:border-transparent`}>Về chúng tôi</NavLink>
                    </li>
                    <li className="flex">
                        <NavLink rel="noopener noreferrer" to='/contact' className={`${style.linkItem} font-bold text-gray-600 flex -mb-1 dark:border-transparent`}>Liên hệ</NavLink>
                    </li>
                </ul>
                <button className="flex justify-end p-4 md:hidden" onClick={() => {
                    setMobileMenuOpen(!isMobileMenuOpen)
                }}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
            {/* Liện hiện khi về mobile */}
            <animated.ul className={`${isMobileMenuOpen ? '' : 'hidden'}  ${style.headerDropdown} absolute z-10 flex flex-col bg-gray-50 md:hidden`}
                style={animationProps}>
                <DropDownMoblie items={filmItems} title='Lịch chiếu' />
                <DropDownMoblie items={cinemaItems} title='Rạp chiếu' />
                <li className='border border-1'>
                    <NavLink to='/about' className={`ml-4 py-3 block text-lg`}>Về chúng tôi</NavLink>
                </li>
                <li className='border border-1'>
                    <NavLink to='/contact' className={`ml-4 py-3 block text-lg`}>Liên hệ</NavLink>
                </li>
            </animated.ul>
        </header >
    )
}
import React from 'react'
//Component loading giao diện
export default function HomeLoading() {
    return (
        <div className='fixed w-full h-full bg-gray-300 flex justify-center items-center'>
            <img width={200} height={200} src="https://img.pikbest.com/png-images/20190918/cartoon-snail-loading-loading-gif-animation_2734139.png!bw700" alt="loading-img" />
        </div>
    )
}

import React from 'react'
import { newsData } from '../data/data'

const LatestNews = () => {
    return (
        <>
            {newsData.map((el) => (
                <div key={el.id} className='border border-[#a3a3a2] rounded-2xl w-36 flex flex-col justify-evenly items-center px-4 py-2'>
                    <div>{el.icon}</div>
                    <p>{el.category}</p>
                </div>
            ))}
        </>
    )
}

export default LatestNews

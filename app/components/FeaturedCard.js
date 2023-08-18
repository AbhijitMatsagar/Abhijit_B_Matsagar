import React from 'react';
import { courseData } from '../data/data';
import Image from 'next/image';
import { AiFillClockCircle, AiFillStar } from "react-icons/ai";
import { BookDown } from 'lucide-react';

const FeaturedCard = () => {
    return (
        <>
            {courseData.map((el) => (
                <div key={el.id} className='border border-[#a3a3a2] rounded-2xl'>
                    <div className='m-3'>
                        <div className='relative'>
                            <div className='absolute right-2 top-1'>
                                <BookDown className='text-white bg-black p-1 rounded-[50%]' />
                            </div>
                            <Image src={el.coverImg} alt='coverImg' className='rounded-2xl h-36' />
                            <div className='flex justify-between items-center gap-2 p-1 rounded-full text-black bg-white border mr-32 absolute bottom-[-20px] left-2'>
                                <Image src={el.img} alt='image' className='rounded-[50%] h-8 w-8' />
                                <p className='pr-2'>{el.level}</p>
                            </div>
                        </div>
                    </div>
                    <div className='mx-3 mt-8 mb-3'>
                        <div className='space-y-2'>
                            <h3>{el.title}</h3>
                            <div className='flex justify-between items-center'>
                                <div className='flex justify-between items-center gap-2'>
                                    <AiFillClockCircle />
                                    <p>{el.duration}</p>
                                </div>
                                <div className='flex justify-between items-center gap-2'>
                                    <AiFillStar />
                                    <p>{el.rating}</p>
                                </div>
                                <button className='bg-[#FF2C25] px-3 rounded-full py-1 text-white'>Start</button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default FeaturedCard;

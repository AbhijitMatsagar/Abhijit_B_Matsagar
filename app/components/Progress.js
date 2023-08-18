import React from 'react'
import { progressData } from '../data/data'
import Image from 'next/image'
import { Bookmark } from 'lucide-react'

const Progress = () => {
    return (
        <>
            {progressData.map((el) => (
                <div key={el.id} className='relative flex gap-6 items-center  border border-[#a3a3a2] rounded-2xl w-[660px] p-2'>
                    <div>
                        <Image src={el.img} alt='Image' className='w-48 rounded-2xl' />
                    </div>
                    <div className='space-y-5'>
                        <div>
                            <h2 className='text-xl font-semibold'>{el.title}</h2>
                            <p>{el.instructor}</p>
                        </div>
                        <div>
                            <div className='border border-[#898989] w-96 h-2 bg-[#898989]'></div>
                            <p className='text-sm'>{el.progress}</p>
                        </div>
                    </div>
                    <Bookmark className='absolute text-white fill-white right-3 top-3 bg-[#FF2C25] p-1 rounded-[50%]' />
                </div>
            ))}
        </>
    )
}

export default Progress

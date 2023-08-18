import React from 'react';
import { Music2 } from 'lucide-react';
import Link from 'next/link';

const SignUp = () => {
    return (
        <div className='flex justify-center items-center bg-gradient-to-r from-red-500 to-orange-500'>
            <div className='bg-[#282828] flex flex-col justify-center items-center sm:my-6 min-[321px]:my-4 min-[321px]:rounded-xl pb-12 pt-[49px] sm:p-10 xl:my-[64px]'>
                <div>
                    <div className='flex justify-between gap-x-5'>
                        <div className='border border-[#898989] w-12 sm:w-20 rounded-xl'></div>
                        <div className='border border-[#898989] w-12 sm:w-20 rounded-xl'></div>
                        <div className='border border-[#898989] w-12 sm:w-20 rounded-xl'></div>
                        <div className='border border-[#898989] w-12 sm:w-20 rounded-xl'></div>
                    </div>
                    <div className='relative'>
                        <p className='absolute right-0 text-sm p-2 text-[#898989]'>Skip</p>
                    </div>
                </div>
                <div className='text-white px-12 pt-11 pb-7 text-2xl sm:text-4xl font-semibold'>
                    Welcome to musify!
                </div>
                <div className='relative'>
                    <div class="w-24 h-24 bg-[#FFD9D8] rounded-full flex justify-center items-center">
                        <p className='font-bold'><Music2 /></p>
                    </div>
                    <p className='absolute bottom-0 right-0 text-xl text-white border rounded-full bg-[#FF2C25] px-2'>+</p>
                </div>
                <div className='space-y-3'>
                    <h3 className='text-sm text-white'>Full Name</h3>
                    <input type="text" placeholder='Enter your full name.' className='sm:w-96 text-md py-2 px-4 rounded-full focus:outline-[#FF2C25]'/>
                    <h3 className='text-sm text-white'>Username</h3>
                    <input type="text" placeholder='Enter Your username' className='sm:w-96 text-md py-2 px-4 rounded-full focus:outline-[#FF2C25]'/>
                    <h3 className='text-sm text-white'>Location</h3>
                    <input type="text" placeholder='Enter your location' className='sm:w-96 text-md py-2 px-4 rounded-full focus:outline-[#FF2C25]'/>
                </div>
                <div className='flex justify-between items-center gap-x-6 sm:gap-x-8 text-white mt-10'>
                    <button className='border px-9 sm:px-16 py-2 rounded-full bg-black border-black'>Back</button>
                    <Link href="/dashboard" className='border px-9 sm:px-16 py-2 rounded-full bg-[#FF2C25] border-[#FF2C25]'>Next</Link>
                </div>
            </div>
        </div>
    )
}

export default SignUp;

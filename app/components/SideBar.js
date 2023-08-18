import React from 'react';
import man from "../assets/man.jpg";
import Image from 'next/image';
import { iconDatas } from '../data/data';
import { CheckCircle, ClipboardSignature, Home, LayoutGrid, LogOut, Settings, Users2 } from 'lucide-react';

const SideBar = () => {
    return (
        <div className='w-20 h-[100%] bg-[#282828] flex flex-col justify-between items-center py-6'>
            <div className='text-white flex flex-col justify-between items-center gap-8'>
                <Image src={man} alt='image' className='rounded-[50%] h-12 w-12' />
                <LayoutGrid />
                <Home />
                <CheckCircle />
                <Users2 />
                <ClipboardSignature />
            </div>
            <div className='text-white flex flex-col justify-between items-center gap-8'>
                <div className='border border-[#616161] w-10'></div>
                <Settings />
                <LogOut />
            </div>
        </div>
    )
}

export default SideBar

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
// icons 
import { IoMdHome, IoMdSettings  } from "react-icons/io";
import { MdOutlineQueueMusic, MdOutlineMusicNote  } from "react-icons/md";

const Sidebar = () => {
    const pathName = usePathname
    return (
        <div className='my-[56px] sticky top-0 w-[253px] px-6'>
            <Link href='#'>
                <Image src='/images/logo.png' width={210} height={40} alt='logo' />
            </Link>
            <div className='text-white mt-[53px] flex flex-col justify-between items-stretch'>
                {/* menu  */}
                <div>
                    <div className='flex text-[22px] font-semibold items-center gap-[50px]'><h2>Menu</h2> <div className='border-t-[1px] w-[70px]' /></div>
                    <div className='mt-[38px] flex flex-col gap-[38px]'>
                        <Link href='/' className={` flex items-center gap-[23px] text-[22px] font-semibold ${pathName === '/' ? 'text-[#069D95] text-[22px] font-semibold' : 'hover:text-[#069D95]'}`}>
                            <IoMdHome />
                            Home
                        </Link>
                        <Link href='/Podcast' className={` flex items-center gap-[23px] text-[22px] font-semibold ${pathName === '/Podcast' ? 'text-[#069D95] text-[22px] font-semibold' : 'hover:text-[#069D95]'}`}>
                            <IoMdHome />
                            Podcast
                        </Link>
                        <Link href='/Settings' className={` flex items-center gap-[23px] text-[22px] font-semibold ${pathName === '/Settings' ? 'text-[#069D95] text-[22px] font-semibold' : 'hover:text-[#069D95]'}`}>
                            <IoMdHome />
                            Settings
                        </Link>
                    </div>
                </div>
                {/* menu  */}
                <div className='mt-[308px]'>
                    <div className='flex text-[22px] font-semibold items-center gap-[50px]'><h2>My Playlist</h2> <div className='border-t-[1px] w-[40px]' /></div>
                    <div className='mt-[38px] flex flex-col gap-[38px]'>
                        <Link href='/Playlist#A' className={` flex items-center gap-[23px] text-[22px] font-semibold ${pathName === '/Playlist#A' ? 'text-[#069D95] text-[22px] font-semibold' : 'hover:text-[#069D95]'}`}>
                            <MdOutlineQueueMusic />
                            Playlist #A
                        </Link>
                        <Link href='/Playlist#B' className={` flex items-center gap-[23px] text-[22px] font-semibold ${pathName === '//Playlist#B' ? 'text-[#069D95] text-[22px] font-semibold' : 'hover:text-[#069D95]'}`}>
                            <MdOutlineQueueMusic  />
                            Playlist #B
                        </Link>
                        <Link href='/Playlist#C' className={` flex items-center gap-[23px] text-[22px] font-semibold ${pathName === '/Playlist#C' ? 'text-[#069D95] text-[22px] font-semibold' : 'hover:text-[#069D95]'}`}>
                            <MdOutlineQueueMusic  />
                            Playlist #C
                        </Link>
                        <Link href='/AddNew' className={` flex items-center gap-[23px] text-[22px] font-semibold ${pathName === '/AddNew' ? 'text-[#069D95] text-[22px] font-semibold' : 'hover:text-[#069D95]'}`}>
                            <MdOutlineQueueMusic  />
                            Add New +
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
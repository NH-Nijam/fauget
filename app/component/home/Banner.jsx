'use client'
import React, { useContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay } from 'swiper/modules';
import { DataContext } from '../../Layout/Layout';
import Image from 'next/image';
const Banner = () => {
    const [datas, setDatas] = useContext(DataContext)
    return (
        <div className='w-full relative'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className="w-full  h-[298px]"
            >
                <SwiperSlide className='relative'>
                    <Image src='/images/ban1.png' width={500} height={500} alt='banner' className='w-full h-full absolute' />
                    <Image src='/images/bg2.png' width={500} height={500} alt='shadow' className='absolute w-full h-full' />
                    <div className='absolute top-0 lg:px-[42px] md:px-5 px-3 lg:mt-[35px] mt-5'>
                        <h3 className='lg:text-lg text-xs font-semibold '>Top play music station</h3>
                        <h1 className='lg:text-[35px] text-xl my-[14px]'>The Dark Side of Music: Unveiling Its Negative Effects</h1>
                        <p className='text-xs'>Music, often regarded as a universal language, possesses a profound impact on individuals and societies alike. While it has long been celebrated for its ability to evoke emotions, foster connections, and uplift spirits, the flip side of the melody reveals a spectrum of adverse effects that are often overlooked</p>
                        <button className='bg-[#090909]/60 text-white rounded-[25px] lg:px-[52px] px-[25px] lg:py-[14px] py-[5px] mt-[22px]'>For You?</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='relative'>
                    <Image src='/images/man.png' width={174} height={295} alt='banner' className=' absolute z-10 right-10 bottom-0 lg:flex hidden' />
                    <Image src='/images/bg.png' width={500} height={500} alt='shadow' className='absolute w-full h-full' />
                    <div className='absolute top-0 lg:px-[42px] md:px-5 px-3 mt-[35px] '>
                        <h3 className='lg:text-lg text-xs font-semibold flex items-center gap-[25px]'><Image src='/images/king.png' width={51} height={30} alt='king'/> <span>No Ads & Unlock All Paid Songs</span></h3>
                        <h1 className='lg:text-[35px] text-xl my-[14px]'>Premium Membership</h1>
                        <p className='text-xs'>It is a long established fact that a is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                        <div className='mt-[22px] flex gap-[31px]'>
                            <button className='bg-[#007182]/80 text-white rounded-[25px] lg:px-[52px] px-[25px] lg:py-[14px] py-[5px]  border-[1px] border-black hover:bg-[#060606] duration-500'>Upgrade Now</button>
                            <button className='bg-[#007182]/80 text-white rounded-[25px] lg:px-[52px] px-[25px] lg:py-[14px] py-[5px]  border-[1px] border-black hover:bg-[#060606] duration-500'>Learn more</button>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Banner;
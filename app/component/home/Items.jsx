'use client'
import { DataContext } from '@/app/Layout/Layout';
import React, { useContext, useState } from 'react';
import ReactPlayer from "react-player";

const Items = () => {
    const [datas, setDatas] = useContext(DataContext)
    console.log(datas);
    return (
        <div className='mt-[71px] md:px-5 lg:px-0 px-3'>
            <div className=' flex gap-[10px] flex-wrap justify-center lg:justify-start'>
                <button className='px-[41px] py-[14px] bg-[#3B3B3B] hover:bg-[#060606] duration-500 rounded-[25px] '>For You </button>
                <button className='px-[41px] py-[14px] bg-[#3B3B3B] hover:bg-[#060606] duration-500 rounded-[25px] '>Popular </button>
                <button className='px-[41px] py-[14px] bg-[#3B3B3B] hover:bg-[#060606] duration-500 rounded-[25px] '>Trend </button>
                <button className='px-[41px] py-[14px] bg-[#3B3B3B] hover:bg-[#060606] duration-500 rounded-[25px] '>Pop </button>
                <button className='px-[41px] py-[14px] bg-[#3B3B3B] hover:bg-[#060606] duration-500 rounded-[25px] '>Edm </button>
                <button className='px-[41px] py-[14px] bg-[#3B3B3B] hover:bg-[#060606] duration-500 rounded-[25px] '>Rock </button>
                <button className='px-[41px] py-[14px] bg-[#3B3B3B] hover:bg-[#060606] duration-500 rounded-[25px] '>More </button>
            </div>
            <div className='grid lg:grid-cols-5 md:grid-cols-2 mt-[35px] gap-[34px] '>
                {
                    datas.map(({ id, link }) => (
                        <div key={id} className='w-full h-[198px] rounded-[35px]  gap-[34px] overflow-hidden'>
                            <div className='w-full h-full '>
                                <ReactPlayer
                                className='w-full h-full'
                                    url={link}
                                    controls={true}
                                />
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Items;
import React from 'react';

const Header = () => {
    return (
        <div className='sticky top-0  my-[56px] flex justify-between items-center '>
            <h1 className='text-[30px] font-semibold'>Welcome to fauget music services</h1>
            <div className='flex gap-[31px]'>
                <button className='px-[75px] py-[14px] bg-[#3B3B3B] rounded-[25px] border-[1px] border-[#060606]'>Sign in </button>
                <button className='px-[75px] py-[14px] bg-[#3B3B3B] rounded-[25px] border-[1px] border-[#060606]'>Sign up </button>
            </div>
        </div>
    );
};

export default Header;
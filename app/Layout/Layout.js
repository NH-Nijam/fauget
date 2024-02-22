import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

const Homelayout = ({children}) => {
    return (
        <div className='flex'>
            <div className='bg-[#3B3B3B] '>
                <Sidebar/>
            </div>
            <div className='px-[50px] w-full'>
                <Header/>
                {children}
            </div>
        </div>
    );
};

export default Homelayout;
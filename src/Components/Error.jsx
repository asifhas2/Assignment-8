import React from 'react';
import errorImg from '../assets/error-404.png'
const Error = () => {
    return (
        <div className=' flex flex-col justify-center items-center h-screen'>
            <div>
                <img className='h-[200px] md:h-[400px]' src={errorImg} alt="" />
            </div>
            <div className='flex flex-col justify-center items-center mt-7 space-y-4'>
                <h1 className='text-4xl font-semibold'>Oops, page not found!</h1>
                <p className='text-gray-500'>The page you are looking for is not available.</p>
                   <button
                 className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2]">
                 <h1 className="text-[18px] font-semibold text-white text-center">
                   Go Back!
                 </h1>
               </button>
            </div>
        </div>
    );
};

export default Error;
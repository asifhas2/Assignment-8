import React from 'react';
import errorImg2 from '../assets/App-Error.png'
import { Link } from 'react-router';
const ErrorPage02 = () => {
    return (
        <div className='flex flex-col justify-center items-center h-screen'>
           <div>
                 <img src={errorImg2} alt="" />
           </div>
            <div className='flex flex-col justify-center items-center mt-7 space-y-4'>
                <h1 className='text-4xl font-semibold'>Oops, Apps not found!</h1>
                <p className='text-gray-500'>The Apps you are looking for is not available.</p>
                   <Link to='/'>
                   <button
                 className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2]">
                 <h1 className="text-[18px] font-semibold text-white text-center">
                   Go Back Home!
                 </h1>
               </button>
                   
                   </Link>
            </div>
        </div>
        
    );
};

export default ErrorPage02;
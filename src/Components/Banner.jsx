import React from 'react';
import appStoreLogo from '../assets/Group (3).png'
import hero from '../assets/hero.png'
const 
Banner = () => {
    return (
        <div className='bg-gray-100 py-20 text-center '>
            <div class=" mb-5 md:mb-10">
  
  
  <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
    We Build
    <div className='flex justify-center items-center gap-3'>
        <span className="block mt-2 bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent">
      Productive
    </span>
    Apps
    </div>
  </h1>

  
  <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
    At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.
    Our goal is to turn your ideas into digital experiences that truly make an impact.
  </p>

 
  <div class="mt-6 flex justify-center gap-4">
    
    
    <button className="flex items-center gap-2 border px-4 py-2 rounded-lg bg-white shadow-sm hover:shadow-md transition">
      <img src="https://cdn-icons-png.flaticon.com/512/888/888857.png" className="w-5" />
      Google Play
    </button>

    
    <button className="flex items-center gap-2 border px-4 py-2 rounded-lg bg-white shadow-sm hover:shadow-md transition">
      <img src={appStoreLogo} className='h-5 w-5'/>
      App Store
    </button>

  </div>
            </div >
               
            <div className='flex justify-center items-center'>
                 <img className='h-50 w-80 md:w-140 md:h-80' src={hero} alt="" />
            </div>
            <div className='border border-gray-100 w-full  bg-gradient-to-r from-[#632EE3] to-[#9F62F2] space-y-7 '>
                <h2 className='text-2xl mb:text-3xl font-semibold mt-10 text-white'>Trusted by Millions, Built for You</h2>
                <div className='flex justify-center items-center gap-10 mb-10 '>
                    <div className='space-y-3 '>
                        <p className='text-[10px] text-white'>Total Downloads</p>
                        <h1 className='text-2xl md:text-5xl font-bold text-white '>29.6M</h1>
                        <p className='text-[10px] text-white'>21% more than last month</p>
                    </div>
                    <div className='space-y-3'>
                        <p className='text-[10px] text-white'>Total Downloads</p>
                        <h1 className='text-2xl md:text-5xl font-bold text-white'>29.6M</h1>
                        <p className='text-[10px] text-white'>21% more than last month</p>
                    </div>
                    <div className='space-y-3'>
                        <p className='text-[10px] text-white'>Total Downloads</p>
                        <h1 className='text-2xl md:text-5xl font-bold text-white'>29.6M</h1>
                        <p className='text-[10px] text-white'>21% more than last month</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;

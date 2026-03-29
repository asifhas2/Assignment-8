import React from 'react';
import downlodeIcon from '../assets/icon-downloads.png'
import ratingIcon from '../assets/icon-ratings.png'
import picture from '../assets/demo-app (3).webp'
const InstallCard = ({data,handelUninstallItem}) => {
    const {title,size,ratingAvg,image,downloads,id}=data;
    return (
        <div className=' bg-white p-5 mt-6 space-y-5 md:flex justify-between items-center' >
            <div className='flex  items-center gap-6'>
                <div>
                    <img className='h-15 md:h-30 rounded-2xl' src={image} alt="" />
                </div>
                <div className='space-y-5'>
                    <h1 className='text-[20px] font-semibold'>{title}</h1>
                    <div className='flex gap-8'>
                        <p className='text-gray-400 flex gap-1 text-[18px] font-semibold'><img className='h-6' src={downlodeIcon} alt="" /> {downloads}M</p>
                        <p className='text-gray-400 flex gap-1 text-[18px] font-semibold'><img className='h-6' src={ratingIcon} alt="" /> {ratingAvg}M</p>
                        <p className='text-gray-400 flex gap-1 text-[18px] font-semibold'> {size}MB</p>
                    </div>
                </div>
            </div>
            <div>
                <button onClick={()=>handelUninstallItem(id)} className='px-8 py-3 rounded-[6px] bg-green-400 text-white font-bold text-[18px] '>
                    Uninstall
                </button>
            </div>
        </div>
    );
};

export default InstallCard;
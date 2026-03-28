import React from 'react';
import Banner from '../Components/Banner';
import useAppStore from '../Hooks/useAppStore';
import Card from '../Components/Card';
import { Link } from 'react-router';

const Home = () => {
    const {apps} = useAppStore();
    const trandingData = apps.slice(0,8);
    console.log(trandingData);
    console.lo
    return (
        <div className='bg-gray-100'>
            <Banner></Banner>
            <div className='space-y-4'>
                <h1 className='text-center text-2xl font-semibold'>Trending Apps</h1>
                <p className='text-sm text-[#627382] text-center'>Explore All Trending Apps on the Market developed by us</p>
               <div className='mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5 '>
                     {
                    trandingData.map(data =><Card data={data}></Card>)
                }
               </div>
            </div>
            <Link to='/apps'>
                <div className='flex justify-center py-10'>
                <button className='btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] '>
                         <h1 className='text-[18px] font-semibold text-white text-center'>Show All</h1>
                </button>
            </div>
            </Link>

        
        </div>
    );
};

export default Home;
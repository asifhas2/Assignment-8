import React, { useState } from 'react';
import useAppStore from '../Hooks/useAppStore';
import Card from '../Components/Card';
import { Link, useNavigate } from 'react-router';

const AllAplication = () => {
    const {apps}=useAppStore();
    const[search,setSearch]=useState('');
    const term = search.trim().toLocaleLowerCase();
    const getSearchItem = apps.filter(app =>app.title.toLocaleLowerCase().includes(term))
    const searchApps = term ?getSearchItem :apps;
    
    console.log(searchApps);

    const navigate = useNavigate();

    return (
        <div className='py-12 bg-gray-100'>
            <div className=' w-full text-center '>
                <h1 className='text-3xl font-bold mb-2'>Our All Applications</h1>
                <p className='text-sm text-gray-500'>Explore All Apps on the Market developed by us. We code for Millions</p>
                
            </div>
            <div className='mt-7'>
                <div className='flex justify-between items-center '>
                    <h2 className='text-xl font-semibold'>({searchApps.length})Apps Founds</h2>

                    <label onChange={(e)=>setSearch(e.target.value)} className="input flex  gap-2  ">
  <svg
    className="h-5 w-5 opacity-50"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
  >
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
  </svg>

  <input 
    type="search"
    required
    placeholder="Search..."
    className="w-full outline-none bg-transparent text-sm sm:text-base"
  />
</label>
                </div>
               
               {
                searchApps.length>0 ? ( <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-7'>
                    {
                        searchApps.map(data =><Card data={data}></Card>)
                    }
                </div>):(term&& (<div>
                    <p className='text-center w-full py-20 h-full text-5xl font-bold text-gray-600'>No Apps Found </p>
                    <Link >
                <div className='flex justify-center py-10'>
                <button className='btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] '>
                         <h1 className='text-[18px] font-semibold text-white text-center'>Show All Apps</h1>
                </button>
            </div>
            </Link>
                </div>)
                
            )
               }

            </div>
        </div>
    );
};

export default AllAplication;


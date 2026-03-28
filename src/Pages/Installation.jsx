import React, { useEffect, useState } from 'react';
import InstallCard from '../Components/InstallCard';

const Installation = () => {

    const [installApp,setInstallApp]=useState([]);
    

    useEffect(()=>{
        const installData = JSON.parse(localStorage.getItem('installData'));
        if(installData){
            setInstallApp(installData);
        }
    },[])
    
console.log(installApp);
    return (
        <div>
            <div className=' mt-20 space-y-7'>
                    <h1 className='text-5xl font-bold text-center'>Your Installed Apps</h1>
                    <p className='text-gray-500 text-center'>Explore All Trending Apps on the Market developed by us</p>

            </div>
            <div>
                <div className='flex justify-between mt-10'>
                    <h1 className='text-3xl font-bold'>{installApp.length} Apps Founds</h1>
                    <button className='btn btn-primary'>sort by</button>
                </div>
                <div>
                    {
                        installApp.map(data =><InstallCard data={data}></InstallCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Installation;
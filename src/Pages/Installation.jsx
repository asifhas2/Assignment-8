import React, { useEffect, useState } from 'react';
import InstallCard from '../Components/InstallCard';

const Installation = () => {

    const [installApp,setInstallApp]=useState([]);
     const [sortApps,setSortApps] =useState('none');
    

    useEffect(()=>{
        const installData = JSON.parse(localStorage.getItem('installData'));
        if(installData){
            setInstallApp(installData);
        }
    },[])

//    console.log(sortApps);

   const handelSortItem = ()=>{
    if(sortApps === 'high-low'){
        return [...installApp].sort((a,b)=>b.downloads - a.downloads);
    }
    else if(sortApps === 'low-high'){
        return [...installApp].sort((a,b)=>a.downloads - b.downloads)
    }
    else{
        return installApp
    }
   }

   const handelUninstallItem = (id) => {
    const storedData = localStorage.getItem('installData');

    const installData = storedData ? JSON.parse(storedData) : [];

    const updateData = installData.filter(data => data.id !== id);

    setInstallApp(updateData);
    localStorage.setItem('installData', JSON.stringify(updateData));
}

    

    return (
        <div>
            <div className=' mt-20 space-y-7'>
                    <h1 className='text-5xl font-bold text-center'>Your Installed Apps</h1>
                    <p className='text-gray-500 text-center'>Explore All Trending Apps on the Market developed by us</p>

            </div>
            <div>
                <div className='flex justify-between mt-10'>
                    <h1 className='text-3xl font-bold'>{installApp.length} Apps Founds</h1>
                   <label className='form-control w-full max-w-xs'>
                        <select  value={sortApps} onChange={(e)=>setSortApps(e.target.value)} className='select select-border' name="" id="">
                            <option value="none">Sort By Downloads</option>
                            <option value="high-low">High-&gt;Low</option>
                            <option value="low-high">Low-&gt;High</option>
                        </select>
                   </label>
                </div>
                <div>
                    {
                        handelSortItem().map(data =><InstallCard handelUninstallItem={handelUninstallItem}  data={data}></InstallCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Installation;
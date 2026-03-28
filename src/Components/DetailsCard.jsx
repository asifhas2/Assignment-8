import React from 'react';
import downlodeIcon from '../assets/icon-downloads.png'
import ratingIcon from '../assets/icon-ratings.png'
import like from '../assets/fi_17817684.png'
const DetailsCard = ({appDetails}) => {

    const handelInstall =(id)=>{
       const exastingData = JSON.parse(localStorage.getItem('installData'));
    //    console.log(installData);
       let updateList = []
        if(exastingData){
            const isInstalled = exastingData.some(p=>p.id == id);
            if(isInstalled){
                return alert("this products is installed");

            }
            updateList=[...exastingData,appDetails]
        }
         else{
               updateList.push(appDetails);
            }
        localStorage.setItem('installData',JSON.stringify(updateList));
    }

    if(!appDetails){
        return <p>Loading.....</p>
    }
    // console.log(appDetails.id);
    return (
        <div className='md:flex gap-8 border-b border-gray-400 py-10' >
            <div className=''>
                <img className=' p-4 bg-white  md:[300px] w-[350px]' src={appDetails.image} alt="" />
            </div>
            <div className='md:w-[75%]'>
                <div className='border-gray-400 border-b-1  pt-2 pb-7 w-full'>
                    <h1 className='text-3xl font-bold '>{appDetails.title}</h1>
                    <p className='text-gray-500 font-bold text-sm mt-2'>Developed by <span className='text-blue-500'>{appDetails.companyName}.io</span></p>
                </div>
                <div className=' py-5 flex gap-20'>
                    <div className='space-y-1 flex flex-col items-center'>
                        <img className='h-9 w-8' src={downlodeIcon} alt="" />
                        <p className='text-sm text-gray-500'>Downloads</p>
                        <h1 className='text-4xl font-bold'>{appDetails.downloads}M</h1>
                    </div>
                    <div className='space-y-1 flex flex-col items-center'>
                        <img className='h-9 w-8' src={ratingIcon} alt="" />
                        <p className='text-sm text-gray-500'>Downloads</p>
                        <h1 className='text-4xl font-bold'>{appDetails.ratingAvg}</h1>
                    </div>
                    <div className='space-y-1 flex flex-col items-center'>
                        <img className='h-9 w-8' src={like} alt="" />
                        <p className='text-sm text-gray-500'>Downloads</p>
                        <h1 className='text-4xl font-bold'>{appDetails.reviews}K</h1>
                    </div>
                </div>
                <div>
                <button onClick={()=>handelInstall(appDetails.id)} className='btn bg-green-400 text-white font-semibold '>
                    Install Now ({appDetails.size} MB)
                </button>
            </div>
            </div>
            
        </div>
    );
};

export default DetailsCard;
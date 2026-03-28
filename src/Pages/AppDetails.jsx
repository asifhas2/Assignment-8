import React from 'react';
import { useParams } from 'react-router';
import useAppStore from '../Hooks/useAppStore';
import DetailsCard from '../Components/DetailsCard';
import BarChart from '../Components/BarChart';
import Error from '../Components/Error';
import ErrorPage02 from '../Components/ErrorPage02';

const AppDetails = () => {
    const {apps} = useAppStore();
    const {id} = useParams();
    // console.log(apps);
    const appDetails = apps.find(data => data.id === parseInt(id));
    if(!appDetails){
        return <ErrorPage02></ErrorPage02>
    }
    // console.log(appDetails);
    return (
        <div className='bg-gray-100 mb-20'>
            <DetailsCard appDetails={appDetails}></DetailsCard>
            <BarChart appDetails={appDetails}></BarChart>
            <div>
                <h1 className='text-2xl font-semibold '>Description</h1>
                <p className='text-gray-500 text-sm mt-4'>{appDetails.description}</p>
            </div>
        </div>
    );
};

export default AppDetails;
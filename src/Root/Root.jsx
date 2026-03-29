import React from 'react';
import Navber from '../Components/Navber';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../Components/Footer';
  import { ToastContainer,} from 'react-toastify';

const Root = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className='flex flex-col min-h-screen bg-gray-100'>
      
      <Navber />

      <div className='flex-1 px-4 md:px-8 lg:px-12 relative'>
        
        {
          isLoading && (
            <div className="absolute inset-0 flex justify-center items-center bg-white/60 backdrop-blur-sm z-50">
              <span className="loading loading-spinner loading-lg text-primary"></span>
            </div>
          )
        }

        <Outlet />

      </div>

      <Footer />
                <ToastContainer />

    </div>
  );
};

export default Root;
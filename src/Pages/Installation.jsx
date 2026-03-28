import React, { useEffect, useState } from 'react';

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
            this is Installation page:{installApp.length}
        </div>
    );
};

export default Installation;
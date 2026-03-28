import axios from "axios";
import { useEffect, useState } from "react"


 const useAppStore =()=>{

    const [apps,setApps]=useState([]);
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState(null);

    useEffect(()=>{
        setLoading(true)

        axios('../appStore.json')
        .then(data =>setApps(data.data))
        .then(err =>setError(err))
        .finally(()=>setLoading(false))
    },[])
return {apps,loading,error};
}
export default useAppStore;
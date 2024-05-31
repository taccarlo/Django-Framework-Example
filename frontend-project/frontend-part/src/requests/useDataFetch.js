import {useEffect, useState, useRef} from "react";
import axios from "axios";

const useDataFetch = (url,fromDate,toDate)=>{
    const [data,setData] = useState(null);
    const [error, setError]=useState(null);
    const [isLoading, setIsLoading]=useState(false);
    const fetchData = async () => {
        setIsLoading(true);
        try{
            const response = await axios.post(url, {
                from: fromDate,
                to: toDate
                });
            setData(response.data);
        }catch(error){
            setError(error);
        }finally{
            setIsLoading(false);
        }
    };
    // we need this from react 18 in dev mode to run once the request
    const count = useRef(0);
    useEffect(()=>{
        if (count.current !== 0) 
            fetchData();
        count.current++;
    },[url]);
    const refresh = ()=>{
        fetchData();
    }
    return {data,error,isLoading,refresh};
}
export default useDataFetch;
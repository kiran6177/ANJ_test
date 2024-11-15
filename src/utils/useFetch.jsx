import React, { useState } from 'react'

function useFetch() {
    const [data,setData] = useState(null);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState("");

    const fetchData = async (url)=>{
        try {
            const response = await fetch(url);
            const resdata = await response.json()
            if(resdata){
            setData(resdata)  
            }
            setLoading(false)
        } catch (error) {
            setLoading(false)
            setError(error.message)
        }
    }
    return [data,loading,error,fetchData]
}

export default useFetch

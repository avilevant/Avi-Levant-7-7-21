import React, {useState, useEffect} from 'react';


const TimeDate = () =>{
    const [currentDateTime, setCurrentDateTime] = useState(new Date().toLocaleString());

    useEffect(()=>{
        setInterval(()=>setCurrentDateTime(new Date().toLocaleString()),1000)
    },[])
    return <p>Current Weather At: {currentDateTime}</p>
}

export default TimeDate;
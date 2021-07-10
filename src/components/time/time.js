import React, {useState, useEffect} from 'react';


const TimeDate = () =>{
    const [currentDateTime, setCurrentDateTime] = useState(new Date().toLocaleString());

    useEffect(()=>{
        setInterval(()=>setCurrentDateTime(new Date().toLocaleString()),1000)
    },[currentDateTime])
    return <p  className='text-xs dark:text-white'>{currentDateTime}</p>
}

export default TimeDate;
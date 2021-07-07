import React from 'react';
import { WiCelsius } from "react-icons/wi";
const CurrentWeather =({tempCelsius,Icon,text,city})=>{


    let IconNew
    if(Icon<=9){
        IconNew =`0`+ Icon
    }else{
        IconNew = Icon
    }

    return(
        <div className='flex flex-col justify-center text-center ' >
        <h1 className='text-lg mb-2'>{city}</h1>
        <img src={`https://developer.accuweather.com/sites/default/files/${IconNew}-s.png`} alt="weatherIcon" />
        <h2 className='flex text-xs mt-2'>Temperature: {tempCelsius}<WiCelsius/></h2>
        <h3 className='text-sm mt-2'>{text}</h3>
        </div>
    )
}

export default CurrentWeather;
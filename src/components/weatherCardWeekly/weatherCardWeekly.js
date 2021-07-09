import React from 'react';

const WeatherCardWeekly=({minTemp,maxTemp,description,weatherIcon,day})=>{

    let weatherIconNew
    if(weatherIcon<=9){
        weatherIconNew =`0`+ weatherIcon
    }else{
        weatherIconNew = weatherIcon
    }

 
    return(
        <div class="shadow-lg flex flex-col place-self-center m-4 p-2 text-center">
        <h1>{day}</h1>
        <h2>{description}</h2>
        <div className='flex justify-center'>
        <img  src={`https://developer.accuweather.com/sites/default/files/${weatherIconNew}-s.png`} alt="weatherIcon" />
        </div>
        <h2 className='text-xs'>Temperature: {minTemp} - {maxTemp} </h2>
        </div>
    )
}





export default WeatherCardWeekly;
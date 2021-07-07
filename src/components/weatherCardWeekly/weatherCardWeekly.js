import React from 'react';

const WeatherCardWeekly=({minTemp,maxTemp,description,weatherIcon,day})=>{

    let weatherIconNew
    if(weatherIcon<=9){
        weatherIconNew =`0`+ weatherIcon
    }else{
        weatherIconNew = weatherIcon
    }

 
    return(
        <div class="shadow-lg box-border h-32 w-32 p-4">
        <h1>{day}</h1>
        <h2>{description}</h2>
        <img src={`https://developer.accuweather.com/sites/default/files/${weatherIconNew}-s.png`} alt="weatherIcon" />
        <h2>Temperature: {minTemp} - {maxTemp} </h2>
        </div>
    )
}





export default WeatherCardWeekly;
import React, { useEffect, useState} from 'react';
import { CurrentWeatherData, WeeklyData } from '../components/tesingData/testingData';
import WeatherCardFavorites from '../components/weatheCardFavorites/weatheCardFavorites';
import WeatherCardWeekly from '../components/weatherCardWeekly/weatherCardWeekly';
import CurrentWeather from '../components/currentWeather/currentWeather';
import FavoritesControl from '../components/favoritesControl/favoritesControl';
import TimeDate from '../components/time/time';




const WeatherInput = () =>{
  

    
    
    const ApiKey = 'H7yrC1AsYvxVboXkWg3pcGqFFGh58Uxj'
    const [dailyWeather, setDailyWeather] = useState(CurrentWeatherData);
    const [locationKey, setLocationKey] = useState('215854');
    const [weeklyWeather, setWeeklyWeather] = useState(WeeklyData);
    const [cityInput, setCityInput] = useState('');
    // const [degreesView, setDegreesView] = useState(dailyWeather.tempCelsius);
    const [cityInfo, setCityInfo] = useState({
        city:'Tel Aviv',
        country:'Israel',
        newLocationKey:'215854'
    });
    
    const weekDays = [ 'Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    
    // useEffect(()=>{
    //     fetch(`http://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${ApiKey}`)
    //     .then(res =>res.json())
    //     .then(res=>setDailyWeather({
    //         tempFarenhite:res[0].Temperature.Imperial.Value,
    //         tempCelsius:res[0].Temperature.Metric.Value,
    //         Icon:res[0].WeatherIcon,
    //         text:res[0].WeatherText
    //     }))       
    // },[locationKey])
   

    // useEffect(()=>{
    //     fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}?apikey=${ApiKey}`)
    //     .then(res =>res.json())
    //     .then(res=>setWeeklyWeather(res.DailyForecasts.map(weekly=>{
    //      return{
    //             minTemp: weekly.Temperature.Minimum.Value,
    //             maxTemp: weekly.Temperature.Maximum.Value,
    //             description: weekly.Day.IconPhrase,
    //             weatherIcon: weekly.Day.Icon,
    //             day: weekDays[new Date(weekly.Date).getDay()] 
    //      }
    // })))
    // },[locationKey])
    

    // useEffect(()=>{console.log ("daily:", dailyWeather,"weekly: " , weeklyWeather,'cityInfo: ',cityInfo,'cityInput: ',cityInput  )},[dailyWeather,weeklyWeather,cityInfo,cityInput])
    
   
        
        // useEffect(()=>{
        //     fetch(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=H7yrC1AsYvxVboXkWg3pcGqFFGh58Uxj&q=${cityInput}`)
        //     .then(res =>res.json())
        //     .then(res=>setCityInfo({
        //         // cityArray:res.AdministrativeArea.LocalizedName,
        //         city:res[0].AdministrativeArea.LocalizedName,
        //         country:res[0].Country.LocalizedName,
        //         newLocationKey:res[0].Key
        //     }))
        // },[cityInput])
   
    const findCityInfo =()=>{
        setLocationKey(cityInfo.newLocationKey)
    }

    const WeatherCards =()=>{
        return(

            !!weeklyWeather &&  weeklyWeather.map((info,index)=>(
                    <div key={index}>
                        <WeatherCardWeekly  minTemp={info.minTemp} 
                                            maxTemp={info.maxTemp}
                                            description={info.description}
                                            weatherIcon={info.weatherIcon}
                                            day={info.day} />
                    </div>
            ))
        )}
        
   

    return(
        <div>
        <div className='flex justify-center m-8 text-sm '>
        <input className='border-2 border-indigo-600'  
        value={cityInput} 
        onChange={e=>{
            setCityInput(e.target.value)
            setLocationKey(false)//to avoid making requests every time a key is entered

        } }/>
        <h2>{cityInfo.cityArray}</h2>
        <button className='border-2 border-grey-600 p-1' onClick={findCityInfo}>search weather</button>
        
        </div>
        <div class="container mx-auto border-2 border-grey-600 p-2 flex justify-between">
        
       
            <div className=' text-sm '>
                <h1>{cityInfo.city}</h1>
                <h1>{cityInfo.country}</h1>
                <TimeDate/>
            <div>
        <CurrentWeather Icon={dailyWeather.Icon} tempCelsius={dailyWeather.tempCelsius} text={dailyWeather.text} name={cityInfo.city}/>
        </div>    
        </div>
        <div>
        <FavoritesControl location={locationKey}/>
        </div>
        </div>
        <div className='flex text-sm'>
        {WeatherCards()}
        </div>
        </div>

    )
}

export default WeatherInput;
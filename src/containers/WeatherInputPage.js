import React, { useEffect, useState} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { CurrentWeatherData, WeeklyData } from '../components/tesingData/testingData';
import WeatherCardFavorites from '../components/weatheCardFavorites/weatheCardFavorites';
import WeatherCardWeekly from '../components/weatherCardWeekly/weatherCardWeekly';
import CurrentWeather from '../components/currentWeather/currentWeather';
import FavoritesControl from '../components/favoritesControl/favoritesControl';
import TimeDate from '../components/time/time';
// import SearchBar from '../components/searchBar/searchBar';
import { FarToCel, CelToFar } from '../components/weatheDegreesConverter/weatheDegreesConverter';
import ToggleButton from 'react-toggle-button';
import { tempToggleActions } from '../store/index2';
import { WiCelsius } from "react-icons/wi";
import { WiFahrenheit } from "react-icons/wi";
import SearchCity from '../components/searchBar/autoCompleteSearch';
import  {ErrorBoundary} from 'react-error-boundary';
import {FallBackView, myErrorHandler} from '../errorHandle/errorHandle';


const borderRadiusStyle = { borderRadius: 2 } 

const WeatherInput = () =>{

    const cityInfo =useSelector(state=>state.CityInfo)
    const value=useSelector(state=> state.tempToggle.celsius)
    const {cityName,locationKey} = cityInfo
    const dispatch = useDispatch()
    const dispatchToggleTemp = () =>{
        dispatch(tempToggleActions.tempToggle())
    }
    
    // const ApiKey = 'oYr86E90OF6kKAgK9NJv9xuNXeHCARHF'
    const ApiKey = 'H7yrC1AsYvxVboXkWg3pcGqFFGh58Uxj'
    // const ApiKey = 'avx7kGUSvEuizNxsnGQ7tUBE9Uy5BhG3'
    const [dailyWeather, setDailyWeather] = useState([]);//CurrentWeatherData
    const [weeklyWeather, setWeeklyWeather] = useState([]);//WeeklyData
  
    
    useEffect(()=>{
        fetch(`http://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${ApiKey}`)
       .then(res =>{
            if(!res.ok){
                console.log("didn't get the current forecast")
            }   
           return res.json()}) 
        .then(res=>setDailyWeather({
            tempFarenhite:res[0].Temperature.Imperial.Value,
            tempCelsius:res[0].Temperature.Metric.Value,
            Icon:res[0].WeatherIcon,
            text:res[0].WeatherText}))
        .catch(err=>{
        console.error(err)})
    },[locationKey])
   
    useEffect(()=>{
        const weekDays = [ 'Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

        fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}?apikey=${ApiKey}`)
        .then(res =>{
            if(!res.ok){
                console.log("didn't get the weekly forecast")
            }   
           return res.json()})      
        .then(res=>setWeeklyWeather(res.DailyForecasts.map(weekly =>  { return {
                minTemp: weekly.Temperature.Minimum.Value,
                maxTemp: weekly.Temperature.Maximum.Value,
                description: weekly.Day.IconPhrase,
                weatherIcon: weekly.Day.Icon,
                day: weekDays[new Date(weekly.Date).getDay()] 
         }})))
         .catch(err=>{
            console.error(err)
        })
    },[locationKey])

    const FarToCelsius =(tempInF)=>{
        return(<FarToCel fahrenheit={tempInF}/>)}

    const CelsiusToFar =(tempInC)=>{
        return(<CelToFar celsius={tempInC}/>)}

    const WeatherCards =()=>{
        return(
            
            !!weeklyWeather &&  weeklyWeather.map((info,index)=>(
                    <div key={index}>
                        <WeatherCardWeekly  minTemp= {value ? FarToCelsius(info.minTemp): info.minTemp } //receives tempValueChange
                                            maxTemp= {value ? FarToCelsius(info.maxTemp): info.maxTemp} 
                                            description={info.description}
                                            weatherIcon={info.weatherIcon}
                                            day={info.day} />
                    </div>
            ))
        )}
        
        
        
    return(
        <ErrorBoundary FallbackComponent={FallBackView} onError={myErrorHandler} >
        <div className="dark:bg-gray-600">
        <SearchCity />
            <div className= 'border-2 border-grey-600 p-2 dark:bg-black'>
                <div className="flex  sm:justify-between ">
                    <div className=' text-sm '>
                        <h1 className='dark:text-white'>{cityName}</h1>
                        <TimeDate/>    
                    </div>
                        <div>
                        <CurrentWeather Icon={dailyWeather.Icon} 
                        tempCelsius={value ? dailyWeather.tempCelsius : CelsiusToFar(dailyWeather.tempCelsius)} 
                        text={dailyWeather.text} name={cityInfo.city}/>   
                        </div>
                     
                    <div>
                    <FavoritesControl locationKey={locationKey} cityName={cityName}/>
                   
                    </div>
                </div>
                    <div className='grid grid-cols-1  sm:grid-cols-5 gap-4'>
                    {WeatherCards()}
                    </div>
                    <div className='flex justify-center mt-4'>
                    <p className='text-xs mr-1'>F/C Display</p>
                    <ToggleButton  value={value} onToggle={()=>dispatchToggleTemp()}
                    inactiveLabel={<WiCelsius/>}
                    activeLabel={<WiFahrenheit/>}
                    thumbStyle={borderRadiusStyle}
                    trackStyle={borderRadiusStyle}/>
                    
                    </div>

            </div>
        </div>
            
        </ErrorBoundary>
        
       

    )
}

export default WeatherInput;
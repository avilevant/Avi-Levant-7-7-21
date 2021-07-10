import React, { useEffect, useState} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { CurrentWeatherData, WeeklyData } from '../components/tesingData/testingData';
import WeatherCardFavorites from '../components/weatheCardFavorites/weatheCardFavorites';
import WeatherCardWeekly from '../components/weatherCardWeekly/weatherCardWeekly';
import CurrentWeather from '../components/currentWeather/currentWeather';
import FavoritesControl from '../components/favoritesControl/favoritesControl';
import TimeDate from '../components/time/time';
import SearchBar from '../components/searchBar/searchBar';
import { FarToCel, CelToFar } from '../components/weatheDegreesConverter/weatheDegreesConverter';
import ToggleButton from 'react-toggle-button';
import { tempToggleActions } from '../store/index2';
import { WiCelsius } from "react-icons/wi";
import { WiFahrenheit } from "react-icons/wi";


const borderRadiusStyle = { borderRadius: 2 } 

const WeatherInput = () =>{

    const cityInfo =useSelector(state=>state.CityInfo)
    console.log(cityInfo)
    const {cityName,locationKey} = cityInfo
    const value=useSelector(state=> state.tempToggle.celsius)
    const dispatch = useDispatch()
    const dispatchToggleTemp = () =>{
        dispatch(tempToggleActions.tempToggle())
    }
    // const cityNames =[{'haifa'},{'tel-avi'},{'jerusalem'}]
    
    const ApiKey = 'H7yrC1AsYvxVboXkWg3pcGqFFGh58Uxj'
    const [dailyWeather, setDailyWeather] = useState(CurrentWeatherData);
    const [weeklyWeather, setWeeklyWeather] = useState(WeeklyData);
    const [cityInput, setCityInput] = useState('');
    const [citySelect, setCitySelect] = useState();

  
    
    const weekDays = [ 'Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    
    // useEffect((cityInfo)=>{
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
    

    
    
   
        
    
   
    const findCityInfo =()=>{
        // setLocationKey(cityInfo.newLocationKey)
    }

    const FarToCelsius =(tempInF)=>{
        return(
            <FarToCel fahrenheit={tempInF}/>  
        )
    }

    const CelsiusToFar =(tempInC)=>{
        return(
            <CelToFar celsius={tempInC}/>  
        )
    }

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
        <div className="dark:bg-gray-600">
            <div className='flex justify-center m-4 text-xs '>
            <div className='w-20'>
            <SearchBar />
            </div>
                <button className='border-2 border-grey-600 p-1 ml-2 dark:text-white' onClick={findCityInfo}>search weather</button>    
            </div>
            <div className='border-2 border-grey-600 p-2 dark:bg-black'>
                <div className="flex  sm:justify-between ">
                    <div className=' text-sm '>
                        <h1 className='dark:text-white'>{cityName}</h1>
                        <TimeDate/>    
                    </div>
                        <div>
                        <CurrentWeather Icon={dailyWeather.Icon} tempCelsius={value ? dailyWeather.tempCelsius : CelsiusToFar(dailyWeather.tempCelsius)} text={dailyWeather.text} name={cityInfo.city}/>   
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
            
       

    )
}

export default WeatherInput;
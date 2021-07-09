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

const WeatherInput = () =>{
  
    const value=useSelector(state=> state.tempToggle.celsius)
    const dispatch = useDispatch()
    const dispatchToggleTemp = () =>{
        dispatch(tempToggleActions.tempToggle())
    }
    // const cityNames =[{'haifa'},{'tel-avi'},{'jerusalem'}]
    
    const ApiKey = 'H7yrC1AsYvxVboXkWg3pcGqFFGh58Uxj'
    const [dailyWeather, setDailyWeather] = useState(CurrentWeatherData);
    const [locationKey, setLocationKey] = useState('215854');
    const [weeklyWeather, setWeeklyWeather] = useState(WeeklyData);
    const [cityInput, setCityInput] = useState('');
    const [citySelect, setCitySelect] = useState();
    const [tempValueChange, setTempValueChange]= useState(<FarToCel/>);
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
    

    // useEffect(()=>{console.log ("daily:", dailyWeather,"weekly: " , weeklyWeather,'cityInfo: ',cityInfo,'cityInput: ',cityInput ,'citySelect:',citySelect )},[dailyWeather,weeklyWeather,cityInfo,cityInput,citySelect])
    
   
        
    //     useEffect(()=>{
    //         fetch(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=H7yrC1AsYvxVboXkWg3pcGqFFGh58Uxj&q=${cityInput}`)
    //         .then(res =>res.json())
    //         .then(res=>setCityInfo({
    //             // cityArray:res.AdministrativeArea.LocalizedName,
    //             city:res[0].AdministrativeArea.LocalizedName,
    //             country:res[0].Country.LocalizedName,
    //             newLocationKey:res[0].Key
    //         }))
    //     },[cityInput])


        //  useEffect(()=>{
        //     fetch(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=H7yrC1AsYvxVboXkWg3pcGqFFGh58Uxj&q=${cityInput}`)
        //     .then(res =>res.json())
        //     .then(res=>setCitySelect({
        //         value:res[0].AdministrativeArea.LocalizedName,
        //         label:res[0].AdministrativeArea.LocalizedName
        // }))
        // },[cityInput])
   
    const findCityInfo =()=>{
        setLocationKey(cityInfo.newLocationKey)
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
                        <WeatherCardWeekly  minTemp= {value ? FarToCelsius(info.minTemp): CelsiusToFar(info.minTemp) } //receives tempValueChange
                                            maxTemp= {value ? FarToCelsius(info.maxTemp): CelsiusToFar(info.maxTemp)} 
                                            description={info.description}
                                            weatherIcon={info.weatherIcon}
                                            day={info.day} />
                    </div>
            ))
        )}
        
        // <input className='border-2 border-indigo-600'  
        // value={cityInput} 
        // onChange={e=>{
        //     setCityInput(e.target.value)
        // } }/> 
        
        // <h2>{cityInfo.cityArray}</h2>
        
        

    return(
        <div>
            <div className='flex justify-center m-4 text-xs '>
            <div className='w-20'>
            <SearchBar />
            </div>
                <button className='border-2 border-grey-600 p-1 ml-2' onClick={findCityInfo}>search weather</button>    
            </div>
            <div className='container mx-auto border-2 border-grey-600 p-2 '>
                <div class="flex  sm:justify-between ">
                    <div className=' text-sm '>
                        <h1>{cityInfo.city}</h1>
                        <h1>{cityInfo.country}</h1>
                        <TimeDate/>    
                    </div>
                        <div>
                        <CurrentWeather Icon={dailyWeather.Icon} tempCelsius={value ? dailyWeather.tempCelsius : CelsiusToFar(dailyWeather.tempCelsius)} text={dailyWeather.text} name={cityInfo.city}/>   
                        </div>
                     
                    <div>
                    <FavoritesControl locationKey={'fru345345'} cityName={'dd232323kkkkdf'}/>
                    <div className='flex justify-center mt-4'>
                    <ToggleButton  value={value} onToggle={()=>dispatchToggleTemp()}/>
                    </div>

                    </div>
                </div>
                    <div className='grid grid-cols-1  sm:grid-cols-5 gap-4'>
                    {WeatherCards()}
                    </div>
                
            </div>
        </div>
            
        // <FavoritesControl locationKey={locationKey} cityName={cityInfo.city}/>
       

    )
}

export default WeatherInput;
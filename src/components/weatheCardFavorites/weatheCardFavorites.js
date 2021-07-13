import React,{useEffect,useState} from 'react';
import { CityInfoActions } from '../../store/city-slice';
import { useDispatch } from 'react-redux';
import CurrentWeather from '../currentWeather/currentWeather';
import { useHistory } from 'react-router-dom';


const WeatherCardFavorites=()=>{

    const [dailyFavoritesWeather,setDailyFavoritesWeather] = useState([]) 
    const history = useHistory();
    const dispatch = useDispatch()
    const EnterCityInfo = (city,code) => {
        dispatch(CityInfoActions.setCityInfo({
            cityName:city,
            locationKey:code   
        }))
    }


    useEffect(()=>{
        let favoriteWeather = dailyFavoritesWeather
        let getArray = localStorage.getItem('favorites')
        if(getArray){
            let array = JSON.parse(getArray)
            array.map((e)=>(
                            fetch(`https://dataservice.accuweather.com/currentconditions/v1/${e.locationKey}?apikey=H7yrC1AsYvxVboXkWg3pcGqFFGh58Uxj`)
                                .then(res =>{
                                    if(!res.ok){
                                        console.log("couldn't get current conditions for your favorites")
                                    }
                                return res.json()})
                                .then(res=>{
                                    favoriteWeather  = favoriteWeather
                                        .filter(city => city.Key !== e.locationKey)
                                    favoriteWeather.push({   
                                        tempFarenhite:res[0].Temperature.Imperial.Value,
                                        tempCelsius:res[0].Temperature.Metric.Value,
                                        Icon:res[0].WeatherIcon,
                                        text:res[0].WeatherText,  
                                        Key: e.locationKey,
                                        city:e.cityName
                                    })
                                    setDailyFavoritesWeather(favoriteWeather)}
                                    ).catch(err=>{
                                    console.error(err)})))}},[])
   
  
    const favoriteWeekly =(info)=>{
        console.log(info.city)
        EnterCityInfo(info.city, info.Key)
        history.push('/')
    }
    

    const favoritesCards =()=>{
            if(dailyFavoritesWeather.length>0){

                return(
        
                      dailyFavoritesWeather.map((info,index)=>(//change favorites to dailyFavoritesWeather
                            <div key={index} className="flex place-self-center shadow-lg  p-2 mt-2 dark:bg-black" 
                                 onClick={()=>{favoriteWeekly(info)} }>
                                <CurrentWeather     city={info.city}
                                                    Icon={info.Icon}
                                                    tempCelsius={info.tempCelsius}
                                                    text={info.text} />                                         
                            </div>
                    ))
                    
                )
            }
    }

    return(
    <div className='grid grid-cols-2 sm:grid-cols-3 gap-4'>
    {favoritesCards()}
    </div>
)}

export default WeatherCardFavorites;
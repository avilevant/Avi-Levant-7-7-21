import React,{useEffect,useState} from 'react';
import { CityInfoActions } from '../../store/city-slice';
import { useDispatch } from 'react-redux';
import { favorites } from '../tesingData/testingData';
import CurrentWeather from '../currentWeather/currentWeather';
import { useHistory } from 'react-router-dom';


const WeatherCardFavorites=()=>{

    const [arrayOfFavorites, setArrayOfFavorites]=[]
    const [dailyFavoritesWeather,setDailyFavoritesWeather] = [{}]
    const [chosenFavorite, setChosenFavorite] = useState(favorites);
    const history = useHistory();

    const dispatch = useDispatch()

    const EnterCityInfo = (city,code) => {
        dispatch(CityInfoActions.setCityInfo({
            cityName:city,
            locationKey:code
         
        }))
    }

    //get favorites from localStorage
    useEffect(()=>{
        if(localStorage.getItem('favorites')){
            let array = JSON.parse(localStorage.getItem('favorites'))
            // setArrayOfFavorites(array)
            console.log(array)
        }
    },)
   

    //get http for dailyweather for each location key stored in local storage
//     const dailyW = ()=>{
//                arrayOfFavorites.map((e)=>(
//             fetch(`http://dataservice.accuweather.com/currentconditions/v1/${e.locationKey}?apikey=${ApiKey}`)
//                 .then(res =>res.json())
//                 .then(res=>setDailyFavoritesWeather({
//                     tempFarenhite:res[0].Temperature.Imperial.Value,
//                     tempCelsius:res[0].Temperature.Metric.Value,
//                     Icon:res[0].WeatherIcon,
//                     text:res[0].WeatherText
//                 })) )) 
//  }



    //map over the array of objects and display on card





    //on click of card, pass name of city to weather input page and switch to the page
  
    const favoriteWeekly =(info)=>{
        console.log(info.city)
        // EnterCityInfo(info.city, info.code)
        EnterCityInfo('Jerusalem', '213225')
        history.push('/')
    }
    

    const favoritesCards =()=>{
        return(

            !!favorites &&  favorites.map((info,index)=>(
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

    return(
    <div className='grid grid-cols-2 sm:grid-cols-3 gap-4'>
    {favoritesCards()}
    </div>
)}

export default WeatherCardFavorites;
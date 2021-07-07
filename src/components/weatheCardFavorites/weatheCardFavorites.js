import React,{useEffect,useState} from 'react';
import { favorites } from '../tesingData/testingData';
import CurrentWeather from '../currentWeather/currentWeather';

const WeatherCardFavorites=()=>{

    const [arrayOfFavorites, setArrayOfFavorites]=[]

    const [chosenFavorite, setChosenFavorite] = useState(favorites);
   

    //get favorites from localStorage
    // useEffect(()=>{
    //     if(localStorage.getItem('favorites')){
    //         setArrayOfFavorites(JSON.parse(localStorage.getItem('favorites')))
    //     }
    // },)
   

    //get http for dailyweather for each location key stored in local storage
    //map over the array of objects and display on card
    //on click of card, set chosenFavorite.name to city input of weather input page and switch to the page
  
    

    const favoritesCards =()=>{
        return(

            !!favorites &&  favorites.map((info,index)=>(
                    <div key={index} class="flex  place-self-center   shadow-lg  p-4 dark:bg-black text-white" onClick={()=> setChosenFavorite({info})}>
                        <CurrentWeather     city={info.city}
                                            Icon={info.Icon}
                                            tempCelsius={info.tempCelsius}
                                            text={info.text}
                                            />
                    </div>
            ))
        )}

    return(
    <div className='grid gap-4 grid-cols-3'>
    {favoritesCards()}
    </div>
)}

export default WeatherCardFavorites;
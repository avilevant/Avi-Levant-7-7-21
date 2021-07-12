import React, { useState, useEffect } from 'react';
import { CityInfoActions } from '../../store/city-slice';
import { useDispatch } from 'react-redux';


const SearchCity = () =>{

    const dispatch = useDispatch()
    const [cities, setCities] = useState([]);
    console.log('cities last check: ', cities)
    const [input, setInput] = useState('');
    const [suggestions, setSuggestions] = useState([])

    const EnterCityInfo = (cities) => {
        console.log("show me",cities)
        dispatch(CityInfoActions.setCityInfo({
            cityName:cities[0].LocalizedName,
            locationKey:cities[0].Key
        }))

        setInput('')
    }

    

    useEffect(() => {
         if (input === '' )
            return 

         fetch(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=avx7kGUSvEuizNxsnGQ7tUBE9Uy5BhG3&q=${input}`)
         .then(res=>{
            if(!res.ok){
                throw new Error("can't get city names")
            }return res.json()})
         .then(res=>setCities(res))  
         .catch(Error=>{
         console.log(Error)})     
     }, [input])




    const onChangeInput = (text) =>{
        let options=[]
        
        if(text.length>0){
            options= cities.filter(city=>{
                const results = new RegExp(`${text}`,"gi");//change later
                return city.LocalizedName.match(results)
            })
        }
        console.log('options: ', options)
        setSuggestions(options)
        setInput(text)
    }

    const optionsHandler =(input)=>{
        setInput(input) 
        setCities([suggestions.find(e=>e.LocalizedName===input)])
        
        setSuggestions([])
        
    }

    

    return(
        <div>
        <div className='flex justify-center m-4 text-xs '>
            <div >
            <input className='border-2 p-1 ml-2' type='text' 
            value={input} onChange={e=>{onChangeInput(e.target.value)}}
            />
            {suggestions && suggestions.map((suggestion, i) =>
                <div key={i} className='border-2 ml-3  hover:bg-gray-300'
                onClick={()=>{optionsHandler(suggestion.LocalizedName)}} >
                {suggestion.LocalizedName}
                </div>
                )}
            </div>
            <div>
            <button className='border-2 border-grey-600 p-1 ml-2 dark:text-white' onClick={()=>EnterCityInfo(cities)}>search weather</button>   
    </div>         
            </div>
        </div>
      
    )
}

export default SearchCity;
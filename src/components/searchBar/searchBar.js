import React, {useState} from 'react';
import AsyncSelect  from 'react-select/async';
import { CityInfoActions } from '../../store/city-slice';
// import { SearchCities } from '../../weatherLogic/fetchCalls';
import { useDispatch } from 'react-redux';
import { getCitiesByString } from '../../weatherLogic/fetchCalls';
import Autosuggest from 'react-autosuggest';




const SearchBar = () =>{

    const dispatch = useDispatch()

    const EnterCityInfo = () => {
        dispatch(CityInfoActions.setCityInfo({
            cityName:'Tel Aviv',
            locationKey:'215854'
         
        }))
    }

    const [suggestions, setSuggestions] = useState('');
    const [value, setValue] =useState('')

    // const onChange =(value, action)=>{
    //     console.log(`on change called with value: '${value}' action: '${JSON.stringify(action)}'`)
       
    //     setCityNameSearch(value)
    //     console.log('run: ',value)
    // }

    // const loadOptions=async(searchInput,callback)=>{
    //     const response = await fetch(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=H7yrC1AsYvxVboXkWg3pcGqFFGh58Uxj&q=${searchInput}`)
    //     const json=await response.json()
    //     console.log(json)
    //     callback(json.map(res=>({city:res.AdministrativeArea.LocalizedName,
    //                             country:res.Country.LocalizedName,
    //                             newLocationKey:res.Key})))
    // }

    // const loadOptions=async(searchInput,callback)=>{
    //     const response = await fetch(`https://jsonplaceholder.typicode.com/users?name_like=${searchInput}`)
    //     if(!response.ok){
    //         throw new Error("can't get city names")
    //     }
    //     const cities=await response.json()
    //     console.log(cities)
    //     callback(cities.map(res=>({label:res.name,value:res.name})))

        // let cities = getCitiesByString(searchInput)
        // console.log(cities)
        // callback(cities)

    // }

   

    // return(
    //     <AsyncSelect 
    //         onInputChange={onChange}
    //         loadOptions={loadOptions}
    //         placeholder={'city'}
    //         isSearchable

    //     />
    // )

    const languages =async(searchInput)=>{
        const response = await fetch(`https://jsonplaceholder.typicode.com/users?name_like=${searchInput}`)
        if(!response.ok){
            throw new Error("can't get city names")
        }
        const cities=await response.json()
        console.log(cities)
    }
        // Teach Autosuggest how to calculate suggestions for any given input value.
    const getSuggestions = value => {
        const inputValue = value.trim().toLowerCase();
        const inputLength = inputValue.length;
    
        return inputLength === 0 ? [] : languages.filter(lang =>
        lang.name.toLowerCase().slice(0, inputLength) === inputValue
        );
    };
  
  // When suggestion is clicked, Autosuggest needs to populate the input
  // based on the clicked suggestion. Teach Autosuggest how to calculate the
  // input value for every given suggestion.
  const getSuggestionValue = suggestion => suggestion.name;
  
  // Use your imagination to render suggestions.
  const renderSuggestion = suggestion => (
    <div>
      {suggestion.name}
    </div>
  );

  const onChange = (event, {newValue}) =>{
      setValue(newValue)
  }

  const onSuggestionsFetchRequested = ({ value }) => {
    setSuggestions(getSuggestions(value))
  };

  const onSuggestionsClearRequested = () => {
    setSuggestions(getSuggestions([]))
  };

   // Autosuggest will pass through all these props to the input.
   const inputProps = {
    placeholder: 'Type a programming language',
    value,
    onChange: onChange
  };

  // Finally, render it!
  return (
    <Autosuggest
      suggestions={suggestions}
      onSuggestionsFetchRequested={onSuggestionsFetchRequested}
      onSuggestionsClearRequested={onSuggestionsClearRequested}
      getSuggestionValue={getSuggestionValue}
      renderSuggestion={renderSuggestion}
      inputProps={inputProps}
    />
  );

}

export default SearchBar;
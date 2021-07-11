import React, {useState} from 'react';
import AsyncSelect  from 'react-select/async';

// import { SearchCities } from '../../weatherLogic/fetchCalls';

import { getCitiesByString } from '../../weatherLogic/fetchCalls';
import Autosuggest from 'react-autosuggest';




const SearchBar = () =>{

  

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

    
    // const languages =async(searchInput)=>{
    //     const response = await fetch(`https://jsonplaceholder.typicode.com/users?name_like=${searchInput}`)
    //     if(!response.ok){
    //         throw new Error("can't get city names")
    //     }
    //     const cities=await response.json()
    //     console.log(cities)
    //     return cities
    // }
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


// const SearchCity = () =>{

//     const [cities, setCities] = useState([]);
//     const [input, setInput] = useState([]);
//     const [suggestions, setSuggestions] = useState([])

//     useEffect(() => {
//        const loadCities = async()=>{
//         const response = await fetch(`https://jsonplaceholder.typicode.com/users?name_like=${input}`)
//             if(!response.ok){
//                 throw new Error("can't get city names")
//             }
//             const cityList=await response.json()
//             setCities(cityList)
//             console.log("recived from url: " ,cityList)    
//        }
//        loadCities()
//     }, [input])


//     const onChangeInput = (text) =>{
//         let options=[]
//         if(text.length>0){
//             options= cities.filter(city=>{
//                 const results = new RegExp(`${text}`,"gi");//change later
//                 return city.name.match(results)
//             })
//         }
//         console.log('options: ', options)
//         setSuggestions(options)
//         setInput(text)
//     }

//     const optionsHandler =(input)=>{
//         setInput(input)
//         setSuggestions([])
//         console.log('input:',input)
//     }

//     const getCityData =()=>{
//         setInput('')
//     }

//     return(
//         <div>
//         <div className='flex justify-center m-4 text-xs '>
//             <div >
//             <input className='border-2 p-1 ml-2' type='text' 
//             value={input} onChange={e=>{onChangeInput(e.target.value)}}
//             />
//             {suggestions && suggestions.map((suggestion, i) =>
//                 <div key={i} className='border-2 ml-3 z-50 hover:bg-gray-300'
//                 onClick={()=>{optionsHandler(suggestion.name)}} >
//                 {suggestion.name}
//                 </div>
//                 )}
//             </div>
//             <div>
//             <button className='border-2 border-grey-600 p-1 ml-2 dark:text-white' onClick={()=>getCityData()}>search weather</button>   
//     </div>         
//             </div>
//         </div>
      
//     )
// }

// export default SearchCity;
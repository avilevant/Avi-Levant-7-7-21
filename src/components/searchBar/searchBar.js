import React, {useState} from 'react';
import AsyncSelect  from 'react-select/async';




const SearchBar = () =>{

    const [cityName, setCityName] = useState([])
    const onChange =()=>{
        setCityName(cityName||[])
    }

    // const loadOptions=async(searchInput,callback)=>{
    //     const response = await fetch(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=H7yrC1AsYvxVboXkWg3pcGqFFGh58Uxj&q=${searchInput}`)
    //     const json=await response.json()
    //     console.log(json)
    //     callback(json.map(res=>({city:res.AdministrativeArea.LocalizedName,
    //                             country:res.Country.LocalizedName,
    //                             newLocationKey:res.Key})))
    // }

    const loadOptions=async(searchInput,callback)=>{
        const response = await fetch(`https://jsonplaceholder.typicode.com/users?name_like=${searchInput}`)
        const json=await response.json()
        console.log(json)
        callback(json.map(res=>({label:res.name,value:res.name})))
    }

    const Styles = {
        // borderRadius: 10,
        // content: '" "',
        // display: 'block',
        // marginRight: 8,
        height: 5,
        width: 10,
      };

    return(
        <AsyncSelect 
            value={cityName}
            onChange={onChange}
            loadOptions={loadOptions}
            styles={Styles}

        />
    )
}

export default SearchBar;
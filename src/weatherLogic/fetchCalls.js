import React from 'react';

const IS_MOCKED_DATA = false;

// export const SearchCities = async (searchInput,callback) => {
//     if (IS_MOCKED_DATA) {
//       return [{ name: 'tel aviv'}, { name: 'tel aviv'}, { name: 'tel aviv'}];
//     }else{

//         return {const response = await fetch(`https://jsonplaceholder.typicode.com/users?name_like=${searchInput}`)
        
//         const cities=await response.json()
//         console.log(cities)
//         callback(cities.map(res=>({label:res.name,value:res.name})))}
//     }
  
//   };
  
  export const getDailyWeather = async() => {
    if (IS_MOCKED_DATA) {
      return [{ name: 'tel aviv'}, { name: 'tel aviv'}, { name: 'tel aviv'}];
    }
  
    return fetch('...api')
  };
  
  export const getWeeklyWeather = async() => {
    if (IS_MOCKED_DATA) {
      return [{ name: 'tel aviv'}, { name: 'tel aviv'}, { name: 'tel aviv'}];
    }
  
    return fetch('...api')
  };

  export const getCitiesByString= async(searchInput) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users?name_like=${searchInput}`)
    if(!response.ok){
        throw new Error("can't get city names")
    }
    const cities=await response.json()

    return cities.map(res=>({label:res.name,value:res.name}))
  }
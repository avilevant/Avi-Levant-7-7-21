import { createSlice } from '@reduxjs/toolkit';

const CityInfoSlice=createSlice({
    name:'cityData',
    initialState:{
        cityName:'Tel Aviv',
        locationKey:'215854'
      
    },
    reducers:{
        setCityInfo(state,action){
            state.cityName = action.payload.cityName;
            state.locationKey = action.payload.locationKey;
        }
    }
  
})

export const CityInfoActions = CityInfoSlice.actions;
export default CityInfoSlice;
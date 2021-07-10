import React from 'react';
import { createSlice, configureStore } from '@reduxjs/toolkit';
import CityInfoSlice from './city-slice';


const darkModeSlice = createSlice({
    name:'darkMode',
    initialState:{dark:false},
    reducers:{
        toggle(state){
            state.dark = !state.dark;
            // console.log(state.dark)
        }
    }
})

// const favoritesControlSlice = createSlice({
//     name:"favoritesCo",
//     initialState:{
//         icon:"",
//         addOption:false,
//         addText:'Add To Favorites'
//     }, 
//     reducers:{
//         setIcon(state){

//         }
//     }
// })

const tempToggleSlice = createSlice({
    name:'tempToggle',
    initialState:{celsius:true},
    reducers:{
        tempToggle(state){
            state.celsius=!state.celsius
            console.log(state.celsius)
        }
    }
})


const store = configureStore({
    reducer:{darkMode:darkModeSlice.reducer, tempToggle:tempToggleSlice.reducer, CityInfo: CityInfoSlice.reducer}
});

export const darkModeActions = darkModeSlice.actions;
export const tempToggleActions = tempToggleSlice.actions;
export default store;
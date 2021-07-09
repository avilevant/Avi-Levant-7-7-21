import React from 'react';
import NavigationButtons from './navigationButton';
import ToggleButton from 'react-toggle-button';
import { darkModeActions } from '../../store/index2';
import { useDispatch,useSelector } from 'react-redux';

const NavigationBar = () =>{

    const value=useSelector(state=> state.darkMode.dark)
    const dispatch = useDispatch()
    const dispatchToggleDark = () =>{
        dispatch(darkModeActions.toggle())
    }



    return(
    <div class="flex items-center justify-between flex-wrap bg- p-2 border-2 border-purple-600 bg-blue-500">
    <h1 class='text-sm'>WeatherApp</h1>
    <ToggleButton  value={value} onToggle={()=>dispatchToggleDark()}/>
    <NavigationButtons />
    </div>
    )
}

export default NavigationBar;
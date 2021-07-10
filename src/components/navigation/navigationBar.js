import React from 'react';
import NavigationButtons from './navigationButton';
import ToggleButton from 'react-toggle-button';
import { darkModeActions } from '../../store/index2';
import { useDispatch,useSelector } from 'react-redux';
import { FiSun } from "react-icons/fi";
import { FiMoon } from "react-icons/fi";


const NavigationBar = () =>{

    const value=useSelector(state=> state.darkMode.dark)
    const dispatch = useDispatch()
    const dispatchToggleDark = () =>{
        dispatch(darkModeActions.toggle())
    }



    return(
    <div className="flex items-center justify-between flex-wrap bg- p-2 border-2 border-purple-600 bg-blue-500 dark:bg-gray-700">
    <div className='flex'>
    <div className='p-2'><FiSun/></div>
    <ToggleButton  value={value} onToggle={()=>dispatchToggleDark()}
    inactiveLabel={"Dark"}
    activeLabel={"Light"}/>
    <div className='p-2'><FiMoon/></div>
    </div>
    <h1 className='text-lg dark:text-white'>Amazing Weather App</h1>
    <NavigationButtons />
    </div>
    )
}

export default NavigationBar;
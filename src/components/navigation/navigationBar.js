import React from 'react';
import NavigationButtons from './navigationButton';

const NavigationBar = () =>{

    return(
    <div class="flex items-center justify-between flex-wrap bg- p-4 border-2 border-purple-600 bg-blue-500">
    <h1 class=''>WeatherApp</h1>
    <NavigationButtons />
    </div>
    )
}

export default NavigationBar;
import React from 'react';
import { useHistory } from 'react-router-dom';

const NavigationButtons = ()=>{

    const history = useHistory();

    return(
        <div class="flex space-x-4">
        
        <button onClick={()=>history.push('/')} class="px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-red hover:border-white">discover Weather</button>
        <button onClick={()=>history.push('/FavoritesPage')} class="px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-red hover:border-white">favorites</button>
        </div>

    )
}

export default NavigationButtons;
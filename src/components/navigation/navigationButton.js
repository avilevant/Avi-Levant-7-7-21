import React from 'react';
import { useHistory } from 'react-router-dom';

const NavigationButtons = ()=>{

    const history = useHistory();

    return(
        <div className="flex space-x-4">
        
        <button onClick={()=>history.push('/')} className="px-2 py-1 border rounded text-teal-200 border-teal-400 hover:text-red hover:border-white text-xs dark:text-gray-50">discover Weather</button>
        <button onClick={()=>history.push('/FavoritesPage')} className="px-2 py-1 border rounded text-teal-200 border-teal-400 hover:text-red hover:border-white text-xs dark:text-gray-50">favorites</button>
        </div>

    )
}

export default NavigationButtons;
import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import WeatherCardFavorites from '../components/weatheCardFavorites/weatheCardFavorites';
import { FallBackView, myErrorHandler } from '../errorHandle/errorHandle';


const FavoritesPage =()=>{
    return(
        <ErrorBoundary FallbackComponent={FallBackView} onError={myErrorHandler} >
        <div className='mt-10 dark:bg-gray-600'>
        <WeatherCardFavorites/>
        </div>
        </ErrorBoundary>
        
    )
}

export default FavoritesPage;
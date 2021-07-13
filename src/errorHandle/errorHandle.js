import React from 'react';

export const FallBackView = ({error}) =>{

    return(
        <div className='text-center mt-10'>
        <h1 className='text-lg m-2'>OOOOPS....Sorry</h1>
        <h1 className='text-sm m-2'>something went wrong</h1>
        <pre className='text-xs m-2'>{error.message}</pre>
        </div>
    )
}

export const myErrorHandler = (error,errorInfo) => {
    console.log('logging error: ', error, errorInfo )
  }

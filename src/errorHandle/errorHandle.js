import React from 'react';

export const FallBackView = ({error}) =>{

    return(
        <div className='text-center'>
        <h1>OOOOPS....Sorry</h1>
        <h1>something went wrong</h1>
        <h1>Sorry</h1>
        <pre>{error.message}</pre>
        </div>
    )
}

export const myErrorHandler = (error,errorInfo) => {
    console.log('logging error: ', error, errorInfo )
  }

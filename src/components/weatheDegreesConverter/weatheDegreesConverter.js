import React from 'react';

export const FarToCel=(fahrenheit)=>{
    let fTemp = fahrenheit.fahrenheit
    // console.log('value: ',fahrenheit)
    // console.log('value2: ',fTemp)
    let FarToCel = (fTemp - 32) * 5 / 9
    // console.log(FarToCel)
    return parseInt(FarToCel)
}

export const CelToFar=(celsius)=>{
    let cTemp = celsius.celsius
    console.log(cTemp)
    let CelToFar = (cTemp * 9 / 5) + 32
    console.log("degreeCheck:",CelToFar)
    return CelToFar
}
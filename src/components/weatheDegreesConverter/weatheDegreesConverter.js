export const FarToCel=(fahrenheit)=>{
    let fTemp = fahrenheit.fahrenheit
    let FarToCel = ((fTemp - 32) * 5 / 9)
    return parseInt(FarToCel)
}

export const CelToFar=(celsius)=>{
    let cTemp = celsius.celsius
    let CelToFar = (cTemp * 9 )/5 + 32
    return CelToFar
}
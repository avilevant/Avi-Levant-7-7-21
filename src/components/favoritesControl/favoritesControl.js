import React,{useState,useEffect} from "react";
import { FcLike } from "react-icons/fc";
import { IoIosHeartEmpty } from "react-icons/io";


const FavoritesControl =(Location)=>{
 
    const [addToFavoritesOption, setAddToFavoritesOption]= useState(true);

    const ChangButtonState = ()=>{
        setAddToFavoritesOption(!addToFavoritesOption)
    }

    const readLocalStorage =()=>{
        let favoritesArray=JSON.parse(localStorage.getItem('favorites')) || [] 
        return(favoritesArray) }

    const setLocalStorage =(favoritesArray)=>{
        localStorage.setItem("favorites",JSON.stringify(favoritesArray)) 
        return(favoritesArray) }    
    

    const updateFavorites=(Location)=>{ 
        
          if(addToFavoritesOption===true){
            ChangButtonState()
            let array = readLocalStorage()
                if(!array.find((e)=>e.locationKey===Location.locationKey)){
                    array.push(Location)
                    setLocalStorage(array)
                }
          }else{
            let array = readLocalStorage().filter(e=>e.locationKey!==Location.locationKey)
            setLocalStorage(array)
            ChangButtonState()  
          }  
    }

 
    //check if entered city already in favorites
    useEffect(()=>{
        let array= readLocalStorage()
        if (addToFavoritesOption === (!!array.find((e)=>e.locationKey===Location.locationKey)))
            ChangButtonState()   
    },[Location])
    
    return(
        <div className='flex'>
        <div className='flex items-center p-1'>
        {addToFavoritesOption ? <IoIosHeartEmpty/> : <FcLike/>}
        </div>
        <button className='border-2 border-grey-600 p-1 text-xs dark:text-white' 
        onClick={()=>updateFavorites(Location)}>
        {addToFavoritesOption ? 'Add To Favorites' : 'Remove Favorite' }</button>
        </div>
    )



}

export default FavoritesControl;


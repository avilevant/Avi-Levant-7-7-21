import React,{useState,useEffect} from "react";
import { FcLike } from "react-icons/fc";
import { IoIosHeartEmpty } from "react-icons/io";


const FavoritesControl =({location})=>{


    // const [addToFavorites, setAddToFavorites]= useState([]); use instead of facvoritesArray???
    const [addToFavoritesOption, setAddToFavoritesOption]= useState(true);
    const [addToFavoritesText, setAddToFavoritesText]= useState('Add To Favorites');
    const [likeIcon, setLikeIcon] = useState(<IoIosHeartEmpty/>)

    let favoritesArray=[]// insert info from local storage

    const ButtonState = ()=>{
        setAddToFavoritesText('Remove From Favorites');
        //change to full icon
        setAddToFavoritesOption(false)
    }

    const updateFavorites=()=>{
          if(addToFavoritesOption===true){
            ButtonState()
            favoritesArray.push({location})
            console.log(favoritesArray)
            localStorage.setItem("favorites",JSON.stringify(favoritesArray))//add to local storage
          }else if(addToFavoritesOption===false){
            setAddToFavoritesText('Add To Favorites');
            //change to full icon
            favoritesArray = favoritesArray.filter((e)=>e!=={location})
            console.log(favoritesArray)
            localStorage.setItem("favorites",JSON.stringify(favoritesArray))//add to local storage
            setAddToFavoritesOption(true)  
          }  
    }

    //using use effect hook first state check
    useEffect(()=>{if(favoritesArray.includes({location})){
        ButtonState()   
    }},)
    



   

    return(
        <div className='flex'>
        
        {likeIcon}
        <button className='border-2 border-grey-600 p-2' onClick={()=>updateFavorites()}>{addToFavoritesText}</button>
        </div>
    )



}

export default FavoritesControl;


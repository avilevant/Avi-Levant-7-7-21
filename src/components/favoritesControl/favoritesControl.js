import React,{useState,useEffect} from "react";
import { FcLike } from "react-icons/fc";
import { IoIosHeartEmpty } from "react-icons/io";


const FavoritesControl =(location,cityName)=>{


    // const [addToFavorites, setAddToFavorites]= useState([]); use instead of facvoritesArray???
    const [addToFavoritesOption, setAddToFavoritesOption]= useState(true);
    const [addToFavoritesText, setAddToFavoritesText]= useState('Add To Favorites');
    const [likeIcon, setLikeIcon] = useState(<IoIosHeartEmpty/>)

    // insert info from local storage
    let favoritesArray=[]

    const ChangButtonState = ()=>{
        setAddToFavoritesText('Remove Favorite');
        setLikeIcon(<FcLike/>)
        setAddToFavoritesOption(false)
    }


    const updateFavorites=()=>{   
        if(favoritesArray.includes(location.locationKey)){
            setAddToFavoritesOption(false)
        }else{
            setAddToFavoritesOption(true)
        }


          if(addToFavoritesOption===true){
            ChangButtonState()
            favoritesArray.push(location)
            console.log(favoritesArray)
            localStorage.setItem("favorites",JSON.stringify(favoritesArray))//add to local storage
            console.log(localStorage)
            

          }else if(addToFavoritesOption===false){
            setAddToFavoritesText('Add To Favorites');
            setLikeIcon(<IoIosHeartEmpty/>)
            favoritesArray = favoritesArray.filter((e)=>e!==location.locationKey)
            console.log(favoritesArray)
            localStorage.setItem("favorites",JSON.stringify(favoritesArray))//add to local storage
            setAddToFavoritesOption(true)  
            console.log(localStorage)
          }  
    }

   

    //check if entered city already in favorites
    useEffect(()=>{
        favoritesArray=JSON.parse(localStorage.getItem('favorites')) || []
        console.log('favor: ', favoritesArray)
        console.log('favorLOcation: ', favoritesArray.location)
        if(favoritesArray.includes(location.locationKey)){
            ChangButtonState()   
    }

},[location])
    



   

    return(
        <div className='flex'>
        <div className='flex items-center p-1'>
        {likeIcon}
        </div>
        <button className='border-2 border-grey-600 p-1 text-xs' onClick={()=>updateFavorites()}>{addToFavoritesText}</button>
        </div>
    )



}

export default FavoritesControl;


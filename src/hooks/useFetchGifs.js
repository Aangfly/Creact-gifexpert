import { useEffect, useState } from "react";
import { getGif } from "../helpers/getGifs";


export const useFetchGifs= (category) =>{


    const [Images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async()=>{
        const NewImage = await getGif(category);
        setImages(NewImage);
        setIsLoading(false)
    }

    useEffect(()=>{
        getImages();
    }, [])


    return{
        Images,
        isLoading
    }
}

import { useState, useEffect } from "react"
import {getGifs} from '../helpers/getGifs'

export const useGetGifs = (category) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    
    useEffect(() => {
        getGifs(category)
            .then(imgs => {
                setTimeout(() => {
                    setState({
                        data: imgs,
                        loading:false
                    })
                }, 3000)
            });
            // .then(setImages) //esto es exactamente lo mismo que lo de arriba
    }, [category])


    return state;
}
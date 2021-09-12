import React from "react";
import { useGetGifs } from "../hooks/useGetGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({category}) => {

    const {data:images, loading} = useGetGifs(category)
    return(
        
        <>
            <h3 className="animate__animated animate__tada"> {category} </h3>

            {loading && <p className="animate__animated animate__flash">Cargando...</p>}
            <div className="card-grid">
                

                {
                    images.map(img => (
                        < GifGridItem 
                            key={img.id}
                            {...img}
                        />
                    ))
                }
            </div>
        </>
    )
}
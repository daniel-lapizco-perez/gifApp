import React, {useState} from "react";
import { AddCategory } from "./componentes/AddCategory";
import { GifGrid } from "./componentes/GifGrid";

const GifApp = () => {

    const [categories, setCategories] = useState(['High School dxd']);

    return (
       <>
        <h2>GifExpertApp</h2> 
        <AddCategory setCategories = {setCategories}/>
        <hr></hr>


        <ol>
            {
                categories.map(category =>( 
                    <GifGrid 
                        key = {category}
                        category = {category}
                    />
                ))
            }
        </ol>

       </>
    )
}

export default GifApp;
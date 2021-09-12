import React, { useState } from "react";
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState(''); // se debe de dejar como string vacio, ya que si no se pone nada, en consola arroja error

    const handleInputValue = (e) => {
        setInputValue(e.target.value);
        console.log(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(inputValue.trim().length > 2){
            setCategories(categories => [inputValue, ...categories]);
            setInputValue('')
        }
    }

    return(
        <form onSubmit={handleSubmit}>
            <input 
                type = "text"
                value= {inputValue}
                onChange = {handleInputValue}
            />
        </form>
    )

}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
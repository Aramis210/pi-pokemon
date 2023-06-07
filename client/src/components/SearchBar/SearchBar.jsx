import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getPokemonName } from "../../redux/actions";

export default function SearchBar (){
    const dispatch = useDispatch()
    const [name, setName] = useState("")

    function handleInputChange(event){
        event.preventDefault()
        setName(event.target.value)
    }

    function handleSubmit(event){
        event.preventDefault()
        dispatch(getPokemonName(name))
    }

    return (
        <div>
            <input type="text" placeholder="Search pokemon..." onChange = {(event) => handleInputChange(event)}/>
            <button type="submit" onClick={(event) => handleSubmit(event)}>Search</button>
        </div>
    )
}
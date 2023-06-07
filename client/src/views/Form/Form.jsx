import { useState } from "react";
import axios from "axios"

const Form = () => {
    const [form, setForm] = useState({
        name:"",
        hp: "",
        attack: "",
        defense: "",
        speed: "",
        height: "",
        weight: "",
        image: "",
        type: []
    })

    const [errors, setErrors] = useState({
        name:"",
        hp: "",
        attack: "",
        defense: "",
        speed: "",
        height: "",
        weight: "",
        image: "",
        type: []
    })

    const changeHandler = (event) => {
        const property = event.target.name;
        const value = event.target.value;

        setForm({...form, [property]:value})

        validate({...form, [property]: value})
    }

    const validate = (form) => {
        if (form.name.length > 4) {
            setErrors({...errors, name:"Nombre correcto"})
        } else {
            setErrors({...errors, name:"El nombre es muy corto"})
        }
        if (form.name === "") setErrors({...errors, name: "Ingrese un nombre"})
    }

    const submitHandler = (event) => {
        event.preventDefault()
        axios.post("http://localhost:3001/pokemons/", form)
        .then(res=>alert(res))
        .catch(err=>alert(err))
    }


    return (
        <form style={{color: "white"}} onSubmit={submitHandler}>
            <h1>CREATE POKEMON</h1>
            <h2>
                <label>Name: </label>
                <input type="text" value={form.name} onChange={changeHandler} name="name" />
                {errors.name && <span> {errors.name}</span>}
            </h2>
            <h2>
                <label>HP: </label>
                <input type="number" value={form.hp} onChange={changeHandler} name="hp" />
            </h2>
            <h2>
                <label>Attack: </label>
                <input type="number" value={form.attack} onChange={changeHandler} name="attack" />
            </h2>
            <h2>
                <label>Defense: </label>
                <input type="number" value={form.defense} onChange={changeHandler} name="defense" />
            </h2>
            <h2>
                <label>Speed: </label>
                <input type="number" value={form.speed} onChange={changeHandler} name="speed" />
            </h2>
            <h2>
                <label>Height: </label>
                <input type="number" value={form.height} onChange={changeHandler} name="height" />
            </h2>
            <h2>
                <label>Weight: </label>
                <input type="number" value={form.weight} onChange={changeHandler} name="weight" />
            </h2>
            <h2>
                <label>Image URL: </label>
                <input type="text" value={form.image} onChange={changeHandler} name="image" />
            </h2>
            {/* <h2>
                <select>
                    <option value={type.id}>{type.name}</option>
                </select>
            </h2> */}
            <button type="submit">SUBMIT</button>
        </form>
    )
}

// https://dragonza.io/static/7ce6412c493fa05200bc9ea168a1719b/46604/logo-dragon.png

export default Form;
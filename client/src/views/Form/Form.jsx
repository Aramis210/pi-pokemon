import { useState } from "react";

const Form = () => {
    const [form, setForm] = useState({
        name:"",
        hp: "",
        attack: "",
        defense: "",
        speed: "",
        height: "",
        weight: "",
        image: ""
    })

    const [errors, setErrors] = useState({
        name:"",
        hp: "",
        attack: "",
        defense: "",
        speed: "",
        height: "",
        weight: "",
        image: ""
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
        // axios.post("http://localhost:3001/pokemons/", form)
        // .then(res=>alert(res))
        // .catch(err=>alert(err))
    }


    return (
        <form onSubmit={submitHandler}>
            <div>
                <label>Name: </label>
                <input type="text" value={form.name} onChange={changeHandler} name="name" />
                {errors.name && <span> {errors.name}</span>}
            </div>
            <div>
                <label>HP: </label>
                <input type="number" value={form.hp} onChange={changeHandler} name="hp" />
            </div>
            <div>
                <label>Attack: </label>
                <input type="number" value={form.attack} onChange={changeHandler} name="attack" />
            </div>
            <div>
                <label>Defense: </label>
                <input type="number" value={form.defense} onChange={changeHandler} name="defense" />
            </div>
            <div>
                <label>Speed: </label>
                <input type="number" value={form.speed} onChange={changeHandler} name="speed" />
            </div>
            <div>
                <label>Height: </label>
                <input type="number" value={form.height} onChange={changeHandler} name="height" />
            </div>
            <div>
                <label>Weight: </label>
                <input type="number" value={form.weight} onChange={changeHandler} name="weight" />
            </div>
            <div>
                <label>Image URL: </label>
                <input type="text" value={form.image} onChange={changeHandler} name="image" />
            </div>
            <button type="submit">SUBMIT</button>
        </form>
    )
}

// https://dragonza.io/static/7ce6412c493fa05200bc9ea168a1719b/46604/logo-dragon.png

export default Form;
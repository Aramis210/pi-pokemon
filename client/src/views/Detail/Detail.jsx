import style from './Detail.module.css'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'


const Detail = () => {
    const {id} = useParams()
    const pokemons = useSelector( state => state.pokemons)    
    const pokemonDet = []

    for (let i = 0; i < pokemons.length; i++) {
        if (pokemons[i].id === parseInt(id)) pokemonDet.push(pokemons[i])
    }    
    console.log(pokemonDet)

    return (
        <div className={style.detail} style={{color: "blue"}}>
            <h1>POKEMON'S DETAILS</h1>        
            {console.log(pokemonDet[0].image)}   
            <img src={pokemonDet[0].image} alt={pokemonDet[0].name} />
            <h2>ID: {pokemonDet[0].id}</h2>
            <h2>NAME: {pokemonDet[0].name.toUpperCase()}</h2>
            <h2>HP: {pokemonDet[0].hp}</h2>
            <h2>ATTACK: {pokemonDet[0].attack}</h2>
            <h2>DEFENSE: {pokemonDet[0].defense}</h2>
            <h2>SPEED: {pokemonDet[0].speed}</h2>
            <h2>HEIGHT: {pokemonDet[0].height}</h2>
            <h2>WEIGHT: {pokemonDet[0].weight}</h2>
            <h2>TYPES: {pokemonDet[0].type[0].toUpperCase()} {pokemonDet[0].type[1] && `AND ${pokemonDet[0].type[1].toUpperCase()}`}</h2>           
        </div>
    )
}

export default Detail;
// import CardsContainer from "../../components/CardsContainer/CardsContainer";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons, filterPokemonsByTypes, filterCreated, orderByName } from "../../redux/actions"
import style from "./Home.module.css"
import Paginado from "../../components/Paginado/Paginado"
import SearchBar from "../../components/SearchBar/SearchBar";
import Card from "../../components/Card/Card"

const Home = () => {
    const dispatch = useDispatch();
    const pokemons = useSelector(state => state.pokemons)
    const [currentPage, setCurrentPage] = useState(1)
    const [orden, setOrden] = useState("")
    const [characterPerPage, setCharactersPerPage] = useState(12)
    const indexOfLastCharacter = currentPage * characterPerPage
    const indexOfFirstCharacter = indexOfLastCharacter - characterPerPage
    const currentCharacters = pokemons.slice(indexOfFirstCharacter, indexOfLastCharacter)

    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    useEffect(() => {
        dispatch(getPokemons());
    }, [dispatch])

    function handlerFilterTypes(event){
        dispatch(filterPokemonsByTypes(event.target.value))
    }

    function handlerFilterCreated(event){
        dispatch(filterCreated(event.target.value))
    }

    function handlerSort (event) {
        event.preventDefault();
        dispatch(orderByName(event.target.value))
        setCurrentPage(1)
        setOrden(`Ordenado ${event.target.value}`)
    }

    return (
        <>
            <h1 className={style.title}>WELCOME TO POKEDEX VIRTUAL</h1>
            <div>
                <select onChange= {event => handlerFilterTypes(event)}>
                    <option value="allTypes">All types</option>
                    <option value="normal">Normal</option>
                    <option value="fighting">Fighting</option>
                    <option value="flying">Flying</option>
                    <option value="ground">Ground</option>
                    <option value="poison">Poison</option>
                    <option value="steel">Steel</option>
                    <option value="rock">Rock</option>
                    <option value="fire">Fire</option>
                    <option value="bug">Bug</option>
                    <option value="water">Water</option>
                    <option value="grass">Grass</option>
                    <option value="electric">Electric</option>
                    <option value="psychic">Psychic</option>
                    <option value="ice">Ice</option>
                    <option value="dragon">Dragon</option>
                    <option value="dark">Dark</option>
                    <option value="fairy">Fairy</option>
                    <option value="unknown">Unknown</option>
                    <option value="shadow">Shadow</option>
                </select>
                <select onChange= {event => handlerFilterCreated(event)}>
                    <option value="all">All</option>
                    <option value="created">Created</option>
                    <option value="not created">Not created</option>
                </select>
            </div>
            <div>
                <select onChange= {event => handlerSort(event)}>
                    <option value="asc">Upward A-Z</option>
                    <option value="des">Falling Z-A</option>
                </select>
                <select>
                    <option value="attackAsc">Upward Attack</option>
                    <option value="attackDes">Falling Attack</option>
                </select>
                <p></p>
                <Paginado
                    charactersPerPage={characterPerPage}
                    pokemons={pokemons.length}
                    paginado={paginado}
                />
                <SearchBar/>

            </div>
            <p></p>
            {/* <CardsContainer currentCharacters={currentCharacters}></CardsContainer> */}
            <div className={style.container}>
                {currentCharacters?.map((pokemon) => {
                    return (
                        <Card
                            key={pokemon.id}
                            id={pokemon.id}
                            name={pokemon.name.toUpperCase()}
                            image={pokemon.image}
                            hp={pokemon.hp}
                            attack={pokemon.attack}
                            defense={pokemon.defense}
                            type={pokemon.type && pokemon.type}
                        />
                    )
                })}
            </div>
        </>
    )
}

export default Home;
// import CardsContainer from "../../components/CardsContainer/CardsContainer";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "../../redux/actions"
import style from "./Home.module.css"
import Paginado from "../../components/Paginado/Paginado"
import Card from "../../components/Card/Card"

const Home = () => {
    const dispatch = useDispatch();
    const pokemons = useSelector(state => state.pokemons)
    const [currentPage, setCurrentPage] = useState(1)
    const [characterPerPage, setCharactersPerPage] = useState(12)
    const indexOfLastCharacter = currentPage * characterPerPage
    const indexOfFirstCharacter = indexOfLastCharacter - characterPerPage
    const currentCharacters = pokemons.slice(indexOfFirstCharacter, indexOfLastCharacter)

    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    useEffect(() => {
        dispatch(getPokemons());
    }, [dispatch, setCharactersPerPage, currentCharacters])

    return (
        <>
            <h1 className={style.title}>WELCOME TO POKEDEX VIRTUAL</h1>
            <div>
                <select>
                    <option value="types">Types</option>
                </select>
                <select>
                    <option value="all">All</option>
                    <option value="created">Created</option>
                    <option value="api">Not created</option>
                </select>
            </div>
            <div>
                <select>
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
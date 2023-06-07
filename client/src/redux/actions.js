import axios from "axios";

export const GET_POKEMONS = "GET_POKEMONS";
export const GET_POKEMON_NAME= "GET_POKEMON_NAME";
export const FILTER_BY_TYPES = "FILTER_BY_TYPES";
export const FILTER_CREATED = "FILTER_CREATED";
export const ORDER_BY_NAME = "ORDER_BY_NAME";

export const getPokemons = () => {
    return async function(dispatch){
        const apiData = await axios.get(`http://localhost:3001/pokemons`);
        const pokemons = apiData.data;
        dispatch({type: GET_POKEMONS, payload: pokemons});
    };
};

export const getPokemonName = (name) => {
    return async function (dispatch){
        const apiData = await axios.get(`http://localhost:3001/pokemons?name=${name}`);
        const pokemon = apiData.data;
        dispatch({type: "GET_POKEMON_NAME", payload: pokemon});
    };
};

export const filterPokemonsByTypes = (payload) => {
    console.log(payload)
    return {
        type: "FILTER_BY_TYPES",
        payload
    }
}

export const filterCreated = (payload) => {
    return {
        type: "FILTER_CREATED",
        payload
    }
}

export const orderByName = (payload) => {
    return {
        type: "ORDER_BY_NAME",
        payload
    }
}
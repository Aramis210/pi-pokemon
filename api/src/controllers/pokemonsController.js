const { Pokemons } = require("../db");
const axios = require("axios");

const getPokemonById = async (id, source) => {
    const pokemon =
        source === "api"
            ? (await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)).data
            : await Pokemons.findByPk(id);

    return pokemon
}

const searchPokemonByName = (name) => {
    // https://pokeapi.co/api/v2/pokemon/{name}
}

const getAllPokemons = async () => {
    const databasePokemons = await Pokemons.findAll()

    const apiUsers = (await axios.get(`https://pokeapi.co/api/v2/pokemon/`)).data

    return [...databasePokemons, ...apiUsers]

}


const createPokemon = async (name, image, hp, attack, defense, speed, height, weight) =>
    await Pokemons.create({ name, image, hp, attack, defense, speed, height, weight })

module.exports = { createPokemon, getPokemonById, getAllPokemons, searchPokemonByName };
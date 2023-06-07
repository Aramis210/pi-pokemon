const { Pokemons } = require("../db");
const axios = require("axios");

const getPokemonById = async (id, source) => {
    const pokemon =
        source === "api"
            ? (await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)).data
            : await Pokemons.findByPk(id);
    return {
            id: pokemon.id,
            name: pokemon.name,
            image: pokemon.sprites.other.dream_world.front_default,
            hp: pokemon.stats[0].base_stat,
            attack: pokemon.stats[1].base_stat,
            defense: pokemon.stats[2].base_stat,
            speed: pokemon.stats[5].base_stat,
            height: pokemon.height,
            weight: pokemon.weight,
            type: pokemon.types.map((type) => type.type.name),
            createdInDb: "false"
        }
}

const searchPokemonByName = async (name) => {
    const databasePokemons = await Pokemons.findAll({ where: { name: name } })

    const apiPokemonsRaw = (await axios.get(`https://pokeapi.co/api/v2/pokemon/`)).data.results

    const filteredApi = apiPokemonsRaw.filter((pokemon) => pokemon.name === name)

    const urlPorPoke = filteredApi.map(poke => poke.url.split("/"))

    const apiPokemons = []

    for (let i = 0; i < urlPorPoke.length; i++) {
        apiPokemons.push(await getPokemonById(urlPorPoke[i][6], "api"))
    } 

    return [...databasePokemons, ...apiPokemons]

}

const getAllPokemons = async () => {
    const databasePokemons = await Pokemons.findAll()

    const apiPokemonsRaw = (await axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=200`)).data.results

    const urlPorPoke = apiPokemonsRaw.map(poke => poke.url.split("/"))

    const apiPokemons = []

    for (let i = 0; i < urlPorPoke.length; i++) {
        apiPokemons.push(await getPokemonById(urlPorPoke[i][6], "api"))
    } 

    return [...databasePokemons, ...apiPokemons]
}


const createPokemon = async (name, image, hp, attack, defense, speed, height, weight) =>
    await Pokemons.create({ name, image, hp, attack, defense, speed, height, weight })


module.exports = { createPokemon, getPokemonById, getAllPokemons, searchPokemonByName };
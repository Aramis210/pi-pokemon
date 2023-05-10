const { Pokemons } = require("../db")

const createPokemon = async ( name, image, hp, attack, defense, speed, height, weight) =>
    await Pokemons.create({ name, image, hp, attack, defense, speed, height, weight})

module.exports = { createPokemon };
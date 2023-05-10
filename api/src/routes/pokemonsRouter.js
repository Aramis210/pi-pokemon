const { Router } = require("express");

const { getPokemonsHandler, getPokemonHandlerId, getPokemonHandlerName, createPokemonHandler } = require("../handlers/pokemonsHandlers")

const pokemonsRouter = Router();

pokemonsRouter.get("/", getPokemonsHandler)

pokemonsRouter.get("/:idPokemon", getPokemonHandlerId)

pokemonsRouter.get("/name?=", getPokemonHandlerName)

pokemonsRouter.post("/", createPokemonHandler)

module.exports = pokemonsRouter;
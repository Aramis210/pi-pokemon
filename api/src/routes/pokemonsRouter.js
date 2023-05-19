const { Router } = require("express");

const { getPokemonsHandler, getPokemonHandlerId, createPokemonHandler } = require("../handlers/pokemonsHandlers")

const pokemonsRouter = Router();

pokemonsRouter.get("/", getPokemonsHandler)

pokemonsRouter.get("/:id", getPokemonHandlerId)

pokemonsRouter.post("/", createPokemonHandler)

module.exports = pokemonsRouter;
const { createPokemon, getPokemonById, getAllPokemons, searchPokemonByName } = require("../controllers/pokemonsController")

const getPokemonsHandler = (req, res) => {
    const { name } = req.query;

    const results = name ? searchPokemonByName(name) : getAllPokemons()

    if (name) res.send(`Quiero buscar todos los pokemon que se llamen ${name}`)
    else res.send("Envio todos los pokemons")
}

const getPokemonHandlerId = async (req, res) => {
    const { id } = req.params;
    const source = isNaN(id) ? "bdd" : "api";
    try {
        const pokemon = await getPokemonById(id, source)
        res.status(200).json(pokemon)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const createPokemonHandler = async (req, res) => {
    try {
        const { name, image, hp, attack, defense, speed, height, weight } = req.body;
        const newPokemon = await createPokemon(name, image, hp, attack, defense, speed, height, weight);
        res.status(201).json(newPokemon);
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = {
    getPokemonsHandler,
    getPokemonHandlerId,
    createPokemonHandler,
}

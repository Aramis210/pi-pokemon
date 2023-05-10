const { createPokemon } = require("../controllers/pokemonsController")

const getPokemonsHandler = (req, res) => {
    res.send("Obtiene un arreglo de objetos, donde cada objeto es un pokemon con su información")
}

const getPokemonHandlerId = (req, res) => {
    res.send("Obtiene el detalle de un pokemon específico")
}

const getPokemonHandlerName = (req, res) => {
    res.send("Obtiene todos aquellos pokemons que coinciden con el nombre recibido por query")
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
    getPokemonHandlerName,
    createPokemonHandler,
}

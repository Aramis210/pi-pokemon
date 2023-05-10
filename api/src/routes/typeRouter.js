const { Router } = require("express");

const typeRouter = Router();

typeRouter.get("/", (req, res) => {
    res.send("Obtiene un arreglo con todos los tipos de pokemon")
})

module.exports = typeRouter;
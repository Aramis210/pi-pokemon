const { Router } = require("express");

const { getTypesHandler } = require("../handlers/typeHandlers")

const typeRouter = Router();

typeRouter.get("/", getTypesHandler)

module.exports = typeRouter;
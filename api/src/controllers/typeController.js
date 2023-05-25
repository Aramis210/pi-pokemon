const { Type } = require("../db");
const axios = require("axios")

const getAllTypes = async () => {
    const typesInfo = (await axios.get("https://pokeapi.co/api/v2/type")).data.results    
    
    const filteredApi = typesInfo.map((type) => type.name)    

    filteredApi.forEach( async (type) => {
        await Type.findOrCreate({
          where: { name: type.toLowerCase() },
        });
      });

    const allTypesDb = await Type.findAll()

    return allTypesDb
      
    }


// const getApiData = require("../ApiData");
// const { Temperament } = require("../../db");

// const getAllTemper = async () => {
//   const allTemperDB = await Temperament.findAll();

//   if (allTemperDB.length === 0) {
//     const getDogs = await getApiData();

//     // for get an array of tempers(stirngs)
//     const getTemper = getDogs
//       .map((dog) => dog.temperament)
//       .join(", ")
//       .split(", ");

//     const getFilteredTemper = getTemper.filter((temper) => temper !== "");

//     getFilteredTemper.forEach( async (temper) => {
//       await Temperament.findOrCreate({
//         where: { name: temper.toLowerCase() },
//       });
//     });

//     const allTemper = await Temperament.findAll();
//     if (!allTemper) throw Error("Can't get temperaments form DB");

//     return allTemper;
//   } else {
//     return allTemperDB;
//   }
// };


module.exports = {
    getAllTypes,
}
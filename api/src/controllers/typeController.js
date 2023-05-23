const { Type } = require("../db");
const axios = require("axios")

const getAllTypes = async () => {
    await axios.get("https://pokeapi.co/api/v2/type").then(({data}) => {
        const typesInfo = data.results.map((type) => { 
            return { name: type.name}
        })
        if (!typesInfo.length) throw Error ("No existen types para agregar")
        return typesInfo
    })    
}

// const getApiData = async () =>
//   await axios.get(`${URL}?${API_KEY}`).then(({ data }) => {
//     const dogsInfo = data.map((dog) => {
//       return {
//         id: dog.id,
//         image: dog.image?.url,
//         name: dog.name,
//         weight: dog.weight.metric,
//         height: dog.height.metric,
//         life_span: dog.life_span,
//         belongToDb: false,
//         temperament: dog.temperament,
//       };
//     });
//     if(!dogsInfo.length) throw Error ("No se podido solicitar la información de manera corre
//     return dogsInfo


module.exports = {
    getAllTypes,
}
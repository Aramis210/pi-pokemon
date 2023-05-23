const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemons', {
    id: { // ID. *
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4
    },    
    name: { // Nombre. *
      type: DataTypes.STRING, //results.name
      allowNull: false,
    },
    image: { // Imagen. *
      type: DataTypes.STRING, //results.sprites.other.dream-world.front_default
      allowNull: false,
    },
    hp: { // Vida. *
      type: DataTypes.INTEGER,
      allowNull: false,
    }, //stats.stat.name === "hp" && stats.base_stat
    attack: { // Ataque. *
      type: DataTypes.INTEGER,
      allowNull: false,
    }, //stats.stat.name === "attack" && stats.base_stat
    defense: { // Defensa. *
      type: DataTypes.INTEGER,
      allowNull: false,
    }, //stats.stat.name === "defense" && stats.base_stat
    speed: { // Velocidad.
      type: DataTypes.INTEGER,
    }, //stats.stat.name === "speed" && stats.base_stat
    height: { // Altura.
      type: DataTypes.INTEGER, //results.height
    }, //
    weight: { // Peso.
      type: DataTypes.INTEGER, //results.weight
    },
    createdInDb: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull: false,
    }
  });
};

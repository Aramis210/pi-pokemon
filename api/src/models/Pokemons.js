const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemons', {
    id: { // ID. *
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },    
    name: { // Nombre. *
      type: DataTypes.STRING, //results.name
      allowNull: false,
    },
    image: { // Imagen. *
      type: DataTypes.BLOB,
      allowNull: false,
    },
    hp: { // Vida. *
      type: DataTypes.INTEGER,
      allowNull: false,
    }, //stats.stat.name && stats.base_stat
    attack: { // Ataque. *
      type: DataTypes.INTEGER,
      allowNull: false,
    }, //stats.stat.name && stats.base_stat
    defense: { // Defensa. *
      type: DataTypes.INTEGER,
      allowNull: false,
    }, //stats.stat.name && stats.base_stat
    speed: { // Velocidad.
      type: DataTypes.INTEGER,
    }, //stats.stat.name && stats.base_stat
    height: { // Altura.
      type: DataTypes.INTEGER,
    }, //
    weight: { // Peso.
      type: DataTypes.INTEGER,
    },
  });
};

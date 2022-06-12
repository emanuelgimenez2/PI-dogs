const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Dog', { //raza
    id: {
      type: DataTypes.INTEGER,
      defaultValue: DataTypes.UUIDV1,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      // allowNull: false,
    },
    weight: { 
      type:  DataTypes.ARRAY(DataTypes.STRING), //peso
      // defaultValue: DataTypes.INTEGER,
      // defaultValue: [0,0],
      // allowNull: false,
    },
    height: { 
      type: DataTypes.ARRAY(DataTypes.INTEGER),
      // allowNull: false
    },
    life_span: {
      type: DataTypes.STRING,
      // allowNull: true
    },
    image: {
      type: DataTypes.STRING,
      // allowNull: true
    },
    createdAtDb: {
      type: DataTypes.BOOLEAN,
      // allowNull: false,
      defaultValue: true
    }
  });

  

};

const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('dog', { //raza
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      // allowNull: false,
    },
    weight: { //peso
      type: DataTypes.ARRAY(DataTypes.INTEGER),
      // allowNull: false,
    },
    height: { //altura
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
      // defaultValue: true
    }
  });

  sequelize.define("temperament",{
    name: {
      type: DataTypes.STRING,
      allowNull: true
  }
  })

};

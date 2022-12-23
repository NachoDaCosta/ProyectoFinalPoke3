'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pokemones extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  pokemones.init({
    id : {
    type: DataTypes.INTEGER,
    autoIncrement: false,
    primaryKey: true
    },
    name: DataTypes.STRING,
    PrimaryType: DataTypes.STRING,
    SecondaryType: DataTypes.STRING,
    weight: DataTypes.REAL,
    height: DataTypes.REAL,
    moves1: DataTypes.STRING,
    moves2: DataTypes.STRING,
    description: DataTypes.STRING,
    hp: DataTypes.INTEGER,
    atk: DataTypes.INTEGER,
    def: DataTypes.INTEGER,
    satk: DataTypes.INTEGER,
    sdef: DataTypes.INTEGER,
    spd: DataTypes.INTEGER,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'pokemones',
  });
  return pokemones;
};
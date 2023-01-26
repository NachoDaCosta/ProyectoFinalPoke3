'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('pokemones', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(30)
      },
      PrimaryType: {
        allowNull: false,
        type: Sequelize.STRING
      },
      SecondaryType: {
        type: Sequelize.STRING
      },
      weight: {
        allowNull: false,
        type: Sequelize.REAL
      },
      height: {
        allowNull: false,
        type: Sequelize.REAL
      },
      moves1: {
        allowNull: false,
        type: Sequelize.STRING(50)
      },
      moves2: {
        type: Sequelize.STRING(50)
      },
      description: {
        allowNull: false,
        type: Sequelize.STRING(150)
      },
      hp: {
        allowNull: false,
        type: Sequelize.INTEGER(100)
      },
      atk: {
        allowNull: false,
        type: Sequelize.INTEGER(100)
      },
      def: {
        allowNull: false,
        type: Sequelize.INTEGER(100)
      },
      satk: {
        allowNull: false,
        type: Sequelize.INTEGER(100)
      },
      sdef: {
        allowNull: false,
        type: Sequelize.INTEGER(100)
      },
      spd: {
        allowNull: false,
        type: Sequelize.INTEGER(100)
      },
      image: {
        allowNull: false,
        type: Sequelize.STRING(10000)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('pokemons');
  }
};
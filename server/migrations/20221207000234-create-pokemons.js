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
      id: {
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
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
        type: Sequelize.STRING
      },
      moves2: {
        type: Sequelize.STRING
      },
      description: {
        allowNull: false,
        type: Sequelize.STRING
      },
      hp: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      atk: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      def: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      satk: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      sdef: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      spd: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      image: {
        allowNull: false,
        type: Sequelize.STRING
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
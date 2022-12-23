'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('pokemons', {
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
        type: Sequelize.STRING
      },
      PrimaryType: {
        type: Sequelize.STRING
      },
      SecondaryType: {
        type: Sequelize.STRING
      },
      weight: {
        type: Sequelize.REAL
      },
      height: {
        type: Sequelize.REAL
      },
      moves1: {
        type: Sequelize.STRING
      },
      moves2: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      hp: {
        type: Sequelize.INTEGER
      },
      atk: {
        type: Sequelize.INTEGER
      },
      def: {
        type: Sequelize.INTEGER
      },
      satk: {
        type: Sequelize.INTEGER
      },
      sdef: {
        type: Sequelize.INTEGER
      },
      spd: {
        type: Sequelize.INTEGER
      },
      image: {
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
'use strict';

/** @PrimaryType {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('pokemones', [
      
  {
  "name": "Aron",
  "id": "304",
  "image":"./Imagenes/aron.png",
  "PrimaryType": "Steel",
  "weight": "60.0",
  "height": "0.4",
  "moves1": "Sturdy",
  "moves2": "Rock-Head",
  "description" : "It eats iton ore - and sometimes railroad tracks - to build up the steek armor thay protects its body",
  "hp": 50,
  "atk": 70,
  "def": 100,
  "satk": 40,
  "sdef": 40,
  "spd":30,
  "SecondaryType":"rock",
  createdAt: new Date(),
      updatedAt: new Date()
},

{
  "name": "Bulbasaur",
  "id": "001",
  "image":"./Imagenes/bulbasaur.png",
  "PrimaryType": "grass",
  "weight": "6.9",
  "height": "0.7",
  "moves1": "Chriorophyll",
  "moves2": "Overgrow",
  "description" : "There is a plant seed on its bacl right from the day this Pokémon is born. The seed sloqly grows larger",
  "hp": 45,
  "atk": 49,
  "def": 49,
  "satk": 65,
  "sdef": 65,
  "spd": 45 ,
  "SecondaryType":"Poison",
  createdAt: new Date(),
      updatedAt: new Date()
},

{
  "name": "Butterfree",
  "id": "012",
  "image":"./Imagenes/butterfree.png",
  "PrimaryType": "bug",
  "weight": "32.0",
  "height": "1.1",
  "moves1": "Compound-Eyes",
  "moves2": "Tinted-Lens",
  "description" : "In battle it flaps its wings at great speed to relase highly toxic dust into the air",
  "hp": 60,
  "atk": 45,
  "def": 50,
  "satk": 90,
  "sdef": 80,
  "spd": 70,
  "SecondaryType":"flying",
  createdAt: new Date(),
      updatedAt: new Date()
},

  {
  "name": "Charmander",
  "id": "004",
  "image":"./Imagenes/charmander.png",
  "PrimaryType": "fire",
  "weight": "8.5",
  "height": "0.6",
  "moves1": "Mega-Punch ",
  "moves2":"Fire-Punch",
  "description" : "It has a preference for hot things. When it rains, steam is said to spout from the tip os its tail",
  "hp": 39,
  "atk": 52,
  "def": 43,
  "satk": 60,
  "sdef": 50,
  "spd": 65,
  "SecondaryType":"",
  createdAt: new Date(),
      updatedAt: new Date()
},

{

  "name": "Ditto",
  "id": "132",
  "image":"./Imagenes/ditto.png",
  "PrimaryType": "normal",
  "weight": "4.0",
  "height": "0.3",
  "moves1": "Limber",
  "moves2": "Imposter",
  "description" : "It can reconstitue its entire cellular structure to change into what it sees, but it returns when it relaxes",
  "hp": 48,
  "atk": 48,
  "def": 48,
  "satk": 48,
  "sdef": 48,
  "spd": 48,
  "SecondaryType":"" ,
  createdAt: new Date(),
      updatedAt: new Date()
},

{
  "name": "Gastly",
  "id": "092",
  "image":"./Imagenes/gastly.png",
  "PrimaryType": "ghost",
  "weight": "0.1",
  "height": "1.3",
  "moves1": "Levitate",
  "moves2":"",
  "description" : "Born from grases, anyone would faint if engulled by its gaseous body, which contains poison.",
  "hp": 30,
  "atk": 35,
  "def": 30,
  "satk":100,
  "sdef": 35,
  "spd": 80,
  "SecondaryType":"poison",
  createdAt: new Date(),
      updatedAt: new Date()
},

{

  "name": "Mew",
  "id": "152",
  "image":"./Imagenes/mew.png",
  "PrimaryType": "Psychic",
  "weight": "4.0",
  "height": "0.4",
  "moves1": "Synchronize",
  "moves2":"",
  "description" : "When viewed through a microscope, this pokemon's short, fine, delicate hair can be seen.",
  "hp": 100,
  "atk": 100,
  "def": 100,
  "satk": 100,
  "sdef": 100,
  "spd": 100,
  "SecondaryType":"",
  createdAt: new Date(),
      updatedAt: new Date()
},

{
  "name": "Pikachu",
  "id": "025",
  "image":"./Imagenes/pikachu.png",
  "PrimaryType": "electric",
  "weight": "6.0",
  "height": "0.4",
  "moves1": "Mega-Punch",
  "moves2":"Pay-Day",
  "description" : "Pikachu that can regenerate powerful electricity have ckeek sacs that are extra soft and super stretchy",
  "hp": 35,
  "atk": 55,
  "def": 40,
  "satk": 50,
  "sdef": 50,
  "spd": 90,
  "SecondaryType":"",
  createdAt: new Date(),
      updatedAt: new Date()
},

{
  "name": "squirtle",
  "id": "007",
  "image":"./Imagenes/squirtle.png",
  "PrimaryType": "water",
  "weight": "9.0",
  "height": "0.5",
  "moves1": "Torrent",
  "moves2": "Rain-Dish",
  "description" : "When it retracts its long neck into its shell, it squirts out water with vigorous force.",
  "hp": 44,
  "atk": 48,
  "def": 65,
  "satk": 50,
  "sdef": 64,
  "spd": 43,
  "SecondaryType":"",
  createdAt: new Date(),
      updatedAt: new Date()
}
]);
  },

  async down (queryInterface, Sequelize) {
    
  }
};

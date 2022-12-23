const express = require('express');
const router = express.Router();
const db = require('../models/index')

router.get('/pokemones',(req,res) => { //busco todos los productos
    const pokemones = db.pokemones
    pokemones.findAll()
    .then(data => {res.send(data)})
    .catch(err => {res.status(500).send({message: err.message})})
})




router.get('/pokemones/:id', (req, res) => {  //busco un producto especifico por si id
    let idN = req.params.id
    const pokemones = db.pokemones
    pokemones.findAll({
        where:{
            id: idN
        }
    })
    .then(data => {
        if (data.length > 0){
            res.send(data)
        }
        else{
            res.status(404).send({message: 'Pokemon no encontrado'})
        }
      })
    .catch(err => {res.status(400).send({message: err.message})})
})


router.post('/pokemones',(req,res)=>{  //ingreso un pokemon para mi
    const Pokemons = db.pokemones
    let pokemon = {
        id: req.body.id,
        name: req.body.name,
        PrimaryType: req.body.PrimaryType,
        SecondaryType: req.body.SecondaryType,
        weight: req.body.weight,
        height: req.body.height,
        moves1: req.body.moves1,
        moves2: req.body.moves2,
        description: req.body.description,
        hp: req.body.hp,
        atk: req.body.atk,
        def: req.body.def,
        satk: req.body.satk,
        sdef: req.body.sdef,
        spd: req.body.spd,
        image: req.body.image
    }
    Pokemons.create(pokemon)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({message: 'Ocurrió un error, por favor intente nuevamente' +err})
    })
})



module.exports = router ;

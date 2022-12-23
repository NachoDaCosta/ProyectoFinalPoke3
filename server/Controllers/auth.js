const express=require('express');
const router=express.Router();
const bcrypt=require('bcrypt');
const db = require('../models/');
const jwt=require('jsonwebtoken')
const {verifyToken,TOKEN_SECRET}=require('../middlewares/validate-jwt.js');


router.post('/register',async (req,res)=>{
    console.log('post register')
    const salt=await bcrypt.genSalt(10);
    const password=await bcrypt.hash(req.body.password,salt);
    const User=db.User
    const newUser={
        email: req.body.email,
        password: password
    }
    await User.create(newUser)
    .then((data)=>{res.send({success: true, newUser})})
    .catch(err => {res.status(500).send({message: err.message})})
});


router.post('/login',async(req,res)=>{
    const User=db.User
    const chackedUser=await User.findOne({where:{email:req.body.email}});
    console.log(chackedUser)
    if (!chackedUser){
        return res.status(400).send({error:"Usuario no encontrado"})
    }
    const validPassword=await bcrypt.compare(req.body.password,chackedUser.password)
    if(!validPassword){
        return res.status(400).send({error:'Contraseña no valida'})
    }
    //creacion de jwt
    const token=jwt.sign({
        email:chackedUser.email,
        id:chackedUser.id
    },TOKEN_SECRET)
    res.send({error: null,data:'Login exitoso',token});
});

router.get('/usuarios',verifyToken,async(req,res,next)=>{
    try{
        res.send("bienvenido "+req.body.email)
    }catch(err){next(err)}
})


router.get('/usuarios',verifyToken,async(req,res)=>{
    const User=db.User
    console.log(req.user)
    res.send({error:null, User})
})


module.exports=router;
const jwt=require('jsonwebtoken')
const TOKEN_SECRET='claveDeToken'

//middleware para validar el token
const verifyToken=(req,res,next)=>{
    const token=req.header('Authorization')
    try{
        const verified=jwt.verify(token.split(" ")[1],TOKEN_SECRET)
        req.user=verified
        next()
    }catch(error){
        res.status(400).send({error:'El Token no es Valido'})
    }
}


module.exports={
    verifyToken,TOKEN_SECRET
}
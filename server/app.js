const express = require('express')
const cors = require('cors')
const {Client} = require('pg')
const routes = require('./controllers/services.js')
const authRouter=require('./controllers/auth')
const app = express()


app.use(express.json())
app.use(cors())
app.use('/', routes)
app.use('/auth', authRouter)

app.listen(8080,()=>{
    console.log('esta funcionando...')
})

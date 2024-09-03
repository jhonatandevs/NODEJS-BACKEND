// const express = require('express'); //Common JS 
import express from 'express' //EcmaScript Modules
import usuarioRoutes from './routes/usuarioRoutes.js'
/** Creando la app o servidor */
const app= express();

//Routing 
/** use: Busca las rutas parecidas get: busca las exactas */
app.use('/',usuarioRoutes);



// app.get('/',(req, res)=>{
//     res.send('Hola Mundo en Express')
// })
// app.get('/nosotros',(req, res)=>{
//     res.json({msg:'Informacion de nosotros'})
// })
/** Definir puerto */
const port= 4000;

app.listen(port,()=>{
    console.log(`El servidor está andando en el puerto ${port}`)
})
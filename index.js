// const express = require('express'); //Common JS 
import express from 'express' //EcmaScript Modules
import usuarioRoutes from './routes/usuarioRoutes.js'
import db from './config/db.js'
/** Creando la app o servidor */
const app = express();

//HABILITAR PUG

app.set('view engine', 'pug');
app.set('views', './views')


//Habilitar lectura de datos en formularios
app.use(express.urlencoded({extended:true}))
//Conexion db
try {
    await db.authenticate();
    console.log("Conexion correcta a la DB");
}
catch (error) {
    console.log(error)
}
//Carpetas publicas
app.use(express.static('public'))
//Routing 
/** use: Busca las rutas parecidas get: busca las exactas */
app.use('/auth', usuarioRoutes);



// app.get('/',(req, res)=>{
//     res.send('Hola Mundo en Express')
// })
// app.get('/nosotros',(req, res)=>{
//     res.json({msg:'Informacion de nosotros'})
// })


/** Definir puerto */
const port = 4000;

app.listen(port, () => {
    console.log(`El servidor está andando en el puerto ${port}`)
})
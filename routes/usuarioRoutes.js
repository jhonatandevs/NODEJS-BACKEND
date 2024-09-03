import express from 'express' //EcmaScript Modules
const router= express.Router();
//Routing 

//Separadas/
router.get('/',(req, res)=>{
    res.send('Hola Mundo en Express')
})
router.post('/',(req, res)=>{
    res.json({msg:'RESPUESTA DEL POST'})
})

//Juntas
// router.route('/')
// .get(function(req, res){
//     res.json({msg: "respuesta peticion juntas GET"})
// })
// .post(function(req,res){
//     res.json({msg:"Respuesta peticion juntas POST"})
// })

export default router;
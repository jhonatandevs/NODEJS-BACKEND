import express from 'express' //EcmaScript Modules
import { formularioLogin, formularioRegistro } from '../controllers/usuarioController.js';
const router= express.Router();

router.get('/login',formularioLogin)
router.get('/registro',formularioRegistro)




export default router;
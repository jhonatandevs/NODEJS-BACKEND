import express from 'express' //EcmaScript Modules
import { formularioLogin, formularioOlvidePassword, formularioRegistro } from '../controllers/usuarioController.js';
const router= express.Router();

router.get('/login',formularioLogin)
router.get('/registro',formularioRegistro)
router.get('/olvide-password',formularioOlvidePassword)




export default router;
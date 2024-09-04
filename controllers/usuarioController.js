import { check, validationResult } from 'express-validator'
import Usuario from "../models/Usuario.js"
import { generarId } from '../helpers/tokens.js'

const formularioLogin = (req, res) => {
    res.render('../views/auth/login.pug', {
        pagina: "Iniciar sesion"
    })
}
const formularioRegistro = (req, res) => {
    res.render('../views/auth/registro.pug', {
        pagina: "Crear cuenta"
    })
}
const formularioOlvidePassword = (req, res) => {
    res.render('../views/auth/olvide-password.pug', {
        pagina: "Recupera tu acceso a Bienes Raices"
    })
}
const registrar = async (req, res) => {
    await check('nombre').notEmpty().withMessage('No colocaste el nombre, es requerido').run(req);
    await check('email').isEmail().withMessage('Eso no parece un email').run(req);
    await check('password').isLength({ min: 7 }).withMessage('El pass debe ser de al menos 6 ch').run(req);
    await check('repetir_password').equals('password').withMessage('Los passwords deben ser iguales').run(req);


    let resultadoErrores = validationResult(req);
    // return res.json(resultadoErrores.array())
    if (!resultadoErrores.isEmpty()) {
        return res.render('auth/registro', {
            pagina: "Crear Cuenta",
            errores: resultadoErrores.array(),
            usuario:{
                nombre: req.body.nombre,
                email: req.body.email,
            }
        })
    }
    //Verificar que el usuario no esté duplicado
    const existeUsuario= await Usuario.findOne({where: {email: req.body.email}})
    const {nombre, email, password} =req.body;
    if(existeUsuario){
        return res.render('auth/registro', {
            pagina: "Crear Cuenta",
            errores:[{msg: 'El usuario ya está registrado'}],
            usuario:{
                nombre,
                email,
            }
        })
    }
    await Usuario.create({
        nombre,
        email,
        password,
        token:generarId()
    });
    res.render('templates/mensaje',{
        pagina:'Cuenta Creada correctamente',
        mensaje:'Hemos enviado un email de confirmacion, presiona en el enlace'
    })
}
export {
    formularioLogin,
    formularioRegistro,
    formularioOlvidePassword,
    registrar
}
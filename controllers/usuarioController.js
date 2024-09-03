const formularioLogin =(req, res)=>{
    res.render('../views/auth/login.pug',{
        pagina: "Iniciar sesion"
    })
}
const formularioRegistro =(req, res)=>{
    res.render('../views/auth/registro.pug',{
       pagina: "Crear cuenta"
    })
}
const formularioOlvidePassword =(req, res)=>{
    res.render('../views/auth/olvide-password.pug',{
       pagina: "Recupera tu acceso a Bienes Raices"
    })
}

export {
    formularioLogin,
    formularioRegistro,
    formularioOlvidePassword
}
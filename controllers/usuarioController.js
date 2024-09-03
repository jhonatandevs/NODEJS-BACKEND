const formularioLogin =(req, res)=>{
    res.render('../views/auth/login.pug',{
      
    })
}
const formularioRegistro =(req, res)=>{
    res.render('../views/auth/registro.pug',{
       
    })
}

export {
    formularioLogin,
    formularioRegistro
}
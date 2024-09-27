const crearUsuarioModel = require("../models/singIn");

module.exports.createUsuario = async (createUser) => {
    let response = await crearUsuarioModel.createUsuario(createUser);
    console.log(response);
    return response
}


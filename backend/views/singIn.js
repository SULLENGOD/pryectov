const createUserController = require('../controller/singIn');

module.exports = (app) => {
    app.post('/', async (req, res) => {
        let result = createUserController.createUsuario(req.body)
        console.log(req.body);
        res.send( result )
    })
}


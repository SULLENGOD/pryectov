const express = require('express');
const cors = require('cors')
const app = express();
const sequelize = require('./db/connection')

//Vistas

const crearUsuario =  require('./views/singIn')


require("dotenv").config()

//Middleware
app.use(express.json())
app.use(cors())


let serverStart = async () => {
    try {
      await sequelize.authenticate();
      console.log("MySQL: Online");
  
      app.listen(3001, () => {
        console.log(
          "Server: Online",
          "PORT: 3001"
        );
      });
    } catch (error) {
      console.log(`Error en el SQL: ${error}`);
    }
  };
  

serverStart()
crearUsuario(app)



const sql = require("../db/connection");
// const Sequelize = require('../db/connection');

module.exports.createUsuario = async (createUser) => {
  try {
    let res = await sql.query(
      `INSERT INTO users (name, last_name, email, userName, pass) VALUES ('${createUser.name}','${createUser.last_name}','${createUser.email}','${createUser.userName}','${createUser.pass}')`
    );
    return res;
  } catch (error) {
    console.log(error);
  }
};

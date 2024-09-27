const Sequelize = require('sequelize')

const sequelize =  new Sequelize('vicio_music', 'user', '12345', {
    host: '192.168.64.2',
    dialect: 'mysql'
  })

  module.exports = sequelize
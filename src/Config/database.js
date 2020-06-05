const {Sequelize} = require('sequelize');

const sequelize = new Sequelize(
  'heroku_c7c7399b6f0aa7c',
  'baf7b6582c4985',
  '7c426a19',
  {
    host: 'us-cdbr-east-05.cleardb.net',
    dialect: 'mysql'
  }
);

module.exports = sequelize;
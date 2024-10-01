// models/Client.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Owner = sequelize.define('Owner', {
  emailid: DataTypes.STRING,
  password: DataTypes.STRING,
});

module.exports = { Owner };

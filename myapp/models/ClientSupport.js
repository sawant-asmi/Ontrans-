// models/Contact.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const ClientSupport = sequelize.define('ClientSupport', {
  firstname: DataTypes.STRING,
  lastname: DataTypes.STRING,
  phone: DataTypes.BIGINT,
  email: DataTypes.STRING,
  message: DataTypes.STRING,
});

module.exports = ClientSupport;

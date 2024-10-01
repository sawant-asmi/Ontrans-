// models/Contact.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Contact = sequelize.define('Contact', {
  firstname: DataTypes.STRING,
  lastname: DataTypes.STRING,
  phone: DataTypes.BIGINT,
  email: DataTypes.STRING,
  message: DataTypes.STRING,
});

module.exports = Contact;

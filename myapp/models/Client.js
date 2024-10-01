const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Client = sequelize.define('Client', {
  companyname: DataTypes.STRING,
  panid: DataTypes.STRING,
  gstno: DataTypes.STRING,
  iecno: DataTypes.STRING,
  emailid: DataTypes.STRING,
  phone: DataTypes.BIGINT,
  contactpersonname: DataTypes.STRING,
  contactpersonphone: DataTypes.BIGINT,
  password: DataTypes.STRING,
  firstTime: DataTypes.STRING,
});

module.exports = Client;

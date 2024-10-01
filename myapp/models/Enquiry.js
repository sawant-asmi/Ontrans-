// models/Client.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Enquiry = sequelize.define('Enquiry', {
  firstname: DataTypes.STRING,
  lastname: DataTypes.STRING,
  phone: DataTypes.BIGINT,
  email: DataTypes.STRING,
  companyname: DataTypes.STRING,
  loadport: DataTypes.STRING,
  dischargeport: DataTypes.STRING,
  incoterms: DataTypes.STRING,
  packages: DataTypes.STRING,
  typeofpackage: DataTypes.STRING,
  length: DataTypes.INTEGER,
  width: DataTypes.INTEGER,
  height: DataTypes.INTEGER,
  units: DataTypes.STRING,
  freighttype: DataTypes.STRING,
  loadtype: DataTypes.STRING,
});

module.exports = Enquiry;

const { Sequelize } = require('sequelize');

// Replace with your actual database configuration
const sequelize = new Sequelize('gstlogistics', 'postgres', 'gst1234', {
  host: 'localhost',
  dialect: 'postgres',
});

module.exports = sequelize;


const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require('./config/database');
const contactRoute = require('./routes/contact');
const clientRoute = require('./routes/client');
const enquiryRoute = require('./routes/enquiry');
const client_loginRoute = require('./routes/client_login');
const client_enquiryRoute = require('./routes/client_enquiry');
const client_orderRoute = require('./routes/client_order');
const client_supportRoute = require('./routes/client_support');
const ownerRoute = require('./routes/owner');
// const predictionRoute = require('./routes/prediction');




const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());


// Connect to the database
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

// Use the contact and client routes
app.use(contactRoute);
app.use(clientRoute);
app.use(enquiryRoute);
app.use(client_loginRoute);
app.use(client_enquiryRoute);
app.use(client_orderRoute);
app.use(client_supportRoute);
app.use(ownerRoute);
// app.use(predictionRoute);

app.listen(PORT, async() => {
  console.log(`Server is running on port ${PORT}`);

  await sequelize.sync();
  console.log('Database and tables synchronized');
});
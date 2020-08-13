
// Require data
const { animals } = require('./data/animals');
const express = require('express');
const fs = require('fs');
const path = require('path');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// Tell app to use that port, if it has been set, and if not, default to port 80.
const PORT = process.env.PORT || 3001;

//Instantiate the server
const app = express();

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

//Giving a file path adn instructing to make them static resources
app.use(express.static('public'));

// Method to make our server listen. Chain the listen() method onto our server.
app.listen(PORT, () => {
  console.log(`API server now on port 3001!`);
});
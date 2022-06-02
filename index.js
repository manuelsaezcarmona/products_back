const express = require('express');
require('dotenv').config();
const morgan = require('morgan');
const cors = require('cors');

const { dbConexion } = require('./config/db.config');
const products = require('./data');

const app = express();

/** DB connection */
dbConexion();

/** Middlewares */
// Security
app.use(cors());
// Request information from server
app.use(morgan('dev'));
// read and Parse body request (from POST and PUT request)
app.use(express.json());
// public directory, page in server
app.use(express.static('public'));

/* --- ROUTES ---- */

app.get('/products', (req, res) => {
  console.log(products);
  res.json(products);
});

/** Server Up */

app.listen(process.env.PORT, () => {
  console.log(`Server up in port: ${process.env.PORT}`);
});

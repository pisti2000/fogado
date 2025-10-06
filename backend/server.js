const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');
require('dotenv').config();

app.use(bodyParser.json());
app.use(cors())

const db = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    port: process.env.PORT
});

app.get('/', (req, res) => {
  res.send('Fut a szerver!');
});

app.listen(port, () => {
  console.log(`fut a szerver`);
});
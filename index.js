const express = require('express');
const knex = require('./conexao')
const app = express();

app.use(express.json());

app.listen(3000);
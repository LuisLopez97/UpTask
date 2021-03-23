const express = require('express');
const routes = require('./routes');

//Create an express app
const app = express();

app.use('/', routes());

//Port to run
app.listen(3000);
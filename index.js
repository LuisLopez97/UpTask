const express = require('express');

//Create an express app
const app = express();

// Route for home
app.use('/', (req, res) => {
    res.send('Hellow World')
});

//Port to run
app.listen(3000);
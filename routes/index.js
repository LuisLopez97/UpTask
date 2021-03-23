const express = require('express');
const router = express.Router();

module.exports = function() {
    router.get('/', (req, res) => {
        res.send('Index');
    });
    router.get('/Us', (req, res) => {
        res.send('Us');
    });
    return router
}
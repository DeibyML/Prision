const express = require('express');
const route = express.Router();

route.get('/', (req, res) => {
    res.send(res.json({
        'API': 'Conectado al controller de PrisoÑero'
    }));
});

module.exports = route;
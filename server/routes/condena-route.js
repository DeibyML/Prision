const express = require('express');
const route = express.Router();

const condenaCtrl = require('../controllers/condena.controller');

route.get('/', condenaCtrl.getCondenas);
route.post('/', condenaCtrl.createCondena);

module.exports = route;
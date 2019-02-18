const express = require('express');
const route = express.Router();

const prisioneroCtrl = require('../controllers/prisionero.controller');

route.get('/', prisioneroCtrl.getPrisioneros);
route.get('/:idPrisionero', prisioneroCtrl.getPrisionero);
route.post('/', prisioneroCtrl.createPrisionero);
route.delete('/:idPrisionero', prisioneroCtrl.deletePrisionero);

module.exports = route;
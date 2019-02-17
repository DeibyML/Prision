const express = require('express');
const route = express.Router();

const guardianCtrl = require('../controllers/guardian.controller')

route.get('/', guardianCtrl.getGuardianes);
route.get('/:idGuardian', guardianCtrl.getGuardian);
route.post('/', guardianCtrl.createGuardian);
route.delete('/:idGuardian', guardianCtrl.deleteGuardian);

module.exports = route;
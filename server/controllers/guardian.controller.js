const guardianCtrl = {};

guardianCtrl.getGuardianes = (req, res) => {
    res.json({
        status: 'Todos los guardianes'
    });
};

guardianCtrl.createGuardian = (req, res) => {
    res.json({
        status: 'Prisionero creado.'
    });
};

guardianCtrl.getGuardian = (req, res) => {
    res.json({
        status: 'El guardian con el id:' + req.params.idGuardian
    });
};

guardianCtrl.deleteGuardian = (req, res) => {
    res.json({
        status: 'El prisionero con el id:' + req.params.idGuardian
    });
};

module.exports = guardianCtrl;
const prisioneroCtrl = {};

prisioneroCtrl.getPrisioneros = (req, res) => {
    res.json({
        status: 'Todos los prisioneros'
    });
};

prisioneroCtrl.createPrisionero = (req, res) => {
    res.json({
        status: 'Prsionero creado.'
    });
};

prisioneroCtrl.getPrisionero = (req, res) => {
    res.json({
        status: 'El prisionero con el id:' + req.params.idPrisionero
    });
};

prisioneroCtrl.deletePrisionero = (req, res) => {
    res.json({
        status: 'El prisionero con el id:' + req.params.idPrisionero
    });
};

module.exports = prisioneroCtrl;
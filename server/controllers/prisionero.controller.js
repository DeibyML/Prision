const Prisionero = require('../models/prisionero-model');
const prisioneroCtrl = {};

prisioneroCtrl.getPrisioneros = async(req, res) => {
    const prisioneros = await Prisionero.find();
    res.json(prisioneros);
};

prisioneroCtrl.createPrisionero = async(req, res) => {
    try {
        const newPrisionero = new Prisionero(req.body);
        await newPrisionero.save();
        res.json({
            'message': 'Prisionero creado correctamente'
        });
    } catch (error) {
        res.json(error);
        console.error(error);
    }
};

prisioneroCtrl.getPrisionero = async(req, res) => {
    try {
        let prisioneroById = await Prisionero.findById(req.params.idPrisionero);
        res.json(prisioneroById);

    } catch (error) {
        res.json(error);
        console.error(error);
    }
};

prisioneroCtrl.updatePrisionero = (req, res) => {
    res.json({
        status: 'El prisionero con el id:' + req.params.idPrisionero
    });
};

prisioneroCtrl.deletePrisionero = async(req, res) => {
    try {
        await Prisionero.findByIdAndRemove(req.params.idPrisionero);
        res.json("Prisionero eliminado correctamente");

    } catch (error) {
        res.json(error);
        console.error(error);
    }

};

module.exports = prisioneroCtrl;
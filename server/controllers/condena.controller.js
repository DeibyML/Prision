const Condena = require('../models/condena-model');
const condenaCtrl = {};

condenaCtrl.getCondenas = async(req, res) => {
    const condenas = await Condena.find();
    res.json(condenas);
};

condenaCtrl.createCondena = async(req, res) => {
    try {
        const newCondena = new Condena(req.body);
        await newCondena.save();
        res.json({
            'status': 200,
            'message': 'Condena creada correctamente'
        });
    } catch (error) {
        res.json(error);
        console.error(error);
    }
};

module.exports = condenaCtrl;
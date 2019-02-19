const mongoose = require('mongoose');
const { Schema } = mongoose;

const celdaComodidadSchema = new Schema({
    IdCelda: { type: Number, required: true },
    IdComodidad: { type: Number, required: true }
});

module.exports = mongoose.model('CeldaComodidad', celdaComodidadSchema);
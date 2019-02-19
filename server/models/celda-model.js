const mongoose = require('mongoose');
const { Schema } = mongoose;

const celdaSchema = new Schema({
    Largo: { type: Number, required: true },
    Ancho: { type: Number, required: true },
    Alto: { type: Number, required: true },
    CapacidadMaxima: { type: Number, required: true },
    IdSexoCelda: { type: Number, required: true },
    IdGuardian: { type: Number, required: true }
});

module.exports = mongoose.model('Celda', celdaSchema);
const mongoose = require('mongoose');
const { Schema } = mongoose;

const celdaSchema = new Schema({
    IdCelda: { type: Number, required: true },
    Largo: { type: Number, required: true },
    Ancho: { type: Number, required: true },
    Alto: { type: Number, required: true },
    CapacidadMaxima: { type: Number, required: true },

    Nombres: { type: String, required: true },
    Apellido: { type: String, required: true },
    FechaNac: { type: Date, required: true },
    IdCondena: { type: Number, required: true },
    IdCelda: { type: Number, required: true }
});

module.exports = mongoose.model('Prisionero', prisioneroSchema);
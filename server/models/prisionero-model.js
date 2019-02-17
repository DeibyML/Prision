const mongoose = require('mongoose');
const { Schema } = mongoose;

const prisioneroSchema = new Schema({
    IdPrisionero: { type: Number, required: true },
    Nombres: { type: String, required: true },
    Apellidos: { type: String, required: true },
    FechaNac: { type: Date, required: true },
    IdRaza: { type: Number, required: true },
    IdSexo: { type: Number, required: true },
    IdCelda: { type: Number, required: true },
    Libre: { type: Boolean, required: true }
});

module.exports = mongoose.model('Prisionero', prisioneroSchema);
const mongoose = require('mongoose');
const { Schema } = mongoose;

const condenaSchema = new Schema({
    IdCondena: { type: Number, required: true },
    FechaCondena: { type: Date, required: true },
    Duracion: { type: Number, required: true },
    InicioCondena: { type: Date, required: true },
    FinalCondena: { type: Date, required: true },
    IdJuez: { type: Number, required: true },
    IdTipoDelito: { type: Number, required: true },
    IdPrisionero: { type: Number, required: true }
});

module.exports = mongoose.model('Condena', condenaSchema);
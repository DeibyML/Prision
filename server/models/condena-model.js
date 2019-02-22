const mongoose = require('mongoose');
const { Schema } = mongoose;

const condenaSchema = new Schema({
    FechaCondena: { type: Date, required: true },
    Duracion: { type: Number, required: false },
    InicioCondena: { type: Date, required: true },
    FinalCondena: { type: Date, required: true },
    IdJuez: { type: String, required: false },
    IdTipoDelito: { type: String, required: false },
    IdPrisionero: { type: String, required: false }
});

module.exports = mongoose.model('Condena', condenaSchema);
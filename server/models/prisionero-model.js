const mongoose = require('mongoose');
const { Schema } = mongoose;

const prisioneroSchema = new Schema({
    Nombres: { type: String, required: true },
    Apellidos: { type: String, required: true },
    FechaNac: { type: Date, required: true },
    Raza: { type: String, required: true },
    Sexo: { type: String, required: true },
    Celda: { type: String, required: false },
    Libre: { type: Boolean, required: true }
});

module.exports = mongoose.model('Prisionero', prisioneroSchema);
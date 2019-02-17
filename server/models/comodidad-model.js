const mongoose = require('mongoose');
const { Schema } = mongoose;

const comodidadSchema = new Schema({
    IdComodidad: { type: Number, required: true },
    Nombre: { type: String, required: true }
});

module.exports = mongoose.model('Comodidad', comodidadSchema);
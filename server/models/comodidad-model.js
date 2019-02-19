const mongoose = require('mongoose');
const { Schema } = mongoose;

const comodidadSchema = new Schema({
    Nombre: { type: String, required: true },
    Estado: { type: Boolean, require: true }
});

module.exports = mongoose.model('Comodidad', comodidadSchema);
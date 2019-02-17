const mongoose = require('mongoose');
const { Schema } = mongoose;

const razaSchema = new Schema({
    IdRaza: { type: Number, required: true },
    Nombre: { type: String, required: true }
});

module.exports = mongoose.model('Raza', razaSchema);
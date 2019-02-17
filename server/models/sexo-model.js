const mongoose = require('mongoose');
const { Schema } = mongoose;

const sexoSchema = new Schema({
    IdSexo: { type: Number, required: true },
    Nombre: { type: String, required: true }
});

module.exports = mongoose.model('Sexo', sexoSchema);
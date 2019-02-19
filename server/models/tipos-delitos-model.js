const mongoose = require('mongoose');
const { Schema } = mongoose;

const tipoDelitoSchema = new Schema({
    Nombre: { type: String, required: true }
});

module.exports = mongoose.model('TipoDelito', tipoDelitoSchema);
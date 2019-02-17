const mongoose = require('mongoose');
const { Schema } = mongoose;

const aliasSchema = new Schema({
    IdAlias: { type: Number, required: true },
    Nombre: { type: String, required: true }
});

module.exports = mongoose.model('Alias', aliasSchema);
const mongoose = require('mongoose');
const { Schema } = mongoose;

const aliasSchema = new Schema({
    Nombre: { type: String, required: true }
});

module.exports = mongoose.model('Alias', aliasSchema);
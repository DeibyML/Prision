const mongoose = require('mongoose');
const { Schema } = mongoose;

const guardianSchema = new Schema({
    IdGuardian: { type: Number, required: true },
    Nombres: { type: String, required: true },
    Apellido: { type: String, required: true },
    CodigoInterno: { type: String, required: true },
    Salario: { type: Number, required: true },
    FechaIngreso: { type: Date, required: true }
});

module.exports = mongoose.model('Guardian', guardianSchema);
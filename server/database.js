const mongoose = require('mongoose');

const URI = 'mongodb://localhost:27017/prision-mortal';

mongoose.connect(URI, { useNewUrlParser: true })
    .then(db => console.log('Conectado a MongoDb'))
    .catch(error => console.error('Error en la DB: ', error));

module.exports = mongoose;
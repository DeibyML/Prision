const express = require('express');
const morgan = require('morgan');
const server = express();
const { Mongoose } = require('./database');
const cors = require('cors');

// Settings
server.set('port', process.env.PORT || 3000);


// Middlewares
server.use(morgan('dev')); // Se usa para capturar por consola los mensajes del servidor.(A donde entró, statusCode).
server.use(express.json());
server.use(cors({ origin: 'http://localhost:4200' }));

// Routes
server.use('/prisionero', require('./routes/prisionero-route'));
server.use('/guardian', require('./routes/guardian-route'));
server.use('/condena', require('./routes/condena-route'));

// Inicia el servidor
server.listen(server.get('port'), () => {
    console.log("Entró al Server. Puerto: ", server.get('port'));
});
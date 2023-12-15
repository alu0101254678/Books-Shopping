var express = require('express');
const mongoose = require('mongoose');

var app = express();


// Ruta principal para verificar la conexión y realizar la conexión a la base de datos
app.get('/', (req, res) => {
  // Conexión a la base de datos de MongoDB Atlas
  mongoose.connect('mongodb+srv://alu0101254678:Fin_del_Creador_2022@cluster0.ffwce0q.mongodb.net/tu_basededatos', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(() => {
      console.log('Conexión exitosa a MongoDB Atlas');
      res.send('Conexión exitosa a la base de datos');
    })
    .catch((error) => {
      console.error('Error de conexión a MongoDB:', error);
      res.status(500).send('Error interno del servidor');
    });
});

// Manejo de errores 404
app.use(function (req, res, next) {
  res.status(404).send('Recurso no encontrado');
});

// Manejo de errores generales
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Error interno del servidor');
});

module.exports = app;

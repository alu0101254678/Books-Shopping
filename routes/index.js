var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');

// Conexión a la base de datos de MongoDB Atlas
mongoose.connect('mongodb+srv://alu0101254678:Fin_del_Creador_2022@cluster0.ffwce0q.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

/* GET home page. */
router.get('/', function(req, res, next) {
  // Verifica la conexión a la base de datos
  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'Error de conexión a MongoDB:'));
  db.once('open', function () {
    res.send('Conectado a MongoDB Atlas');
  });

});

module.exports = router;

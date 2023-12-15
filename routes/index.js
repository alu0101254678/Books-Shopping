var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // Crear un documento en la colección "ejemplo"
  const nuevoEjemplo = new req.db.Ejemplo({
    nombre: 'Ejemplo Nombre',
    edad: 25,
    // Otros campos según tu modelo
  });

  nuevoEjemplo.save((err, resultado) => {
    if (err) {
      console.error(err);
      return res.render('error', { error: 'Error al guardar en la base de datos' });
    }

    // Mostrar un mensaje en la página principal
    res.render('index', { title: 'Express', message: 'Conexión exitosa a la base de datos', data: resultado });
  });
});

module.exports = router;

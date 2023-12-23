const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;
let messagge = "";

// Conexión a la base de datos de MongoDB en Azure Cosmos DB
// const mongoURI = "mongodb://alu0101254678:Ivlc6PhBZ9i71tj7Q5Jx8b39ZV4b4yccm2Hgwste6YYGcLl3hUSv5YxrNrAiEoUT8UG5fGd2OFeVACDbdeOomg%3D%3D@alu0101254678.mongo.cosmos.azure.com:10255/?ssl=true&retrywrites=false&maxIdleTimeMS=120000&appName=@alu0101254678@";
// mongoose.connect(mongoURI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
//   .then(() => {
//     console.log('Conexión exitosa a Azure Cosmos DB');
//     messagge = 'Conexión exitosa a Azure Cosmos DB';
//   })
//   .catch((error) => {
//     console.error('Error de conexión a Azure Cosmos DB:', error);
//   });

// Ruta principal para verificar la conexión y realizar la conexión a la base de datos
app.get('/', (req, res) => {
  res.send("hola");
});

// Manejo de errores 404
app.use((req, res, next) => {
  res.status(404).send('Recurso no encontrado');
});

// Manejo de errores generales
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Error interno del servidor');
});

app.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto ${PORT}`);
});

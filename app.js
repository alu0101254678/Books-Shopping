const https = require('https');
const fs = require('fs');
const path = require('path');

const options = {
  key: fs.readFileSync(path.join(__dirname, 'privatekey.pem')),
  cert: fs.readFileSync(path.join(__dirname, 'certificate.pem'))
};

var mongoClient = require("mongodb").MongoClient;
mongoClient.connect("mongodb://alu0101254678:Ivlc6PhBZ9i71tj7Q5Jx8b39ZV4b4yccm2Hgwste6YYGcLl3hUSv5YxrNrAiEoUT8UG5fGd2OFeVACDbdeOomg%3D%3D@alu0101254678.mongo.cosmos.azure.com:10255/?ssl=true&retrywrites=false&maxIdleTimeMS=120000&appName=@alu0101254678@", function (err, client) {
  if (err) {
    console.error("Error al conectar con la base de datos:", err);
  } else {
    console.log("Conexión exitosa a la base de datos", client.PORT);
    // Realiza aquí cualquier operación relacionada con la base de datos que desees loguear.
  }
});

const server = https.createServer(options, (req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hola, mundo seguro con SSL!\n');
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Servidor Node.js con SSL escuchando en el puerto ${PORT}`);
});


const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();
app.use(router);
app.use(bodyParser.json());

// app.use('/', function (req, res) {
//   res.send('Hola');
// });

router.get('/message', function (req, res) {
  console.log(req.headers);
  res.send('Lista de mensajes');
});

router.post('/message', function (req, res) {
  console.log(req.query);
  console.log(req.body);
  res.send('Mensaje Añadido');
});

app.listen(3000);
console.log('Server run on port 3000');

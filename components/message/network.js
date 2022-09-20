const express = require('express');
const response = require('../../network/response.js');
const controller = require('./controller.js');
const router = express.Router();

// app.use('/', function (req, res) {
//   res.send('Hola');
// });

router.get('/', function (req, res) {
  // console.log(req.headers);
  // res.header({ 'custom-header': 'Nuestro valor perzonalizado' });
  // res.send('Lista de mensajes');
  // response.success(req, res, 'Lista de mensajes');
  const filterMessages = req.query.user || null;
  controller.getMessages(filterMessages).then((messageList) => {
    response.success(req, res, messageList, 200).catch((e) => {
      response.error(req, res, 'Unexpected Error', 500, e);
    });
  });
});

router.post('/', function (req, res) {
  // console.log(req.query);
  // console.log(req.body);
  // res.send('Mensaje Añadido');
  // res.status(201).send({ error: '', body: 'Creado Correctamente' });
  controller
    .addMessage(req.body.user, req.body.message)
    .then((fullMessage) => {
      response.success(req, res, fullMessage, 201);
    })
    .catch((e) => {
      response.error(
        req,
        res,
        'Informacion Invalida',
        400,
        'Error en el controller'
      );
    });
  // if (req.query.error == 'ok') {
  // } else {
  //   response.success(req, res, 'Creado Correctamente', 201);
  // }
});

router.patch('/:id', function (req, res) {
  // console.log(req.params.id);
  controller
    .updateMessage(req.params.id, req.body.message)
    .then((data) => {
      response.success(req, res, data, 200);
    })
    .catch((e) => {
      response.error(req, res, 'Error Interno', 500, e);
    });
  // res.send('Ok');
});

router.delete('/:id', function (req, res) {
  // console.log(req.params.id);
  controller
    .deleteMessage(req.params.id)
    .then(() => {
      response.success(req, res, `Usuario ${req.params.id} Eliminado`, 200);
    })
    .catch((e) => {
      response.error(req, res, 'Error Interno', 500, e);
    });
  // res.send('Ok');
});

module.exports = router;

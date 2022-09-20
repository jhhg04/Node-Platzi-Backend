const express = require('express');
const response = require('../../network/response.js');
const controller = require('./controller.js');
const router = express.Router();

router.post('/', function (req, res) {
  controller
    .addUser(req.body.name)
    .then((data) => {
      response.success(req, res, data, 201);
    })
    .catch((e) => {
      response.error(req, res, 'Informacion Invalida', 400, e);
    });
});

router.get('/', function (req, res) {
  controller
    .listUsers()
    .then((users) => {
      response.success(req, res, users, 200);
    })
    .catch((e) => {
      response.error(req, res, 'Unexpected Error', 500, e);
    });
});

module.exports = router;

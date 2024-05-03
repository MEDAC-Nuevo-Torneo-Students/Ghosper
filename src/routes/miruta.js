const express = require('express');
const router = express.Router();

const mirutaController = require('../controller/mirutaController');
router
    .get('/' ,mirutaController.getIndex)
    .get('/login' ,mirutaController.getLogin)
    .get('/signUp' ,mirutaController.getSignUp)
    .get('/signUp' ,mirutaController.getSignUp)
    .get('/productList' ,mirutaController.getProductList)
    .get('/productList/dunk1' ,mirutaController.getDunk1)
    .get('/productList/dunk2' ,mirutaController.getDunk2)
    .get('/productList/dunk3' ,mirutaController.getDunk3)
    .get('/productList/dunk4' ,mirutaController.getDunk4)
    .get('/productList/dunk5' ,mirutaController.getDunk5)
    .get('/productList/dunk6' ,mirutaController.getDunk6);

module.exports = router;
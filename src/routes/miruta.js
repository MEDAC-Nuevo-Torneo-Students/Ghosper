const express = require('express');
const router = express.Router();

const mirutaController = require('../controller/mirutaController');
router
    .get('/' ,mirutaController.getIndex)
    .get('/login' ,mirutaController.getLogin)
    .get('/signUp' ,mirutaController.getSignUp)
    .get('/signUp' ,mirutaController.getSignUp)
    .get('/productList' ,mirutaController.getProductList);

module.exports = router;
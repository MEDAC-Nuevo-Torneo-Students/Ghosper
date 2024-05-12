const express = require('express');
const router = express.Router();    
//
const mirutaController = require('../controller/mirutaController');

router
    //login
   // .get("/login", mirutaController.login)
    .get('/registro',mirutaController.getRegistro)
    .get('/', mirutaController.getIndex)
    .post('/login', mirutaController.postLogin)
    .post('/register',mirutaController.postRegister)
    .get('/signUp',mirutaController.getRegistro)

module.exports = router;
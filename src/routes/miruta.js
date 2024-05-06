const express = require('express');
const router = express.Router();

const mirutaController = require('../controller/mirutaController');
router
    .get('/' ,mirutaController.getIndex)
    .get('/login' ,mirutaController.getLogin)
    .get('/signUp' ,mirutaController.getSignUp)
    .get('/ghosperClub' ,mirutaController.getGhosperClub)
    .get('/dunk_man' ,mirutaController.getdunk_man)
    .get('/dunk_man/dunk1' ,mirutaController.getDunk1)
    .get('/dunk_man/dunk2' ,mirutaController.getDunk2)
    .get('/dunk_man/dunk3' ,mirutaController.getDunk3)
    .get('/dunk_man/dunk4' ,mirutaController.getDunk4)
    .get('/dunk_man/dunk5' ,mirutaController.getDunk5)
    .get('/dunk_man/dunk6' ,mirutaController.getDunk6)
    .get('/feautured_man' ,mirutaController.getfeautured_man)
    .get('/clothes_man' ,mirutaController.getclothes_man)
    .get('/sport_man' ,mirutaController.getsport_man)
    .get('/accesories_man' ,mirutaController.getaccesories_man);

module.exports = router;
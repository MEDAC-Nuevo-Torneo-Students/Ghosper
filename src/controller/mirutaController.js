const getIndex = (req, res) => {
    res.render('index');
};

const getLogin = (req, res) => {
    res.render('login');
};

const getSignUp = (req, res) => {
    res.render('signUp');
};

const getGhosperClub = (req, res) => {
    res.render('ghosperClub');
};

const getdunk_man = (req, res) => {
    res.render('dunk_man');
};

const getDunk1 = (req, res) => {
    res.render('dunk1');
};

const getDunk2 = (req, res) => {
    res.render('dunk2');
};

const getDunk3 = (req, res) => {
    res.render('dunk3');
};

const getDunk4 = (req, res) => {
    res.render('dunk4');
};

const getDunk5 = (req, res) => {
    res.render('dunk5');
};

const getDunk6 = (req, res) => {
    res.render('dunk6');
};

const getfeautured_man = (req, res) => {
    res.render('feautured_man');
};
const getclothes_man = (req, res) => {
    res.render('clothes_man');
};
const getsport_man = (req, res) => {
    res.render('sport_man');
};
const getaccesories_man = (req, res) => {
    res.render('accesories_man');
};

module.exports = {
    getIndex,
    getLogin,
    getSignUp,
    getGhosperClub,
    getdunk_man,
    getDunk1,
    getDunk2,
    getDunk3,
    getDunk4,
    getDunk5,
    getDunk6,
    getfeautured_man,
    getclothes_man,
    getsport_man,
    getaccesories_man,
};
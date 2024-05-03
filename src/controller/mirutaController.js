const getIndex = (req, res) => {
    res.render('index');
};
const getLogin = (req, res) => {
    res.render('login');
};
const getSignUp = (req, res) => {
    res.render('signUp');
};

const getProductList = (req, res) => {
    res.render('productList');
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

module.exports = {
    getIndex,
    getLogin,
    getSignUp,
    getProductList,
    getDunk1,
    getDunk2,
    getDunk3,
    getDunk4,
    getDunk5,
    getDunk6,
};
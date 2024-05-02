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

module.exports = {
    getIndex,
    getLogin,
    getSignUp,

    getProductList,
};
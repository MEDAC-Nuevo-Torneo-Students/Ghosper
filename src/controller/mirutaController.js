const bcrypt = require('bcryptjs');// Añade la importación de bcrypt
const connection = require('../conexion');


const getIndex = (req, res) => {
    res.render('index');
};

const login = (req, res) => {
    const correoElectronico = req.body.correoElectronico;
    const contrasena = req.body.contraseña;
    const query = 'SELECT * FROM usuario WHERE email = ?';
   
    connection.query(query, [correoElectronico], (err, results) => {
        if (err) throw err;
        if (results.length > 0) {
            // Verificar si la contraseña coincide utilizando bcrypt.compare()
            const validPassword = bcrypt.compare(contrasena, results[0].contraseña);
                if (validPassword) {
                    req.session.loggedIn = true; // Establece la sesión como iniciada
                    req.session.correoElectronico = correoElectronico; // Guarda el nombre de usuario en la sesión
                    res.redirect('/dunk_man'); // Redirige al usuario al panel de control (dashboard)
                } else {
                    res.render('index', { mensaje: 'Contraseña inválida' });
                }
   
        } else {
            res.render('index', { mensaje: 'Usuario no valido' }); // Redirige al usuario de vuelta al formulario de inicio de sesión con un mensaje de error
        }
    
    });
};

 const postRegister = async (req, res) => { 
    //const url = req.body;
    console.log(req.body)
    const { nombreCompleto, correoElectronico, contrasena, numeroContacto } = req.body;
    // Encriptar la contraseña
    const hashedPassword = await bcrypt.hash(contrasena, 10);
    const insertQuery ='INSERT INTO usuario (nombre, email, contraseña, telefono) VALUES (?, ?, ?, ?)';
    const values = [nombreCompleto, correoElectronico, hashedPassword, numeroContacto];
    // Ejecutar la consulta INSERT
    connection.query(insertQuery, values, function(error, results, fields) {
    if (error) {
        console.error('Error al insertar usuario:', error);
        return;
    }
    //console.log('Usuario insertado correctamente');
    res.render('index',{ mensaje: 'Usuario registrado' });
    });
};

 
 const postLogin =(req, res) => {
    const correoElectronico = req.body.correoElectronico;
    const contrasena = req.body.contraseña;
    const query = 'SELECT * FROM usuario WHERE email = ?';
   
    connection.query(query, [correoElectronico], (err, results) => {

        console.log(req.body);
        console.log(correoElectronico)
        console.log(contrasena);
        if (err) throw err;
        if (results.length > 0) {
            // Verificar si la contraseña coincide utilizando bcrypt.compare()
            const validPassword = bcrypt.compare(contrasena, results[0].contraseña);
                if (validPassword) {
                    req.session.loggedIn = true; // Establece la sesión como iniciada
                    req.session.correoElectronico = correoElectronico; // Guarda el nombre de usuario en la sesión
                    res.redirect('/dunk_man'); // Redirige al usuario al panel de control (dashboard)
                } else {
                    res.render('index', { mensaje: 'Contraseña inválida' });
                }
   
        } else {
            res.render('index', { mensaje: 'Usuario no valido' }); // Redirige al usuario de vuelta al formulario de inicio de sesión con un mensaje de error
        }
    
    });
};

const getRegistro = (req, res) => {
    res.render('signUp');
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
    login,
    getRegistro,
    postRegister,
    postLogin,
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
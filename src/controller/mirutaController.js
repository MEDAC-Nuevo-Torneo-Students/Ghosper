const mysql = require('mysql');

// Configuración de la conexión a la base de datos
const connection = mysql.createConnection({
  host: 'localhost', // Cambia esto si tu servidor MySQL está en un host diferente
  user: 'root',
  password: 'contraseña',
  database: 'ghosper_database'
});

// Conectar a la base de datos
connection.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err);
    return;
  }
  console.log('Conexión a la base de datos establecida correctamente.');
});

module.exports = connection;


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

const getregister = (req, res) => {
    res.render('register');
};
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db'); // Asegúrate de que la ruta sea correcta

const app = express();
const port = 3000; // Puerto en el que se ejecutará tu servidor

// Middleware para parsear los datos del formulario
app.use(bodyParser.urlencoded({ extended: true }));

// Ruta para manejar la solicitud POST del formulario de inicio de sesión
app.post('/register', (req, res) => {
    const { email, password } = req.body;

    // Aquí deberías realizar la lógica para verificar las credenciales en la base de datos
    // Por ejemplo:
    db.query('SELECT * FROM usuarios WHERE email = ? AND password = ?', [email, password], (error, results) => {
        if (error) {
            console.error('Error al realizar la consulta:', error);
            return res.status(500).send('Error interno del servidor');
        }

        if (results.length > 0) {
            // Usuario autenticado
            return res.send('Inicio de sesión exitoso');
        } else {
            // Credenciales incorrectas
            return res.send('Credenciales incorrectas');
        }
    });
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor Node.js iniciado en http://localhost:${port}`);
});
module.exports = {
    getIndex,
    getLogin,
    getSignUp,
    getGhosperClub,
    getProductList,
    getDunk1,
    getDunk2,
    getDunk3,
    getDunk4,
    getDunk5,
    getDunk6,
    getregister,
};
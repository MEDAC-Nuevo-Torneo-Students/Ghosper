const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const miruta = require('./routes/miruta');
const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(session({
    secret: 'secret', // Cambia esta cadena secreta
    resave: false,
    saveUninitialized: true
}));

// Configuración para servir archivos estáticos
app.use(express.static('public'));

// Plantillas
app.set('view engine', 'ejs');
app.set('views', './src/views');

// Rutas
// Aquí puedes agregar más rutas si es necesario
app.use('/', miruta);

// Iniciar el servidor
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});

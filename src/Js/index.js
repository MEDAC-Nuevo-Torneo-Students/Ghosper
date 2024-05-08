import  express  from "express";
import cookieParser from 'cookie-parser';
//Fix para __direname
import path from 'path';
import {fileURLToPath} from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
import {methods as authentication} from "../src/controller/authetication.controller.js"
import {methods as authorization} from "../middlewares/authorization.js";

//Server
const app = express();
app.set("port",3000);
app.listen(app.get("port"));
console.log("Servidor corriendo en puerto",app.get("port"));

//Configuración
app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(cookieParser())


//Rutas
app.get("/",authorization.soloPublico, (req,res)=> res.sendFile(__dirname + "/views/login.ejs"));
app.get("/register",authorization.soloPublico,(req,res)=> res.sendFile(__dirname + "/views/register.ejs"));
app.get("/admin",authorization.soloAdmin,(req,res)=> res.sendFile(__dirname + "/views/admin/admin.ejs"));
app.post("/api/login",authentication.login);
app.post("/api/register",authentication.register);
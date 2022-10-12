import express from "express";
import exphbs from "express-handlebars";
import indexRoutes from "./routes/index";
//CONFIGURACIÓN DEL PATH Y LAS CONCATENACIONES
import path from "path";
import { create } from 'express-handlebars';
import morgan from "morgan";

const app = express();
app.set("views", path.join(__dirname, "views"));

app.engine(
    ".hbs", //Identifica los archivos, en este caso .hbs
    create({           
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    defaultLayout: "main", 
    extname: ".hbs",
    }).engine
);
app.set("view engine", ".hbs");
//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false})); //Muestra lo que el usuario agrega en la parte de las tareas, titulo, descripción
//Routes
app.use(indexRoutes);

export default app;
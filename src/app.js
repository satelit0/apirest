'use strict';
import express from "express";
import cors from "cors";
import morgan from "morgan";
import taskRoutes from "./routes/task.routes";
//setting
const app = express();
app.set('port', process.env.PORT || 3000);

//middleware 
const confgCors = {}
app.use(cors(confgCors));  
//  app.use(cors({ 
//     origin:"http://localhost:3000"
// }));  
app.use(morgan('dev')); //ver las peticiones por consola
app.use(express.json()); //Leer archivos json

app.use(express.urlencoded({extended: false})); // permite las peticines post desde formularios html 
//routes  
app.get('/', (req, res) => {
    res.json({ message: "Este es un servicio backend" });
});

/*app.get('/', (req, res)=>{
});*/

app.use('/api/tasks', taskRoutes);
export default app;
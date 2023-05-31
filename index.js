const express = require("express");
const {connect} = require("./src/utils/db"); //importacion
const moviesRoutes = require("./src/api/routes/movies.routes")
const PORT = 7000;
const app = express();
connect();

app.use(express.json())  // siempre va sin excepcion 
app.use(express.urlencoded({extended:false}))  // siempre va sin excepcion 

app.use("/movies", moviesRoutes)

app.listen(PORT, () => console.log(`escuchando en el puerto http://localhost:${PORT}`)) // ultima linea que se ejecuta



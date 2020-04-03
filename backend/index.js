const express = require("express");
const path = require("path");
const morgan = require("morgan");
const cors = require("cors");
// inicializaciones 
const app = express();

// middlewares 
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

// routes 
app.use("/api/v1/departamento", require("./routes/departamento"));
app.use("/api/v1/empleado", require("./routes/empleado"));


// archivos estaticos del servidor 
app.use(express.static(path.join(__dirname,"public")));

// iniciado servidor 
app.listen(3000, ()=>{
    console.log("server on port 3000")
})
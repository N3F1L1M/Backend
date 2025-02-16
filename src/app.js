const express = require("express");
const cors = require("cors");
const errorHandler = require('./models/errorHandler');
const app = express();



//setting
app.set("port", process.env.PORT || 3000);



//middlewares
app.use(cors());
app.use(express.json());




//routes
app.use('/api/users', require('./routes/users'));
app.use('/api/Notes', require('./routes/notes'));
app.use('/api/prueba', require('./routes/prueba'));


// Middleware de manejo de errores 
app.use(errorHandler);

module.exports = app;

const express = require('express');
const mongoose = require("mongoose");
require ("dotenv").config();
const Rutas = require("./routes/rutas");

const app = express();

const port = process.env.PORT || 9000;
//middleware
app.use(express.json());
app.use('/api', Rutas);

//route
app.get('/', (req, res) =>{
    res.send("bienvenido a mi api")
})

//mongodb connect
mongoose.connect(process.env.MONGODB_URI).then(()=> console.log("connect to mongodb atlas"))
.catch((e) => console.log(e))


app.listen(port, () => console.log('el server esta escuchando en el puerto', port));


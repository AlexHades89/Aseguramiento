const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const Rutas = require("./routes/rutas");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

const corsOptions = {};
app.use(cors(corsOptions));

app.use(morgan("dev"));

const port = process.env.PORT || 9000;
//middleware
app.use(express.json());
app.use("/api", Rutas);

//route
app.get("/", (req, res) => {
  res.send("bienvenido a mi api");
});

//mongodb connect
mongoose
  .connect("mongodb://localhost:27017")
  .then(() => console.log("connect to mongodb"))
  .catch((e) => console.log(e));

app.listen(port, () =>
  console.log("el server esta escuchando en el puerto", port)
);

const express = require("express");
const pacienteSChema = require("../models/pacientesController");
const userSChema = require("../models/userController");
const doctorSChema = require("../models/doctorController");
const consultaSChema = require("../models/consultaController");
const router = express.Router();

//create paciente
router.post("/agregarpacientes", (req, res) => {
  const paciente = pacienteSChema(req.body);
  paciente
    .save()
    .then((data) => res.json(data))
    .catch((e) => res.json({ message: e }));
});

//obtener todos pacientes
router.get("/pacientes", (req, res) => {
  pacienteSChema
    .find()
    .then((data) => res.json(data))
    .catch((e) => res.json({ message: e }));
});

//obtener uno en especifico
router.get("/pacientes/:id", (req, res) => {
  const { id } = req.params;
  pacienteSChema
    .findById(id)
    .then((data) => res.json(data))
    .catch((e) => res.json({ message: e }));
});

//actualizar
router.put("/pacientes/:id", (req, res) => {
  const { id } = req.params;
  const { cui, name, age, direccion } = req.body;
  pacienteSChema
    .updateOne({ _id: id }, { $set: { cui, name, age, direccion } })
    .then((data) => res.json(data))
    .catch((e) => res.json({ message: e }));
});

//crear doctor
router.post("/doctor", (req, res) => {
  const doctor = doctorSChema(req.body);
  doctor
    .save()
    .then((data) => res.json(data))
    .catch((e) => res.json({ message: e }));
});

router.post("/user", async (req, res) => {
  const { user, email, password } = req.body;

  const userNew = userSChema({
    user,
    email,
    password: await userSChema.encryptPassword(password),
  });

    await userNew
    .save()
    .then((data) => res.json(data))
    .catch((e) => res.json({message: e}))
});

router.get("/user", (req, res) => {
  userSChema
    .find()
    .then((data) => res.json(data))
    .catch((e) => res.json({ message: e }));
});

module.exports = router;

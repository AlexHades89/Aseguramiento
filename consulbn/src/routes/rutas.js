const express = require("express");
const pacienteSChema = require("../models/pacientesController");
const userSChema = require("../models/userController");
const doctorSChema = require("../models/doctorController");
const consultaSChema = require("../models/consultaController");
const router = express.Router();
const jwt = require("jsonwebtoken")

//create paciente
router.post("/agregarpacientes", (req, res) => {
  const paciente = pacienteSChema(req.body);
  paciente
    .save()
    .then((data) => res.json(data))
    .catch((e) => res.json({ message: e }));
});

//obtener todos pacientes
router.get("/obtenerpacientes", (req, res) => {
  pacienteSChema
    .find()
    .then((data) => res.json(data))
    .catch((e) => res.json({ message: e }));
});

//obtener uno en especifico
router.get("/obtenerpacientes/:id", (req, res) => {
  const { id } = req.params;
  pacienteSChema
    .findById(id)
    .then((data) => res.json(data))
    .catch((e) => res.json({ message: e }));
});

//actualizar
router.put("/actualizarpacientes/:id", (req, res) => {
  const { id } = req.params;
  const { cui, name, age, direccion } = req.body;
  pacienteSChema
    .updateOne({ _id: id }, { $set: { cui, name, age, direccion } })
    .then((data) => res.json(data))
    .catch((e) => res.json({ message: e }));
});



//crear doctor
router.post("/doctoragregar", (req, res) => {
  const doctor = doctorSChema(req.body);
  doctor
    .save()
    .then((data) => res.json(data))
    .catch((e) => res.json({ message: e }));
});

router.get("/obtenerdoctor", (req, res) => {
  doctorSChema
    .find()
    .then((data) => res.json(data))
    .catch((e) => res.json({ message: e }));
});

//consulta
router.post("/agregarconsulta", async (req, res) => {
  const { cuiPaciente, namePaciente, Doctor, clinica } = req.body;
  const NewConsulta = consultaSChema({
    cuiPaciente,
    namePaciente,
    Doctor,
    clinica,
  });
  if (namePaciente) {
    const cuifound = await userSChema.findOne({ name: { $in: namePaciente } });
    NewConsulta.cuiPaciente = cuifound._id;
  }
  if (Doctor) {
    const doctorFound = await doctorSChema.findOne({
      nameDoctor: { $in: Doctor },
    });
    NewConsulta.Doctor = doctorFound._id;
  }
  new Promise(async (resolve, reject) => {
    try {
      const consultaNewData = await NewConsulta.save();
      resolve();
    } catch (e) {
      reject(e);
    }
  })
    .then(() => {
      res.status(204).send();
    })
    .catch((error) => {
      res.status(500).json({
        message:
          "Los datos no fueron creados correctamente, Error: ${error.message}",
      });
    });
});



router.get("/obtenerconsulta", (req, res) => {
  consultaSChema
    .find()
    .then((data) => res.json(data))
    .catch((e) => res.json({ message: e }));
});

//usuarios
router.post("/agregaruser", async (req, res) => {
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

router.get("/obteneruser", (req, res) => {
  userSChema
    .find()
    .then((data) => res.json(data))
    .catch((e) => res.json({ message: e }));
});


//login
router.post("/signin", async (req, res) =>{
  const { user, password } = req.body;
  const encontrado = await userSChema.findOne({
    user : user
  })
  if (!encontrado) return res.status(400).json({message: "usuario no encontrado"});
  const matchPassword = await userSChema.comparePassword(
    password,
    encontrado.password
  );
  if (!matchPassword) return res.status(400).json({message: "La contraseña no coincide"});
  const token = jwt.sign({ id: encontrado._id }, "hotsonjornetEntre", {
    expiresIn: 86400,
  });

  return res.status(200).json({
    token: token,
    message: "Login successful",
  });
})

module.exports = router;

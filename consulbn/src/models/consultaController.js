const mongoose = require("mongoose");

const consultaSChema = mongoose.Schema({
    cuiPaciente:{
        type: String,
        require: true
    },
    namePaciente: {
        type: String,
        require: true
    },
    Doctor: {
        type: String,
        require: true
    },
    clinica:{
        type: String,
        require: true
    }
});

module.exports = mongoose.model('consulta', consultaSChema);
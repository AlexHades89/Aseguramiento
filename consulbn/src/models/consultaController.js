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
        type: Number,
        require: true
    },
    clinica:{
        type: String,
        require: true
    },
    status: {
        type: Boolean,
        required: true,
        default: true,
        }
});

module.exports = mongoose.model('consulta', consultaSChema);
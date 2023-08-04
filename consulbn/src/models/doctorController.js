const mongoose = require("mongoose");

const doctorSChema = mongoose.Schema({
    cui:{
        type: String,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    clinica: {
        type: Number,
        require: true
    },
    colegiado:{
        type: String,
        require: true
    },
    status: {
        type: Boolean,
        required: true,
        default: true,
        }

});

module.exports = mongoose.model('doctor', doctorSChema);
const mongoose = require("mongoose");

const pacienteSChema = mongoose.Schema({
    cui:{
        type: String,
        require: true,
        unique: true,
        trim: true
    },
    name: {
        type: String,
        require: true
    },
    age: {
        type: Number,
        require: true
    },
    direccion:{
        type: String,
        require: true
    }

});

module.exports = mongoose.model('paciente', pacienteSChema);
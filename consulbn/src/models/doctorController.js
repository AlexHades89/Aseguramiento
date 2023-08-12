const mongoose = require("mongoose");

const doctorSChema = mongoose.Schema({
    cuidoctor:{
        type: String,
        require: true,
        unique: true,
        trim: true
    },
    namedoctor: {
        type: String,
        require: true
       
    },
    clinica: {
        type: Number,
      
    },
    colegiado:{
        type: String,
        unique: true
    }

});

module.exports = mongoose.model('doctor', doctorSChema);
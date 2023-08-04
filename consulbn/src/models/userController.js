const mongoose = require("mongoose");
const bcrypt =  require("bcryptjs");


const userSChema = mongoose.Schema(
{
    user: {
        type: String,
        unique: true,
    },

    email: {
        type: String,
        unique: true,
    },

    password: {
        type: String,
    },
    },
);

userSChema.statics.encryptPassword = async (password) => {
    try {
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
    } catch (error) {
    console.log(error);
    throw new Error(`Error al hashear el password ${error.message}`);
    }
};
userSChema.statics.comparePassword = async (password, receivePassword) => {
    return await bcrypt.compare(password, receivePassword);
};

module.exports = mongoose.model('User', userSChema);
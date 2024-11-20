
const { default: mongoose } = require("mongoose");


const adminSchema = new mongoose.Schema({
    name: {
        type: String,

    },
    email: {
        type: String,
    },
    password: {
        type: String,
    },
    gender: {
        type: String,
    },
    hobby: {
        type: Array,
    },
    image: {
        type: String,
    }
})

const admin = mongoose.model("adminTbl", adminSchema);

module.exports = admin;

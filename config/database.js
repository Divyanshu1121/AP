const mongoose = require('mongoose');

module.exports.db = async () => {
    try {
        await mongoose.connect("mongodb+srv://divu11480:12345@adminpanel.8tebc.mongodb.net/");
        console.log("Database Connected");
    } catch (error) {
        console.log(error);
    }
}
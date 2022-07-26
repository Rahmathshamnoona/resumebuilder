const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/resume', {});
        console.log("Mongodb connected succesfully");
    } catch (err) {
        console.log(err.message);
    }
}

module.exports = connectDB;
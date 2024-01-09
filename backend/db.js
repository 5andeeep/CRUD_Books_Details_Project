const mongoose = require("mongoose");

const db = mongoose.connect(process.env.MONGODB_URI).then(() => {
    console.log("MongoDB is successfully connected.");
}).catch((error) => console.log(error));

module.exports = db;
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();

// constants
const app = express();
const db = require("./db");
const BookRouter = require("./Routers/BookRouter");
app.use(cors());
app.use(express.json()); // middleware to read json data..
const PORT = process.env.PORT || 8001;


// Routers
app.use("/books", BookRouter);



app.get("/", (req, res) => {
    res.send("Server is running well.");
});





app.listen(PORT, () => {
    console.log(`Server is running on: http://localhost:${PORT}`);
});
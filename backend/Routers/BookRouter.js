const express = require("express");
const { addBook, displayBook, oneBookDisplay, updateBookDetails, deleteBook } = require("../Controllers/BookControllers");
const BookRouter = express.Router();


// router to display books library..
BookRouter.get("/", displayBook);
// router to add book in library
BookRouter.post("/add", addBook);
// router to display only one book..
BookRouter.get("/book/:id", oneBookDisplay);
// router to update a book details
BookRouter.put("/update/:id", updateBookDetails);
// router to delete a book from library
BookRouter.delete("/delete/:id", deleteBook);


module.exports = BookRouter;
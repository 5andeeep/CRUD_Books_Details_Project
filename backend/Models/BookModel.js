const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    bookName: {
        type: String,
        required: true,
    },
    book_description: {
        type: String,
        required: true,
    },
    authorName: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        default: 100
    },
    image: {
        type: String,
        required: true
    }
});

const Book = mongoose.model("books", bookSchema);
module.exports = Book;
const Book = require("../Models/BookModel");


// controller to add books and in library..
const addBook = async (req, res) => {
    const { bookName, book_description, authorName, price, image } = req.body;

    if (!bookName || !book_description || !authorName || !image) {
        return res.send({
            status: 400,
            message: "Please fill all details."
        });
    }
    try {
        const bookObj = new Book({
            bookName,
            book_description,
            authorName,
            price,
            image
        });
        await bookObj.save();
        res.send({
            status: 201,
            message: "Book added successfully.",
            data: bookObj
        });
    } catch (error) {
        return res.send({
            status: 400,
            message: "Failed to add book.",
            error: error
        });
    }
};


// to display the data..
const displayBook = async (req, res) => {
    try {
        const booksData = await Book.find();
        res.send({
            status: 200,
            message: "Books data fetched successfully.",
            data: booksData
        });
    } catch (error) {
        return res.send({
            status: 400,
            message: "Failed to fetch books data."
        });
    }
};

// to display only one book
const oneBookDisplay = async (req, res) => {
    const bookId = req.params.id;
    if (!bookId) {
        return res.send({
            status: 400,
            message: "Please provide book Id."
        });
    }
    try {
        const bookOne = await Book.findById(bookId);
        if (!bookOne) {
            return res.send({
                status: 200,
                message: "No book available with this Book Id.",
                data: bookOne
            })
        }
        res.send({
            status: 200,
            message: "Successfull",
            data: bookOne
        })
    } catch (error) {
        return res.send({
            status: 500,
            message: "This book is not available."
        });
    }
}

// controller to update a book details
const updateBookDetails = async (req, res) => {
    const bookId = req.params.id;

    if (!bookId) {
        return res.send({
            status: 400,
            message: "Please provide book Id."
        });
    }
    try {
        await Book.findByIdAndUpdate(bookId, {
            bookName: req.body.bookName,
            book_description: req.body.book_description,
            authorName: req.body.authorName,
            price: req.body.price,
            image: req.body.image
        });
        res.send({
            status: 200,
            message: "Successfully Updated"
        });
    } catch (error) {
        return res.send({
            status: 400,
            message: "Failed to update",
            error: error
        });
    }
}


// controller to delete a book from library..
const deleteBook = async (req, res) => {
    const bookId = req.params.id;
    if (!bookId) {
        return res.send({
            status: 400,
            message: "Please provide book Id"
        });
    }
    try {
        await Book.findByIdAndDelete(bookId);
        res.send({
            status: 200,
            message: "Book has been deleted successfully."
        });
    } catch (error) {
        return res.send({
            status: 400,
            message: "Failed to delete the book."
        });
    }
}


module.exports = { addBook, displayBook, oneBookDisplay, updateBookDetails, deleteBook };
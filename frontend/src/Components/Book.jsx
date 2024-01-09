import axios from "axios";
import "./style.css";
import React from "react";
import { useNavigate } from "react-router-dom";

const Book = ({ book }) => {
  const navigate = useNavigate();

  // api call to delete a book..
  const deleteBook = async (bookId) => {
    try {
      await axios.delete(`http://localhost:8000/books/delete/${bookId}`);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="book-card">
      <div className="img-div">
        <img src={book.image} alt={book.bookName} />
      </div>
      <div className="text-content">
        <h4>{book.bookName}</h4>
        <h6>By {book.authorName}</h6>
        <p>{book.book_description}</p>
        <h5>Rs. {book.price}</h5>
        <div className="ops-btn">
          <button
            id="update-btn"
            onClick={() => {
              navigate(`/books/${book._id}`);
            }}
          >
            Update
          </button>
          <button id="delete-btn" onClick={() => deleteBook(book._id)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Book;

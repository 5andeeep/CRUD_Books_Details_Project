import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddBook = () => {
  const [bookName, setBookName] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(100);
  const [image, setImage] = useState("");

  const navigate = useNavigate();

  const addBook = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("http://localhost:8000/books/add", {
        bookName: bookName,
        authorName: authorName,
        book_description: description,
        price: price,
        image: image,
      });
      console.log(data.data);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="add-book">
      <h1>Add New Book</h1>
      <form className="form">
        <div>
          <label htmlFor="bookname">Book Name</label>
          <input
            type="text"
            id="bookname"
            value={bookName}
            onChange={(e) => setBookName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="authorname">Author Name</label>
          <input
            type="text"
            name="authorname"
            id="authorname"
            value={authorName}
            onChange={(e) => setAuthorName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea
            type="text"
            id="description"
            rows={15}
            cols={20}
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="price">Price</label>
          <input
            type="number"
            name="price"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="bookimage">Book Image Url</label>
          <input
            type="text"
            name="bookimage"
            id="book-image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <button onClick={addBook} id="add-book-btn">
          Add Book
        </button>
      </form>
    </div>
  );
};

export default AddBook;

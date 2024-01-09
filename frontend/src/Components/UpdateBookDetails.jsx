import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdateBookDetails = () => {
  const [inputs, setInputs] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:8000/books/book/${id}`
        );
        console.log(data.data);
        setInputs(data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchBook();
  }, [id]);

  // update the book details with handleSubmit function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8000/books/update/${id}`, {
        bookName: inputs.bookName,
        authorName: inputs.authorName,
        price: inputs.price,
        book_description: inputs.book_description,
        image: inputs.image,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  // managing change in input tags...
  const handleChange = (e) => {
    // console.log(e.target.name, "Value", e.target.name);
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="add-book">
      <h1>Update Book Details</h1>
      {inputs && (
        <form className="form" onSubmit={handleSubmit}>
          <div>
            <label>Book Name</label>
            <input
              type="text"
              id="bookname"
              value={inputs.bookName}
              onChange={handleChange}
              name="bookName"
            />
          </div>
          <div>
            <label>Author Name</label>
            <input
              type="text"
              name="authorName"
              id="authorname"
              value={inputs.authorName}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Description</label>
            <textarea
              type="text"
              id="description"
              rows={15}
              cols={20}
              name="book_description"
              value={inputs.book_description}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Price</label>
            <input
              type="number"
              name="price"
              id="price"
              value={inputs.price}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Book Image Url</label>
            <input
              type="text"
              name="image"
              id="book-image"
              value={inputs.image}
              onChange={handleChange}
            />
          </div>
          <button type="submit" id="add-book-btn">
            Update Book
          </button>
        </form>
      )}
    </div>
  );
};

export default UpdateBookDetails;

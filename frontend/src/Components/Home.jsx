import React, { useEffect, useState } from "react";
import axios from "axios";
import Book from "./Book";

const Home = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    displayBooks();
  }, []);

  // to fetch data..
  const displayBooks = async () => {
    try {
      const { data } = await axios.get("http://localhost:8000/books");
      // console.log(data.data);
      setBooks(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="home">
      {books &&
        books.map((book, key) => (
          <div key={key}>
            <Book book={book} />
          </div>
        ))}
    </div>
  );
};

export default Home;

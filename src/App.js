import React, { useState } from "react";
import "./App.css";
import axios from "axios";

const App = () => {
  const [getBookName, setGetBookName] = useState("");
  const [books, setBooks] = useState([]);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(
        "https://www.googleapis.com/books/v1/volumes?q=" +
          getBookName +
          "&key=AIzaSyAuT2iwo4Ynoe-ZYos5Bd7n7KEC3dIWBU8 &maxResults=40"
      )
      .then((data) => {
        setBooks(data.data.items);
        console.log(data.data.items);
      });
  };

  return (
    <div className="App">
    <h3 className="text-center m-3">Find Books in Google's Shelf</h3>
      <form
        className="mx-auto"
        action=""
        onSubmit={handleSubmit}
        style={{ width: "50%" }}
      >
        <input
          placeholder="Enter the name of a book"
          className="form-control m-5"
          type="text"
          onChange={(e) => setGetBookName(e.target.value)}
        />
        <button className="btn btn-success m-5" type="submit">
          Submit
        </button>
      </form>

      <div>
        {books.map((book) => (
          <a key={book.id} target="blank" href={book.volumeInfo.previewLink}>
            <img
              src={book.volumeInfo.imageLinks.thumbnail}
              alt={book.volumeInfo.title}
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default App;

import { useState } from "react";
import "./Book.css";

function Books() {
  const [searchWord, setSearchWord] = useState("");
  const [searchResult, setSearchResult] = useState("");

  function getRandomBookNames() {
    if (searchWord === "") {
      setSearchResult("Please enter name of the book");
      return;
    }

    fetch(`https://openlibrary.org/search.json?title=${searchWord}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.docs.length === 0) {
          setSearchResult("No books found");
        } else {
          const book = data.docs[0];
          const title = book.title;
          const author = book.author_name
            ? book.author_name[0]
            : "Unknown";

          setSearchResult(`📖 ${title} by ${author}`);
        }
      })
      .catch(() => {
        setSearchResult("Something went wrong");
      });
  }

  return (
    <div className="books">
      <h1>Discover Books here 📚</h1>

      <div className="search-box">
        <input
          type="text"
          placeholder="Search for book"
          value={searchWord}
          onChange={(e) => setSearchWord(e.target.value)}
        />

        <button
          onClick={getRandomBookNames}
          className="btn btnprimary"
        >
          🔍
        </button>
      </div>

      <p>{searchResult}</p>
    </div>
  );
}

export default Books;


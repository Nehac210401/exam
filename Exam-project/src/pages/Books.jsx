import { useState, useEffect, useCallback } from "react";
import { useLocation } from "react-router-dom";
import "./Book.css";

function Books() {
  const [searchWord, setSearchWord] = useState("");
  const [searchResult, setSearchResult] = useState("");
  const [loading, setLoading] = useState(false);

  const location = useLocation();
  const query = new URLSearchParams(location.search).get("query") || "";

  // Wrap function in useCallback so it can be safely used in useEffect
  const getRandomBookNames = useCallback(
    (word) => {
      const search = word || searchWord;
      if (!search) {
        setSearchResult("Please enter name of the book");
        return;
      }

      setLoading(true);
      setSearchResult("");

      fetch(`https://openlibrary.org/search.json?title=${search}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.docs.length === 0) {
            setSearchResult("No books found");
          } else {
            const book = data.docs[0];
            const title = book.title;
            const author = book.author_name ? book.author_name[0] : "Unknown";

            setSearchResult(`📖 ${title} by ${author}`);
          }
          setLoading(false);
        })
        .catch(() => {
          setSearchResult("Something went wrong");
          setLoading(false);
        });
    },
    [searchWord] // dependency for useCallback
  );

  // Trigger search if query exists
  useEffect(() => {
    if (query) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setSearchWord(query);
      getRandomBookNames(query);
    }
  }, [query, getRandomBookNames]); // include getRandomBookNames here

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
          onClick={() => getRandomBookNames()}
          className="btn btnprimary"
        >
          🔍
        </button>
      </div>

      <div>{loading ? <p>Loading...</p> : <p>{searchResult}</p>}</div>
    </div>
  );
}

export default Books;

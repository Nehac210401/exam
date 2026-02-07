import { useState, useEffect, useCallback } from "react";
import { useLocation } from "react-router-dom";
import BookDetails from "../components/BookDetails";
import "./Book.css";

function Books() {
  const [searchWord, setSearchWord] = useState("");
  const [book, setBook] = useState(null);
  const [searchResult, setSearchResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
 

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
      setBook(null);
      setIsFavorite(false);

      fetch(`https://openlibrary.org/search.json?title=${search}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.docs.length === 0) {
            setSearchResult("Ingen bok hittades");
            setBook(null);
          } else {
            const foundBook = data.docs[0];

            setBook({
              tittle: foundBook.title,
              author: foundBook.author_name
                ? foundBook.author_name[0]
                : "Unknown",
            });
            setSearchResult("");
          }
          setLoading(false);
        })
        .catch(() => {
          setSearchResult("Något gick fel, förska igen");
          setBook(null);
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
      <h1>Hitta bok här 📚</h1>

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

        
       {loading && <p>Loading...</p>}

    {!loading && book && (
      // ✅ Use BookDetails here
      <BookDetails
        book={book}
        isFavorite={isFavorite}
        onToggleFavorite={() => setIsFavorite(prev => !prev)}
      />
    )}
     {!loading && searchResult && <p>{searchResult}</p>}
  </div>
);
}

export default Books;

import React from "react";
import BookCard from "./BookCard";

function BookDetails({ book, isFavorite, onToggleFavorite }) {
  return (
    <div className="book-details">
      <BookCard tittle={book.tittle} author={book.author} />

      <button className="btn btnprimary" onClick={onToggleFavorite}>
        {isFavorite ? "💖 Favorit" : "🤍 Lägg till favorit"}
      </button>
    </div>
  );
}

export default BookDetails;

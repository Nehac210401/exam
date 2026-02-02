function BookCard({ tittle, author}) {
    return (
        <div className="book-card">
            <h2>{tittle}</h2>
            <p>Author: {author}</p>
        </div>
    );
}
export default BookCard;

import './Book.css';


function Books() {
  

  return (
    <>
    <div className="books">
    <h1>Discover Books here 📚</h1>
    <div className="search-box">
        <input 
        type="text"
        id="searchInput"
        placeholder="Search for book" />
        <button className="btn btnprimary" id="searchBtn">
            <i className="fa-solid fa-magnifying-glass"> </i>
        </button>
    </div>
   

    </div>
    </>
  )
}

export default Books;

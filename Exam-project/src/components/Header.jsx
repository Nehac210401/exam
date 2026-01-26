import { Link } from "react-router-dom";

import './HeadFoot.css';

function Header() {
  return (
    <header>
      <ul className="navheader">
        <li>
          <Link className="btn" to="/">Home</Link>
        </li>
        <li>
          <Link className="btn" to="/books">Books</Link>
        </li>
        <li>
          <Link className="btn" to="/contact">Contact Us</Link>
        </li>
        <li>
      
        </li>
      </ul>
    </header>
  );
}

export default Header;


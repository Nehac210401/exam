import {Link} from "react-router-dom";

function NotFound(){
    return (
        <>
        <h1>404</h1>
        <h2>Page not Found</h2>
        <p>Sorry the page you are looking is not found. 😕</p>

        <Link to="/" className="btn btnprimary">
            Home
        </Link > 
        </>
        
    );

}

export default NotFound;
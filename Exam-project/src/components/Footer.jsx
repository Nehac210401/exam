
import './HeadFoot.css'

function Footer() {
  return (
       <footer>
        <ul className="socialmedia">

           
             <li><a href='https://www.facebook.com' target='_blank'><img className="socialimg" src="./assets/socialmediaicons/facebook copy.svg" alt="Facebook"/></a></li> 
            <li> <a href='https://www.linkedin.com' target='_blank'><img className="socialimg" src="./assets/socialmediaicons/linkedin copy.svg" alt="Linkedin"/></a></li>
            <li> <a href='https://www.instagram.com' target='_blank'><img className="socialimg" src="./assets/socialmediaicons/instagram copy.svg" alt="Instagram"/></a></li>
            
        </ul>
        <p>A place for booklovers!</p>
    </footer>
  );
}

export default Footer;


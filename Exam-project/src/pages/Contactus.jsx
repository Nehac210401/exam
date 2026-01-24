
import { Link } from "react-router-dom";
import "./Contactus.css";

function Contactus() {
  

  return (
    <>
    <div className="about-us">

      {/* Visit Section */}
      <section className="visit">
        <h3>Visit us at</h3>

        <p className="address">
          ShopCenturm, Shop No 12, <br />
          12578, Malmö.
          <br />
          <i className="fa-solid fa-phone"></i>: 76903783
          <br />
          <i className="fa-regular fa-message"></i>: jeanettebooskshop@gmail.com
        </p>
      </section>

      {/* Website Section */}
      <section className="website">
        <p>You can also visit our website for more information</p>

      
      </section>

      {/* Opening Timings Section */}
      <section className="openingtimings">
        <h3>Our Opening Timing</h3>

        <ul className="timing">
          <li>Monday - Thursday: 10am to 18pm</li>
          <li>Friday: 10am to 20pm</li>
          <li>Saturday: 10am to 14pm</li>
          <li className="holiday">Sunday: Closed</li>
        </ul>
      </section>

    </div>
   
    </>
  )
}

export default Contactus;

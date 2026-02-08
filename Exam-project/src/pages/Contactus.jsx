import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Contactus.module.css";

export default function Contactus() {
  const MAX_CHAR = 1000;
  const [text, setText] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text.trim()) {
      alert("Vänligen skriv innan du skickar in");
      return;
    }

    console.log("Feedback Submitted", text);
    setMessage("Tack för feedbacken!!");
    setText("");
     setTimeout(() => setMessage(""), 5000);
  };

  return (
    <div className={styles["about-us"]}>
      {/* Visit Section */}
      <section className={styles.visit}>
        <h3>Besök oss</h3>
        <p className={styles.address}>
          KöpCentrum, köp nummer 12,<br />
          12578, Uppsala.<br />
          <i className="fa-solid fa-phone" />: 76903783<br />
          <i className="fa-regular fa-message" />: jeanettebooskshop@gmail.com
        </p>
      </section>

      {/* Website Section */}
      <section className={styles.website}>
        <p>Du kan hitta mer information på vår webplast.</p>
      </section>

      {/* Opening Timings Section */}
      <section className={styles.openingtimings}>
        <h3>Oppnings Tider</h3>
        <ul className={styles.timing}>
          <li>Måndagen - Torsdagen: 10am to 18pm</li>
          <li>Fredagen: 10am to 20pm</li>
          <li>Lördagen: 10am to 14pm</li>
          <li className={styles.holiday}>Söndagen: Stäng</li>
        </ul>
      </section>

      {/* Feedback Form */}
      <section className={styles.feedbackform}>
        <h3>Örn för dina tankar om oss</h3>
         {message && <p className={styles.feedbackMessage}>{message}</p>}
        <form onSubmit={handleSubmit}>
          <textarea
            className={styles.textarea}
            placeholder="Please write here..."
            maxLength={MAX_CHAR}
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          <div className={styles["counter-container"]}>
            <p>
              Total Characters: <span className={styles["total-counter"]}>{text.length}</span>
            </p>
            <p>
              Remaining: <span className={styles["remaining-counter"]}>{MAX_CHAR - text.length}</span>
            </p>
          </div>

          <button type="submit" className={`${styles.btn} ${styles.btnprimary}`}>
            Submit Feedback
          </button>
          {message && <p className={styles.feedbackMessage}>{message}</p>}
        </form>
      </section>
    </div>
  );
}

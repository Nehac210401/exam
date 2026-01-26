import { useState } from "react";

import './Home.css';

function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  function handleLogin(e) {
    e.preventDefault();

    if (username.trim() === "") {
      alert("Please enter your name");
      return;
    }

    setIsLoggedIn(true);
  }

  function handleLogout() {
    setIsLoggedIn(false);
    setUsername("");
  }
  

  return (
    <>

    {/* 🔐 LOGIN FORM (shown only if NOT logged in) */}
      {!isLoggedIn && (
        <div className="login-box">
          <h2>Login</h2>

             <form onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="Enter your name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

             <button className="btn btnprimary" type="submit">
              Login
            </button>
          </form>
        </div>
      )}

      {/* 🏠 HOME CONTENT (always visible) */}

    <h1>Jeanettes bookstore 📚</h1>
    <h2>Welcome to our BookStore</h2>
    <img src="https://plus.unsplash.com/premium_photo-1669652639337-c513cc42ead6?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Ym9va3xlbnwwfHwwfHx8MA%3D%3D" alt="book"
    style={{width:"100%", maxWidth: "500px", height:"auto"}} />
    <p>Discover your passion for reading, imagination and much more. While discoveing books.</p>

      {/* LOGOUT (shown only if logged in) */}
      {isLoggedIn && (
        <button className="btn btnsecondary" onClick={handleLogout}>
          Logout
        </button>
      )}

    </>

  )
}

export default Home;

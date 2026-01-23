import {Link} from "react-router-dom";
import { Routes, Route} from "react-router-dom";

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import Books from './pages/Books';
import Contactus from './pages/Contactus';


import './App.css'

function App() {
  

  return (
    <>
       <div>
      <Header />  {/* This must be here */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/contact" element={<Contactus />} />
      </Routes>
      <Footer/>
      </div>
   
    </>
  )
}

export default App

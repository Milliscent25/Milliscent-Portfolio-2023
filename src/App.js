import React from 'react';
import { BrowserRouter,  Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
// import { ScrollContainer } from 'react-scroll-motion';
// import Aos from "aos";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';




//pages;
import Home from './Pages/Home'
import About from './Pages/About'
import Portfolio from './Pages/Portfolio'
import Contact from './Pages/Contact'






function App() {
  return (

    <BrowserRouter>
  <Navbar/>
      <main className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="Contact" element={<Contact />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;

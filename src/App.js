import { useState } from 'react';
import logo from './Image/logo.png';
import './App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const newClass = isMenuOpen ? 'hamLink' : '';

  return (
    <header className={`App ${isMenuOpen ? 'active' : 'not-active'}`}>
      <div className="logo">
        <img src={logo} alt="logo png" />
      </div>
      <div
        className={`hamburger ${isMenuOpen ? 'open' : 'close'}`}
        onClick={() => {
          setIsMenuOpen((isMenuOpen) => !isMenuOpen);
        }}
      >
        <div className="burger burger1"></div>
        <div className="burger burger2"></div>
        <div className="burger burger3"></div>
      </div>
      <nav>
        <ul className={newClass}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#about">About Us</a>
          </li>
          <li>
            <a href="#contact">Contact Us</a>
          </li>
          <li>
            <a href="#more">More</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default App;

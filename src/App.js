import { useState } from 'react';
import logo from './Image/logo.png';
import './App.css';

function App() {
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  };

  const newClass = menu ? 'hamLink' : '';

  console.log(newClass);

  console.log(menu);

  return (
    <div className={`App ${menu ? 'active' : 'not-active'}`}>
      <div className="logo">
        <img src={logo} alt="logo png" />
      </div>
      <div
        className={`hamburger ${menu ? 'open' : 'close'}`}
        onClick={handleMenu}
      >
        <div className="burger burger1"></div>
        <div className="burger burger2"></div>
        <div className="burger burger3"></div>
      </div>
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
    </div>
  );
}

export default App;

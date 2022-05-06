import { useState } from 'react';
import './App.css';

function App() {
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className={`App ${menu ? 'active' : 'not-active'}`}>
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>More</li>
      </ul>
      <div className="hamburger" onClick={handleMenu}>
        <div className="burger "></div>
        <div className="burger"></div>
        <div className="burger"></div>
      </div>
    </div>
  );
}

export default App;

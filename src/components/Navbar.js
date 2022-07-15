import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './css/Navbar.css';

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const links = [{
    id: 1,
    path: '/',
    text: 'Home',
  }, {
    id: 2,
    path: '/calculator',
    text: 'Calculator',
  }, {
    id: 3,
    path: '/quote',
    text: 'Quote',
  },

  ];
  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  const closeMenu = () => {
    setNavbarOpen(false);
  };

  return (
    <nav className="navBar">
      <button type="submit" onClick={handleToggle}>{navbarOpen ? 'x' : '☰'}</button>
      <h2>Math Magician</h2>
      <ul className={`menuNavDesktop ${navbarOpen ? 'showMenu' : 'hideMenu'}`}>
        {links.map((link) => (
          <li key={link.id}>
            <NavLink onClick={() => closeMenu()} to={link.path}>{link.text}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;

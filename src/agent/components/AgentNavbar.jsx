import { useState } from 'react';
import { Link } from 'react-router-dom';
import LayoutContainer from '../../components/Layout';
import style from '../styles/component.module.css';
import { FaBars, FaTimes } from 'react-icons/fa';

const AgentNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { id: 1, name: "login", path: "/agent/login" },
    { id: 2, name: "register", path: "/agent/register" },
    { id: 3, name: "post a property", path: "/agent/post-a-property" },
    { id: 4, name: "my properties", path: "/agent/my-properties" },
    { id: 5, name: "profile", path: "/agent/profile" },
    { id: 6, name: "logout", path: "/" },
  ];

  return (
    <LayoutContainer>
      <div className={style.navbarContainer}>
        <h1>askLuxor</h1>
        <div className={style.menuIcon} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={`${style.menus} ${menuOpen ? style.menuOpen : ''}`}>
          {links.map((i) =>
            <li key={i.id}>
              <Link to={i.path} onClick={() => setMenuOpen(false)}>
                {i.name}
              </Link>
            </li>
          )}
        </ul>
      </div>
    </LayoutContainer>
  );
};

export default AgentNavbar;

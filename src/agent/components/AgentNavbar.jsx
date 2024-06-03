import { useState } from 'react';
import { Link } from 'react-router-dom';
import LayoutContainer from '../../components/Layout';
import style from '../styles/component.module.css';
import { FaBars, FaTimes } from 'react-icons/fa';

const AgentNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
const user= 
{
  // role:"ADMIN",
}
const links = !localStorage.getItem('token') ? [
  { id: 1, name: "login", path: "/agent/login" },
  { id: 2, name: "register", path: "/agent/register" },
] : user.role === "ADMIN" ? [
  { id: 1, name: "Admin Dashboard", path: "/agent/admin/dashboard" },
] : [
  { id: 1, name: "post a property", path: "/agent/post-a-property" },
  { id: 2, name: "my properties", path: "/agent/my-properties" },
  { id: 3, name: "profile", path: "/agent/profile" },
  // { id: 4, name: "logout", path: "/" },
];


  return (
    <LayoutContainer bgColor={"#91B029"}>
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
          { localStorage.getItem('token')  && <li><Link onClick={()=> {
            localStorage.clear();
          }} to={'/'}>logout</Link></li>}
        </ul>
      </div>
    </LayoutContainer>
  );
};

export default AgentNavbar;

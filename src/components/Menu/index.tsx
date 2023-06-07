import './styles.scss';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';

function Menu() {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src={logo} alt="Logo quizzify" className="navbar__logo-image" />
        <h1 className="navbar__logo-title">Quizzify</h1>
      </div>
      <div className="navbar__links">
        <NavLink to="/" className="menu__link">Accueil</NavLink>
        <NavLink to="/about" className="menu__link">Quiz</NavLink>
        <NavLink to="/contact" className="menu__link">Profile</NavLink>
      </div>
    </nav>
  );
}

export default Menu;

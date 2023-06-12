import './styles.scss';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';

function Menu() {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={logo} alt="Logo quizzify" className="header__logo-image" />
        <h1 className="header__logo-title">Quizzify</h1>
      </div>
      <nav className="menu">
        <NavLink to="/" className="menu-link">Accueil</NavLink>
        <NavLink to="/quiz" className="menu-link">Quiz</NavLink>
        <NavLink to="/profile" className="menu-link">Profile</NavLink>
      </nav>
    </header>
  );
}

export default Menu;

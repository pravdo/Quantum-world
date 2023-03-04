import { NavLink } from 'react-router-dom';
import CustomLink from '../CustomLink';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="nav">
      <NavLink to="/" className="site">
        QW - Explore all in one place
      </NavLink>
      <ul>
        <CustomLink to="/profile">Profile</CustomLink>
        <CustomLink to="/articles">Articles</CustomLink>
        <CustomLink to="/shopping-cart">Shopping Cart</CustomLink>
        <CustomLink to="/image-search">Search Image</CustomLink>
      </ul>
    </nav>
  );
};

export default Navbar;

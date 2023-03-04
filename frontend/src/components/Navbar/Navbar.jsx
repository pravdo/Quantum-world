import { NavLink, useMatch, useResolvedPath } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="nav">
      <NavLink to="/" className="site">
        QW - Explore all in one place
      </NavLink>
      <ul>
        <CustomLink to="/profile">Profile</CustomLink>
        <CustomLink to="/shopping-cart">Shopping Cart</CustomLink>
      </ul>
    </nav>
  );
};

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  console.log(isActive);

  return (
    <li className={isActive ? 'active' : ''}>
      <NavLink to={to} {...props}>
        {children}
      </NavLink>
    </li>
  );
}

export default Navbar;

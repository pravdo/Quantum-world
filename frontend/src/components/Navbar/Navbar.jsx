import { Typography, useTheme } from '@mui/material';

import { NavLink, useNavigate } from 'react-router-dom';
import CustomLink from '../CustomLink';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const primaryLight = theme.palette.primary.light;

  return (
    <nav className="nav">
      {/* <NavLink to="/" className="site">
        QW - Explore all in one place
      </NavLink> */}
      <Typography
        fontWeight="bold"
        fontSize="clamp(1rem, 2rem, 2.25rem)"
        color="primary"
        onClick={() => navigate('/')}
        sx={{
          '&:hover': {
            color: primaryLight,
            cursor: 'pointer',
          },
        }}
      >
        QW - Explore all in one place
      </Typography>
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

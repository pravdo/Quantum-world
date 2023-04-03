import { Typography, useTheme } from '@mui/material';
import CartButton from 'components/ShoppingCart_Components/CartButtons';

import { useNavigate } from 'react-router-dom';
import CustomLink from '../CustomLink';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const primaryLight = theme.palette.primary.light;

  return (
    <nav className="nav">
      <Typography
        fontWeight="bold"
        fontSize="clamp(1rem, 2rem, 2.25rem)"
        color="primary"
        onClick={() => navigate('/home')}
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
        <CustomLink to="/online-store">Online Store</CustomLink>
        <CartButton />
        <CustomLink to="/image-search">Search Image</CustomLink>
      </ul>
    </nav>
  );
};

export default Navbar;

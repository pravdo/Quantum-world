import { Navbar } from 'react-bootstrap';
import CustomLink from './CustomLink';
import './Header.css';
import { ReactComponent as Logo } from '../images/textLogo.svg';
import { ReactComponent as MainLogo } from '../images/main-logo.svg';

const navbarStyle = {
  backgroundColor: '#eeeeee',
};

const Header = ({ title }) => {
  return (
    <header className="header">
      <Navbar style={navbarStyle} variant="light">
        {/* <Container> */}
        <MainLogo
          alt={title}
          style={{ maxWidth: '20rem', maxHeight: '10rem' }}
        />
        <Logo alt={title} style={{ maxWidth: '14rem', maxHeight: '3rem' }} />
        <ul>
          <CustomLink to="/login">Login</CustomLink>
          <CustomLink to="/register">Register</CustomLink>
        </ul>
        {/* </Container> */}
      </Navbar>
    </header>
  );
};

export default Header;

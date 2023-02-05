import { Navbar, Container } from 'react-bootstrap';
import { ReactComponent as Logo } from '../images/textLogo.svg';

const navbarStyle = {
  backgroundColor: '#eeeeee',
};

const Header = ({ title }) => {
  return (
    <Navbar style={navbarStyle} variant="light">
      <Container>
        <Logo style={{ maxWidth: '14rem', maxHeight: '3rem' }} />
      </Container>
    </Navbar>
  );
};

export default Header;

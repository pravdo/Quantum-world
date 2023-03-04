import { Navbar } from 'react-bootstrap';
import { ReactComponent as Logo } from '../images/textLogo.svg';
import { ReactComponent as MainLogo } from '../images/main-logo.svg';

const navbarStyle = {
  backgroundColor: '#eeeeee',
};

const Header = ({ title }) => {
  return (
    <Navbar style={navbarStyle} variant="light">
      {/* <Container> */}
      <MainLogo alt={title} style={{ maxWidth: '20rem', maxHeight: '10rem' }} />
      <Logo alt={title} style={{ maxWidth: '14rem', maxHeight: '3rem' }} />
      {/* </Container> */}
    </Navbar>
  );
};

export default Header;

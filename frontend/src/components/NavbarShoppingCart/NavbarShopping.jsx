import { useSelector } from 'react-redux';
import styled from 'styled-components';
import CustomLink from 'components/CustomLink';

const NavbarShopping = () => {
  const isAuth = Boolean(useSelector((state) => state.token));

  return (
    <NavShoppingContainer>
      <div className="nav-center">
        {/* <div className='nav-header'> */}
        {/* <button type='button' className='nav-toggle' onClick={openSidebar}>
            <FaBars />
          </button> */}
        {/* </div> */}
        {/* <ul> */}
        {/* {links.map((link) => {
            const { id, text, url } = link
            return (
              <li key={id}>
                <Link to={url}>{text}</Link>
              </li>
            )
          })} */}
        {isAuth && (
          <div className="nav-links">
            <CustomLink to="/checkout">Checkout</CustomLink>
          </div>
        )}
        {/* </ul> */}
        {/* <CartButtons /> */}
      </div>
    </NavShoppingContainer>
  );
};

const NavShoppingContainer = styled.nav`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  .nav-center {
    margin: 0 auto;
  }
  .cart-btn-wrapper {
    display: none;
  }
  @media (min-width: 992px) {
    .nav-toggle {
      display: none;
    }
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }
    .nav-links {
      display: flex;
      list-style-type: none;
      justify-content: center;
      li {
        margin: 0 0.5rem;
      }
      a {
        color: var(--clr-grey-3);
        font-size: 1rem;
        letter-spacing: var(--spacing);
        padding: 0.5rem;
        text-decoration: none;
      }
    }
    .cart-btn-wrapper {
      display: grid;
    }
  }
`;

export default NavbarShopping;

import NavbarShopping from 'components/NavbarShoppingCart/NavbarShopping';
import { CartProvider } from 'context/cart_context';
import CartPage from 'pages/Cart/Cart';

const CartForProducts = () => {
  return (
    <>
      <NavbarShopping />
      <CartProvider>
        <CartPage />
      </CartProvider>
    </>
  );
};

export default CartForProducts;

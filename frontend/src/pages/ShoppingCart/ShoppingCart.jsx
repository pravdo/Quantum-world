import NavbarShopping from 'components/NavbarShoppingCart/NavbarShopping';
import ProductsPage from 'pages/Products/Products';
// import { FilterProvider } from 'context/filter_context';
// import { CartProvider } from 'context/cart_context';
// import CartPage from 'pages/Cart/Cart';

const ShoppingCart = () => {
  return (
    <>
      <NavbarShopping />
      {/* <FilterProvider> */}
      {/* <CartProvider> */}
      <ProductsPage />
      {/* <CartPage /> */}
      {/* </CartProvider> */}
      {/* </FilterProvider> */}
    </>
  );
};

export default ShoppingCart;

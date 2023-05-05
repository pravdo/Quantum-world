import NavbarShopping from 'components/NavbarShoppingCart/NavbarShopping';
import ProductsPage from 'pages/Products/Products';
import { FilterProvider } from 'context/filter_context';

const ShoppingCart = () => {
  return (
    <>
      <NavbarShopping />
      <FilterProvider>
        <ProductsPage />
      </FilterProvider>
    </>
  );
};

export default ShoppingCart;

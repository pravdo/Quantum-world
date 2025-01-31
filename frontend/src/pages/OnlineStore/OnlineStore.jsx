import { PRODUCTS } from '../../products';
import Product from './product';
import './OnlineStore.css';

const OnlineStore = () => {
  return (
    <div className="shop">
      <br />
      <div className="products">
        {PRODUCTS.map((product) => (
          <Product data={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default OnlineStore;

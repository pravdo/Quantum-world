import { useState, useEffect, useContext } from 'react';
import { PRODUCTS } from 'products';
// import '../../css/index.css';
// import './Checkout.css';
// import StripeContainer from './components/StripeContainer';
import StripeContainer from 'components/StripeContainer';
import relativity from '../../images/relativity.png';
// import { ShopContext } from './path/to/ShopContextProvider';
import { ShopContext } from 'context/onlineStore-context';
import ShopContextProvider from 'context/onlineStore-context';

function Checkout() {
  const [showItem, setShowItem] = useState(false);
  return (
    <div className="Checkout">
      {/* {showItem ? ( */}
      <StripeContainer />
      {/* ) : ( */}
      {/* <>
          <h3>$39.99</h3>
          <img src={relativity} alt="Relativity" />
          <button
            onClick={() => setShowItem(true)}
            className="stripe_pay_button"
          >
            Purchase
          </button>
        </> */}
      {/* )} */}
    </div>
  );
}

export default Checkout;

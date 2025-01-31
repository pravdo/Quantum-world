import React, { useContext } from 'react';
import { ShopContext } from '../../context/onlineStore-context';
import { PRODUCTS } from '../../products';
import CartItem from './CartFroProducts-Item';
import { useNavigate } from 'react-router-dom';

import './CartForProducts.css';

export const CartForProducts = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate('/checkout', { state: { totalAmount } });
    checkout();
  };

  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cart">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} key={product.id} />;
          } else {
            return '';
          }
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <p className="subtotal"> Subtotal: ${totalAmount} </p>
          <button onClick={() => navigate('/online-store')}>
            {' '}
            Continue Shopping{' '}
          </button>
          <button onClick={handleCheckout}>Checkout</button>
        </div>
      ) : (
        <h1> Your Shopping Cart is Empty</h1>
      )}
    </div>
  );
};

export default CartForProducts;

import React, { useContext } from 'react';
import { ShopContext } from '../../context/onlineStore-context';
import { CardMedia, Card } from '@mui/material';

import './CartForProducts.css';

const CartItem = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  return (
    <div className="cartItem">
      {/* <div className="image-item-product">
        <img src={productImage} alt="product" />
      </div> */}
      <Card>
        <CardMedia
          component="img"
          // height="194"
          image={productImage}
          alt="product"
          className="shopping-image" // Add a class name to the img element
          style={{ borderRadius: '0.75rem' }} // Apply inline styles to the img element
        />
      </Card>
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p> Price: ${price}</p>
        <div className="countHandler">
          <button onClick={() => removeFromCart(id)}> - </button>
          <input
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <button onClick={() => addToCart(id)}> + </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

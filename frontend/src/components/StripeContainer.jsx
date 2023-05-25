import React from 'react';

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import PaymentFrom from './PaymentFrom';

const PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY_STRIPE;

const stripeTestPromise = loadStripe(PUBLIC_KEY);

const StripeContainer = () => {
  return (
    <Elements stripe={stripeTestPromise}>
      <PaymentFrom />
    </Elements>
  );
};

export default StripeContainer;

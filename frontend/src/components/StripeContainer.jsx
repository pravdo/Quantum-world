import React from 'react';

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import PaymentFrom from './PaymentFrom';

const PUBLIC_KEY =
  'pk_test_51NAgmJKl2kkRRZHNkmkX59zY3V2XvRtNqFtuJC0GeFtmGqu2LOb40SBSaRp6g3PYu6HP7tYYuw9WqKu32VDIvGe600IV3txNfl';

const stripeTestPromise = loadStripe(PUBLIC_KEY);

const StripeContainer = () => {
  return (
    <Elements stripe={stripeTestPromise}>
      <PaymentFrom />
    </Elements>
  );
};

export default StripeContainer;

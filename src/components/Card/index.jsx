import React from 'react';
import './card.css';
import hero from '../../assets/images/illustration-hero.svg';
import { Title } from '../Title';
import { Plan } from '../Plan';

function Card() {
  return (
    <div className="card">
      <img className="img" src={hero} alt="illustration hero" />
      <div>
        <Title>Order Summary</Title>
        <p className="paragrafo">
          You can now listen to millions of songs, audiobooks, and podcasts on
          any device anywhere you like!
        </p>
      </div>
      <Plan value="59.99" tittlePlan="Annual Plan" linkPlan="Change" />
      <div className="paymentSystem">
        <button className="payment">Proceed to Payment</button>
        <p className="cancel">Cancel Order</p>
      </div>
    </div>
  );
}

export { Card };

/* eslint-disable react/prop-types */
import React from 'react';
import './plan.css';
import iconMusic from '../../assets/images/icon-music.svg';

function Plan({ value, tittlePlan, linkPlan }) {
  return (
    <div className="plan">
      <div className="music">
        <img src={iconMusic} alt="music simbol" />
      </div>

      <div className="info">
        <p className="emphasis">{tittlePlan}</p>
        <p className="not-emphasis">${value}/year</p>
      </div>

      <div className="linkTag">
        <a href="#">{linkPlan}</a>
      </div>
    </div>
  );
}

export { Plan };

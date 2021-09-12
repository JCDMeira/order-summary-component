import React from 'react';
import './style.css';

function Footer() {
  return (
    <div className="attribution">
      <p>
        Challenge by:
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer"
          id="Challenge"
        >
          {' '}
          Frontend Mentor
        </a>
      </p>
      <p>
        Coded by
        <a
          id="perfil"
          href="https://github.com/JCDMeira"
          target="_blank"
          rel="noreferrer"
        >
          {' '}
          Jean Carlos De Meira
        </a>
        .
      </p>
    </div>
  );
}

export { Footer };

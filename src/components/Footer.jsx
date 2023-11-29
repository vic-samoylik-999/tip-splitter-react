import React from 'react';
import heartIcon from '../assets/icon-heart.svg';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <p>Made with</p>
        <div className="footer__icon">
          <img src={heartIcon} alt="Heart Icon" />
        </div>
        <p>by</p>
        <p>
          <a className="footer__link" href="https://github.com/vic-samoylik-999" target="_blank">
            Vic Samoylik
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;

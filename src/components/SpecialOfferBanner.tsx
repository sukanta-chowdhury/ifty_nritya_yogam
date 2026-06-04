import React from 'react';
import './SpecialOfferBanner.css';

const SpecialOfferBanner = () => {
  return (
    <div className="special-offer-banner">
      <div className="scrolling-text-container">
        <div className="scrolling-text">
          <span>
            🎉 Grand Opening Special! Only ₹400 Admission + ₹400 First Month – Join Now & Save Big! 💃🧘‍♀️
          </span>
          <span>
            🎉 Grand Opening Special! Only ₹400 Admission + ₹400 First Month – Join Now & Save Big! 💃🧘‍♀️
          </span>
        </div>
      </div>
      <a href="#contact" className="join-now-button">
        Join Now
      </a>
    </div>
  );
};

export default SpecialOfferBanner;

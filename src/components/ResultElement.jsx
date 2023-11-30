import React from 'react';

function ResultElement({ children }) {
  return (
    <section className="result">
      <div className="result__info">
        <h3 className="result__heading">{children}</h3>
        <p className="result__text">/person</p>
      </div>
      <div className="result__value">
        <h2>$0.00</h2>
      </div>
    </section>
  );
}

export default ResultElement;

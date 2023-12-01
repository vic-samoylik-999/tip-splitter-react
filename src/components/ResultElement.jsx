import React from 'react';

function ResultElement({ children, ...rest }) {
  return (
    <section className="result">
      <div className="result__info">
        <h3 className="result__heading">{children}</h3>
        <p className="result__text">/person</p>
      </div>
      <div className="result__value">
        {rest.tipAmount && <h2>${Number(rest.tipAmount).toFixed(2)}</h2>}
        {rest.total && <h2>${Number(rest.total).toFixed(2)}</h2>}
      </div>
    </section>
  );
}

export default ResultElement;

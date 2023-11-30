import React from 'react';
import classNames from 'classnames';

function ResultElement({ children, mb }) {
  const classes = classNames('result', mb && 'result-mb');
  return (
    <section className={classes}>
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

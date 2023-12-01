import React from 'react';
import classNames from 'classnames';

function Input({ children, ...rest }) {
  const classes = classNames('input', rest.mb && 'input-mb');
  const lastIndexBackslash = rest.icon.lastIndexOf('/');
  const altName = rest.icon
    .slice(lastIndexBackslash + 1, -4)
    .split('-')
    .reverse()
    .join(' ');
  return (
    <section className={classes}>
      <h3 className="input__label">{children}</h3>
      <div className="input__wrapper">
        <input
          className="input__input"
          type={rest.type}
          placeholder={rest.placeholder}
          min={rest.rangeMin}
        />
        <img className="input__img" src={rest.icon} alt={altName} />
      </div>
    </section>
  );
}

export default Input;

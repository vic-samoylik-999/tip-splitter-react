import React from 'react';
import classNames from 'classnames';

function Input({ children, isZeroPeople, ...rest }) {
  const classes = classNames('input', rest.mb && 'input-mb');
  const lastIndexBackslash = rest.icon.lastIndexOf('/');
  const altName = rest.icon
    .slice(lastIndexBackslash + 1, -4)
    .split('-')
    .reverse()
    .join(' ');

  const handleChange = (e) => {
    rest.handler(e.target.value ? e.target.value : '');
  };
  return (
    <section className={classes}>
      <div className="input__label-wrapper">
        <h3 className="input__label">{children}</h3>
        <p className={isZeroPeople ? 'input__error input__error-visible' : 'input__error'}>
          Can't Be Zero
        </p>
      </div>
      <div className="input__wrapper">
        <input
          value={rest.value}
          onChange={(e) => handleChange(e)}
          className="input__input"
          type="number"
          placeholder={rest.placeholder}
          min={rest.rangeMin}
        />
        <img className="input__img" src={rest.icon} alt={altName} />
      </div>
    </section>
  );
}

export default Input;

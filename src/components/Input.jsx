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

  const handleChange = (e) => {
    rest.handler(e.target.value ? e.target.value : '');
  };
  return (
    <section className={classes}>
      <h3 className="input__label">{children}</h3>
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

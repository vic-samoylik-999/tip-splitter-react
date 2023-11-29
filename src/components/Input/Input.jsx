import React from 'react';
import styles from './Input.module.scss';

function Input({ children, ...rest }) {
  const lastIndexBackslash = rest.icon.lastIndexOf('/');
  const altName = rest.icon
    .slice(lastIndexBackslash + 1, -4)
    .split('-')
    .reverse()
    .join(' ');
  return (
    <>
      <h3>{children}</h3>
      <div>
        <input type={rest.type} placeholder={rest.placeholder} min={rest.rangeMin} />
        <img src={rest.icon} alt={altName} />
      </div>
    </>
  );
}

export default Input;

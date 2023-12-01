import React from 'react';
import classNames from 'classnames';

function Button({ children, type, onClick }) {
  const classes = classNames(type && type);
  return (
    <button onClick={() => onClick()} className={classes}>
      {children}
    </button>
  );
}

export default Button;

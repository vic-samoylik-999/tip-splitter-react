import React from 'react';
import classNames from 'classnames';

function Button({ children, type, value, onClick, customTipAmount }) {
  const classes = classNames(type && type, customTipAmount === value ? 'active' : '');
  return (
    <button onClick={() => onClick(value)} className={classes}>
      {children}
    </button>
  );
}

export default Button;

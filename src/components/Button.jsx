import React from 'react';
import classNames from 'classnames';

function Button({ children, type }) {
  const classes = classNames(type && type);
  return <button className={classes}>{children}</button>;
}

export default Button;

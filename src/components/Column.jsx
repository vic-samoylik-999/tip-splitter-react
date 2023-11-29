import React from 'react';
import classNames from 'classnames';

function Column({ children, bg }) {
  const classes = classNames('column', bg && 'column-green');
  return <section className={classes}>{children}</section>;
}

export default Column;

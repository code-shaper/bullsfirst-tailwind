import * as React from 'react';

interface ButtonProps {
  rootClass?: string;
  color?: 'default' | 'primary' | 'secondary';
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export function Button({
  rootClass,
  color = 'default',
  children,
  onClick,
}: ButtonProps) {
  const classes = [];

  if (rootClass) {
    classes.push(rootClass);
  }

  classes.push('button button--contained button--small');

  switch (color) {
    case 'default': {
      classes.push('button--contained-default');
      break;
    }
    case 'primary': {
      classes.push('button--contained-primary');
      break;
    }
    case 'secondary': {
      classes.push('button--contained-secondary');
      break;
    }
  }

  return (
    <button className={classes.join(' ')} onClick={onClick}>
      {children}
    </button>
  );
}

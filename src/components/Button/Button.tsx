import clsx from 'clsx';
import { ArrowDownIcon } from 'components';
import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  as?: 'button' | 'a';
  size?: 'small' | 'default' | 'large';
  className?: string;
}

export const Button = ({
  children,
  className,
  variant = 'primary',
  as = 'button',
  size = 'default',
  ...rest
}: ButtonProps &
  ButtonHTMLAttributes<HTMLButtonElement> &
  AnchorHTMLAttributes<HTMLAnchorElement>) => {
  let baseStyle, textSize;
  switch (size) {
    case 'small':
      baseStyle = 'px-4 py-2';
      textSize = 'text-sm';
      break;
    case 'large':
      baseStyle = 'px-4 py-3.5';
      textSize = 'text-lg';
      break;
    default:
      baseStyle = 'px-4 py-3';
      textSize = 'text-base';
  }
  const baseStyleClasses = `${baseStyle} inline-flex border transition rounded focus:outline-none focus:ring-[3px] focus:ring-primary-300`;
  let colorStyle;
  switch (variant) {
    case 'primary':
      colorStyle =
        'text-white bg-primary-500 border-primary-500 hover:bg-primary-700 hover:border-primary-700 disabled:bg-grayscale-300 disabled:border-grayscale-300';
      break;
    case 'secondary':
      colorStyle =
        'text-primary-500 bg-transparent border-primary-500 hover:bg-primary-50 disabled:text-grayscale-300 disabled:border-grayscale-300 disabled:bg-transparent';
      break;
  }

  const classes = clsx(baseStyleClasses, textSize, colorStyle, className);

  if (as === 'a') {
    return (
      <a className={clsx(classes, 'cursor-pointer')} {...rest}>
        {children}
      </a>
    );
  } else {
    return (
      <button className={classes} type="button" {...rest}>
        <ArrowDownIcon />
        {children}
      </button>
    );
  }
};

import clsx from 'clsx';
import Icon from 'components/Icon/Icon';
import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  as?: 'button' | 'a';
  size?: 'small' | 'default' | 'large';
  className?: string;
  icon?: string;
}

export const Button = ({
  children,
  className,
  variant = 'primary',
  as = 'button',
  size = 'default',
  icon,
  ...rest
}: ButtonProps &
  ButtonHTMLAttributes<HTMLButtonElement> &
  AnchorHTMLAttributes<HTMLAnchorElement>) => {
  let baseStyle, textSize, iconStyle;
  switch (size) {
    case 'small':
      baseStyle = 'px-4 py-2';
      textSize = 'text-sm';
      iconStyle = 'text-[16px]';
      break;
    case 'large':
      baseStyle = 'px-4 py-3.5';
      textSize = 'text-lg';
      iconStyle = 'text-[24px]';
      break;
    default:
      baseStyle = 'px-4 py-3';
      textSize = 'text-base';
      iconStyle = 'text-[20px]';
  }
  const baseStyleClasses = `${baseStyle} inline-flex items-center border transition rounded focus:outline-none focus:ring-[3px] focus:ring-primary-300`;
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
        {icon ? <Icon name={icon} className={iconStyle} /> : null}
        <span className={clsx({ 'ml-[10px]': icon })}>{children}</span>
      </a>
    );
  } else {
    return (
      <button className={classes} type="button" {...rest}>
        {icon ? <Icon name={icon} className={iconStyle} /> : null}
        <span className={clsx({ 'ml-[10px]': icon })}>{children}</span>
      </button>
    );
  }
};

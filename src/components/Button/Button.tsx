import { useTheme } from '@emotion/react';
import { Box } from 'components/Box';
import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';

import useStyles from './Button.styles';

export interface ButtonProps {
  className?: string;
  priority?: 'primary' | 'secondary' | 'tertiary';
  variant?: 'default' | 'negative';
  as?: 'button' | 'a';
  size?: 'small' | 'default' | 'large';
}

export const Button = ({
  children,
  className,
  priority = 'primary',
  variant = 'default',
  as = 'button',
  size = 'default',
  ...rest
}: ButtonProps &
  ButtonHTMLAttributes<HTMLButtonElement> &
  AnchorHTMLAttributes<HTMLAnchorElement>) => {
  const theme = useTheme();
  const css = useStyles(theme, { priority, variant, size });

  return (
    <Box as={as} className={className} css={css.root} {...rest}>
      <span>{children}</span>
    </Box>
  );
};

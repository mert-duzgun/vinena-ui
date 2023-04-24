import { useTheme } from '@emotion/react';
import { Box } from 'components/Box';
import * as React from 'react';
import { PolymorphicComponentProp } from 'types';

import useStyles from './Button.styles';

export type ButtonProps<C extends React.ElementType> = PolymorphicComponentProp<
  C,
  {
    priority?: 'primary' | 'secondary' | 'tertiary';
    size?: 'small' | 'default' | 'large';
    negative?: boolean;
    disabled?: boolean;
    className?: string;
  }
>;

export const Button = <C extends React.ElementType = 'button'>({
  priority = 'primary',
  size = 'default',
  negative = false,
  disabled = false,
  children,
  className,
  ...rest
}: ButtonProps<C>) => {
  const theme = useTheme();
  const css = useStyles(theme, { priority, size, negative, disabled });

  return (
    <Box
      as="button"
      className={className}
      css={css.root}
      data-negative={negative}
      disabled={disabled}
      {...rest}
    >
      <span>{children}</span>
    </Box>
  );
};

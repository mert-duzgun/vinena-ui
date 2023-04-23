import { useTheme } from '@emotion/react';
import { Box } from 'components/Box';
import * as React from 'react';
import { PolymorphicComponentProp } from 'types';

import useStyles from './Button.styles';

export type ButtonProps<C extends React.ElementType> = PolymorphicComponentProp<
  C,
  {
    className?: string;
    priority?: 'primary' | 'secondary' | 'tertiary';
    negative?: boolean;
    disabled?: boolean;
    size?: 'small' | 'default' | 'large';
    component?: 'a' | 'button';
  }
>;

export const Button = <C extends React.ElementType = 'button'>({
  children,
  className,
  priority = 'primary',
  negative = false,
  disabled = false,
  size = 'default',
  component = 'button',
  ...rest
}: ButtonProps<C>) => {
  const theme = useTheme();
  const css = useStyles(theme, { priority, negative, size, disabled });

  return (
    <Box
      as={component}
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

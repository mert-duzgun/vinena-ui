import { useTheme } from '@emotion/react';
import { Icon, IconName } from 'components';
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
    leftIcon?: IconName;
    rightIcon?: IconName;
  }
>;

export const Button = <C extends React.ElementType = 'button'>({
  priority = 'primary',
  size = 'default',
  negative = false,
  disabled = false,
  className,
  leftIcon,
  rightIcon,
  children,
  ...rest
}: ButtonProps<C>) => {
  const theme = useTheme();
  const css = useStyles(theme, {
    priority,
    size,
    negative,
    disabled,
    leftIcon,
    rightIcon,
    children,
  });

  return (
    <Box
      as={'button'}
      className={className}
      css={css.root}
      data-negative={negative}
      disabled={disabled}
      {...rest}
    >
      {leftIcon ? <Icon testId="button-left-icon" name={leftIcon} css={css.icon} /> : null}
      {children ? (
        <Box as={'span'} data-testid="button-content">
          {children}
        </Box>
      ) : null}
      {/* Render only leftIcon if both icons are present */}
      {!leftIcon && rightIcon ? (
        <Icon testId="button-right-icon" name={rightIcon} css={css.icon} />
      ) : null}
    </Box>
  );
};

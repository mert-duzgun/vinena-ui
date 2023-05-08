import { useTheme } from '@emotion/react';
import { Box, Icon, IconName } from 'components';
import * as React from 'react';
import { PolymorphicComponentProp } from 'types';

import useStyles from './TextInput.styles';

export type TextInputProps<C extends React.ElementType> = PolymorphicComponentProp<
  C,
  {
    label?: string;
    id?: string;
    helperText?: string;
    disabled?: boolean;
    error?: boolean;
    leftIcon?: IconName;
    rightIcon?: IconName;
  }
>;

export const TextInput = <C extends React.ElementType = 'input'>({
  label,
  id,
  helperText,
  disabled = false,
  error = false,
  leftIcon,
  rightIcon,
  ...rest
}: TextInputProps<C>) => {
  const theme = useTheme();
  const css = useStyles(theme, { error, disabled, leftIcon });

  return (
    <Box css={css.root}>
      {label ? (
        <Box css={css.label} as={'label'} htmlFor={id}>
          {label}
        </Box>
      ) : null}
      <Box css={css.inputWrapper}>
        {leftIcon ? (
          <Icon testId="text-input-left-icon" name={leftIcon} css={css.leftIcon} />
        ) : null}
        <Box
          as={'input'}
          id={id}
          css={css.input}
          disabled={disabled}
          data-error={error}
          {...rest}
        />
        {rightIcon ? (
          <Icon testId="text-input-right-icon" name={rightIcon} css={css.rightIcon} />
        ) : null}
      </Box>
      {helperText ? <Box css={css.helperText}>{helperText}</Box> : null}
    </Box>
  );
};

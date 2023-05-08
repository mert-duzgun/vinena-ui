import { px, rem, VinenaTheme } from 'theme';

export interface TextInputStylesParams {
  error: boolean;
  disabled: boolean;
  leftIcon?: string;
}

export default function createStyles(theme: VinenaTheme, props: TextInputStylesParams) {
  return {
    root: {},
    label: {
      ...theme.fonts.p3,
      display: 'block',
      color: theme.colors.grayscale[600],
      marginBottom: rem(8),
    },
    inputWrapper: {
      position: 'relative',
    },
    input: {
      ...theme.fonts.p2,
      padding: `${rem(4)} ${rem(16)} ${rem(4)} ${props.leftIcon ? rem(50) : rem(16)}`,
      minHeight: rem(48),
      borderRadius: px(10),
      border: 'none',
      boxShadow: `inset 0 0 0 1px ${theme.colors.grayscale[500]}`,
      transition: 'box-shadow 0.2s ease-in-out',
      fontSize: rem(16),
      lineHeight: '1.5',
      color: theme.colors.grayscale[800],
      minWidth: rem(360),

      '&::placeholder': {
        opacity: 1,
        color: props.disabled ? theme.colors.grayscale[300] : theme.colors.grayscale[400],
      },
      '&:focus': {
        outline: 'none',
        boxShadow: `inset 0 0 0 2px ${theme.colors.primary[500]}`,
      },
      '&[data-error="true"]': {
        boxShadow: `inset 0 0 0 2px ${theme.colors.danger[500]}`,
      },
      '&:disabled': {
        backgroundColor: theme.colors.grayscale[100],
        boxShadow: `inset 0 0 0 1px ${theme.colors.grayscale[300]}`,
      },
    },
    leftIcon: {
      position: 'absolute',
      left: rem(16),
      top: '50%',
      transform: 'translateY(-50%)',
      fontSize: rem(24),
      color: props.disabled ? theme.colors.grayscale[300] : theme.colors.grayscale[400],
    },
    rightIcon: {
      position: 'absolute',
      right: rem(16),
      top: '50%',
      transform: 'translateY(-50%)',
      fontSize: rem(24),
      color: props.disabled ? theme.colors.grayscale[300] : theme.colors.grayscale[400],
    },
    helperText: {
      ...theme.fonts.p3,
      color: props.error ? theme.colors.danger[500] : theme.colors.grayscale[500],
      marginTop: rem(8),
    },
  } as const;
}

import { px, rem, VinenaTheme } from 'theme';

import { ButtonProps } from './Button';

type Props = Required<ButtonProps>;

const sizes: Record<Props['size'], { fontSize: string; padding: string; height: string }> = {
  small: {
    fontSize: rem(14),
    padding: `${rem(4)} ${rem(16)}`,
    height: rem(32),
  },
  default: {
    fontSize: rem(16),
    padding: `${rem(4)} ${rem(16)}`,
    height: rem(40),
  },
  large: {
    fontSize: rem(18),
    padding: `${rem(4)} ${rem(24)}`,
    height: rem(48),
  },
};

export default function createStyles(theme: VinenaTheme, props: ButtonProps) {
  return {
    root: {
      ...sizes[props.size || 'default'],
      minHeight: rem(32),
      backgroundColor: theme.colors.primary[500],
      color: theme.colors.white,
      borderRadius: px(100),
      border: 'none',
      cursor: 'pointer',
      transition: 'background-color 0.2s',

      '&:hover': {
        backgroundColor: theme.colors.primary[300],
      },

      '&:focus': {
        outline: 'none',
        backgroundColor: theme.colors.primary[700],
      },

      '&:disabled': {
        backgroundColor: theme.colors.grayscale[300],
      },
    },
  };
}

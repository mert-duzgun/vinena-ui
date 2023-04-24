import { px, rem, VinenaTheme } from 'theme';

const sizes = {
  small: {
    height: rem(32),
    paddingTop: rem(4),
    paddingRight: rem(16),
    paddingBottom: rem(4),
    paddingLeft: rem(16),
  },
  default: {
    height: rem(40),
    paddingTop: rem(4),
    paddingRight: rem(16),
    paddingBottom: rem(4),
    paddingLeft: rem(16),
  },
  large: {
    height: rem(48),
    paddingTop: rem(4),
    paddingRight: rem(24),
    paddingBottom: rem(4),
    paddingLeft: rem(24),
  },
};

const getFonts = (theme: VinenaTheme) => {
  return {
    small: theme.fonts.p3,
    default: theme.fonts.p2,
    large: theme.fonts.p1,
  };
};

const getPriorityStyles = (theme: VinenaTheme) => {
  return {
    primary: {
      backgroundColor: theme.colors.primary[500],
      borderColor: theme.colors.primary[500],
      color: theme.colors.white,

      '&:hover': {
        backgroundColor: theme.colors.primary[300],
        borderColor: theme.colors.primary[300],
      },

      '&:active': {
        backgroundColor: theme.colors.primary[700],
        borderColor: theme.colors.primary[700],
      },

      '&:disabled': {
        backgroundColor: theme.colors.grayscale[300],
        borderColor: theme.colors.grayscale[300],
      },

      '&[data-negative="true"]': {
        backgroundColor: theme.colors.danger[500],
        borderColor: theme.colors.danger[500],

        '&:hover': {
          backgroundColor: theme.colors.danger[400],
          borderColor: theme.colors.danger[400],
        },

        '&:active': {
          backgroundColor: theme.colors.danger[700],
          borderColor: theme.colors.danger[700],
        },

        '&:disabled': {
          backgroundColor: theme.colors.grayscale[400],
          borderColor: theme.colors.grayscale[400],
        },
      },
    },
    secondary: {
      backgroundColor: theme.colors.white,
      borderColor: theme.colors.primary[500],
      color: theme.colors.primary[500],

      '&:hover': {
        backgroundColor: theme.colors.primary[50],
        borderColor: theme.colors.primary[500],
      },

      '&:active': {
        backgroundColor: theme.colors.primary[100],
        borderColor: theme.colors.primary[700],
      },

      '&:disabled': {
        backgroundColor: theme.colors.white,
        borderColor: theme.colors.grayscale[300],
        color: theme.colors.grayscale[300],
      },

      '&[data-negative="true"]': {
        backgroundColor: theme.colors.white,
        borderColor: theme.colors.danger[500],
        color: theme.colors.danger[500],

        '&:hover': {
          backgroundColor: theme.colors.danger[50],
          borderColor: theme.colors.danger[500],
        },

        '&:active': {
          backgroundColor: theme.colors.danger[100],
          borderColor: theme.colors.danger[700],
        },

        '&:disabled': {
          backgroundColor: theme.colors.white,
          borderColor: theme.colors.grayscale[400],
          color: theme.colors.grayscale[400],
        },
      },
    },
    tertiary: {
      backgroundColor: theme.colors.white,
      borderColor: theme.colors.transparent,
      color: theme.colors.primary[500],
      textDecoration: 'underline',

      '&:hover': {
        backgroundColor: theme.colors.primary[50],
        borderColor: theme.colors.primary[50],
      },

      '&:active': {
        backgroundColor: theme.colors.primary[100],
        borderColor: theme.colors.primary[100],
        color: theme.colors.primary[700],
      },

      '&:disabled': {
        backgroundColor: theme.colors.white,
        borderColor: theme.colors.white,
        color: theme.colors.grayscale[300],
      },

      // No negative variant for tertiary because a destructive action should be at least secondary
    },
  };
};

export interface ButtonStylesParams {
  priority: 'primary' | 'secondary' | 'tertiary';
  size: 'small' | 'default' | 'large';
  negative: boolean;
  disabled: boolean;
}

export default function createStyles(theme: VinenaTheme, props: ButtonStylesParams) {
  return {
    root: {
      minHeight: rem(32),
      borderRadius: px(9999),
      cursor: props.disabled ? 'not-allowed' : 'pointer',
      transition: 'all 0.2s',
      borderWidth: px(1),
      borderStyle: 'solid',
      display: 'inline-flex',
      alignItems: 'center',
      fontFamily: 'Inter, sans-serif',
      textDecoration: 'none',
      ...sizes[props.size],
      ...getFonts(theme)[props.size],
      ...getPriorityStyles(theme)[props.priority],

      '&:focus-visible': {
        outlineStyle: 'solid',
        outlineWidth: px(2),
        outlineOffset: px(2),
        outlineColor:
          props.negative && props.priority !== 'tertiary'
            ? theme.colors.danger[700]
            : theme.colors.primary[300],
      },
    },
  };
}

import * as React from 'react';
import { px, rem, VinenaTheme } from 'theme';

const iconSizes = {
  small: rem(16),
  default: rem(18),
  large: rem(20),
};

const getVerticalPadding = (
  props: ButtonStylesParams,
  side: 'left' | 'right',
  { initial, reduced }: { initial: string; reduced: string }
): string => {
  // Reduce the both sides padding if only there is no children
  if (!props.children) {
    return rem(4);
  }

  // If both icons are provided, only left side is rendered
  if (props.leftIcon && props.rightIcon && side === 'left') {
    return reduced;
  }

  if (props.leftIcon && props.rightIcon && side === 'right') {
    return initial;
  }

  if (props.leftIcon && side === 'left') {
    return reduced;
  }

  if (props.rightIcon && side === 'right') {
    return reduced;
  }

  return initial;
};

const getButtonSizes = (props: ButtonStylesParams) => {
  const verticalPadding = rem(4);

  const horizontalPaddings = {
    small: {
      initial: rem(16),
      reduced: rem(12),
    },
    default: {
      initial: rem(16),
      reduced: rem(12),
    },
    large: {
      initial: rem(24),
      reduced: rem(16),
    },
  };

  const heights = {
    small: rem(32),
    default: rem(40),
    large: rem(48),
  };

  return {
    small: {
      height: heights.small,
      width: props.children ? 'auto' : heights.small,
      paddingTop: verticalPadding,
      paddingRight: getVerticalPadding(props, 'right', horizontalPaddings.small),
      paddingBottom: verticalPadding,
      paddingLeft: getVerticalPadding(props, 'left', horizontalPaddings.small),
    },
    default: {
      height: heights.default,
      width: props.children ? 'auto' : heights.default,
      paddingTop: verticalPadding,
      paddingRight: getVerticalPadding(props, 'right', horizontalPaddings.default),
      paddingBottom: verticalPadding,
      paddingLeft: getVerticalPadding(props, 'left', horizontalPaddings.default),
    },
    large: {
      height: heights.large,
      width: props.children ? 'auto' : heights.large,
      paddingTop: verticalPadding,
      paddingRight: getVerticalPadding(props, 'right', horizontalPaddings.large),
      paddingBottom: verticalPadding,
      paddingLeft: getVerticalPadding(props, 'left', horizontalPaddings.large),
    },
  };
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
  leftIcon?: string;
  rightIcon?: string;
  children?: React.ReactNode;
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
      gap: rem(8),
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Inter, sans-serif',
      textDecoration: 'none',
      ...getButtonSizes(props)[props.size],
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
    icon: {
      fontSize: iconSizes[props.size],
    },
  };
}

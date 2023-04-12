/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      white: '#FFFFFF',
      black: '#000000',
      primary: {
        50: '#E0E8F9',
        100: '#BED0F7',
        200: '#98AEEB',
        300: '#7B93DB',
        400: '#647ACB',
        500: '#4C63B6',
        600: '#4055A8',
        700: '#35469C',
        800: '#2D3A8C',
        900: '#19216C',
      },
      grayscale: {
        50: '#F5F7FA',
        100: '#E4E7EB',
        200: '#CBD2D9',
        300: '#9AA5B1',
        400: '#7B8794',
        500: '#616E7C',
        600: '#52606D',
        700: '#3E4C59',
        800: '#323F4B',
        900: '#1F2933',
      },
      success: {
        50: '#EFFCF6',
        100: '#C6F7E2',
        200: '#8EEDC7',
        300: '#65D6AD',
        400: '#3EBD93',
        500: '#27AB83',
        600: '#199473',
        700: '#147D64',
        800: '#0C6B58',
        900: '#014D40',
      },
      info: {
        50: '#E3F8FF',
        100: '#B3ECFF',
        200: '#81DEFD',
        300: '#5ED0FA',
        400: '#40C3F7',
        500: '#2BB0ED',
        600: '#1992D4',
        700: '#127FBF',
        800: '#0B69A3',
        900: '#035388',
      },
      warning: {
        50: '#FFFBEA',
        100: '#FFF3C4',
        200: '#FCE588',
        300: '#FADB5F',
        400: '#F7C948',
        500: '#F0B429',
        600: '#DE911D',
        700: '#CB6E17',
        800: '#B44D12',
        900: '#8D2B0B',
      },
      danger: {
        50: '#FFE3E3',
        100: '#FFBDBD',
        200: '#FF9B9B',
        300: '#F86A6A',
        400: '#EF4E4E',
        500: '#E12D39',
        600: '#CF1124',
        700: '#AB091E',
        800: '#8A041A',
        900: '#610316',
      },
    },
    fontSize: {
      'heading-1': [
        '4.5rem',
        {
          lineHeight: '110%',
          letterSpacing: '-0.02em',
          fontWeight: '800',
        },
      ],
      'heading-2': [
        '3rem',
        {
          lineHeight: '110%',
          letterSpacing: '-0.01em',
          fontWeight: '700',
        },
      ],
      'heading-3': [
        '2rem',
        {
          lineHeight: '110%',
          letterSpacing: '0',
          fontWeight: '700',
        },
      ],
      'heading-4': [
        '1.5rem',
        {
          lineHeight: '150%',
          letterSpacing: '0',
          fontWeight: '400',
        },
      ],
      eyebrow: [
        '1.125rem',
        {
          lineHeight: '150%',
          letterSpacing: '0.04em',
          fontWeight: '400',
        },
      ],
      'paragraph-1': [
        '1.125rem',
        {
          lineHeight: '150%',
          letterSpacing: '0.02em',
          fontWeight: '400',
        },
      ],
      'paragraph-2': [
        '1rem',
        {
          lineHeight: '150%',
          letterSpacing: '0.02em',
          fontWeight: '400',
        },
      ],
      'paragraph-3': [
        '0.875rem',
        {
          lineHeight: '150%',
          letterSpacing: '0.02em',
          fontWeight: '400',
        },
      ],
    },
    fontFamily: {
      sans: ['Inter', ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [],
};

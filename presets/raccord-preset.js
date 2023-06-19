// This is the tailwind preset for Raccord applications.

// We disable eslint to be able to define plugins.
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { createThemes } = require('tw-colors');

import {
  colorGreen300,
  colorWhite,
  colorBlack,
  colorBlue300,
  colorRed300,
  colorWhite200,
  colorGrey300,
  colorGrey200,
  colorGrey100,
  colorWarning,
} from './colors';

/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      Gotham: ['Gotham', 'sans-serif'],
    },
  },
  plugins: [
    createThemes({
      light: {
        primary: colorBlack,
        secondary: colorWhite,
        tertiary: colorWhite200,
        neutral: colorBlack,
        // states:
        's-success': colorGreen300,
        's-error': colorRed300,
        's-warning': colorWarning,
        // components:
        'c-default': colorBlack,
        'c-hover': colorGrey300,
        'c-pressed': colorBlack,
        'c-disabled': colorGrey100,
        // fonts:
        'f-primary': colorWhite,
        'f-secondary': colorBlack,
        'f-disabled': colorGrey200,
      },
      dark: {
        primary: colorWhite,
        secondary: colorBlack,
        tertiary: colorBlue300,
        neutral: colorWhite,
        // states:
        's-success': colorGreen300,
        's-error': colorRed300,
        's-warning': colorWarning,
        // components:
        'c-default': colorWhite,
        'c-hover': colorWhite200,
        'c-pressed': colorWhite,
        'c-disabled': colorGrey100,
        // fonts:
        'f-primary': colorBlack,
        'f-secondary': colorWhite,
        'f-disabled': colorGrey200,
      },
    }),
    plugin(function ({ addComponents, theme }) {
      addComponents({
        '.rac-buttons': {
          fontSize: '16px',
          fontWeight: '400',
          fontFamily: theme('fontFamily.Gotham'),
          lineHeight: '19px',
        },
      });
    }),
  ],
}; 

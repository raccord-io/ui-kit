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
      WorkSans: ['Work Sans', 'sans-serif'],
    },
  },
  plugins: [
    createThemes({
      light: {
        primary: colorBlack,
        secondary: colorWhite200,
        tertiary: colorWhite,
        neutral: colorBlack,
        system: colorWhite200,
        'green-sheen': colorGreen300,
        'blue-ateneo': colorBlue300,
        'red-crimson': colorRed300,
        // states:
        's-success': colorGreen300,
        's-error': colorRed300,
        's-warning': colorWarning,
        // components:
        'c-default': colorBlack,
        'c-hover': colorGrey200,
        'c-pressed': colorBlack,
        'c-disabled': colorGrey100,
        // fonts:
        'f-primary': colorBlack,
        'f-secondary': colorWhite,
        'f-disabled': colorGrey200,
        // icons:
        'i-primary': colorBlack,
        'i-secondary': colorWhite,
      },
      dark: {
        primary: colorWhite,
        secondary: colorBlack,
        tertiary: colorBlue300,
        neutral: colorWhite,
        system: colorWhite200,
        'green-sheen': colorGreen300,
        'blue-ateneo': colorBlue300,
        'red-crimson': colorRed300,
        // states:
        's-success': colorGreen300,
        's-error': colorRed300,
        's-warning': colorWarning,
        // components:
        'c-default': colorWhite,
        'c-hover': colorGrey100,
        'c-pressed': colorWhite,
        'c-disabled': colorGrey100,
        // fonts:
        'f-primary': colorWhite,
        'f-secondary': colorBlack,
        'f-disabled': colorGrey200,
      },
    }),
    plugin(function ({ addComponents, theme }) {
      addComponents({
        '.rac-h1': {
          fontSize: '24px',
          fontWeight: '500',
          fontFamily: theme('fontFamily.Gotham'),
          lineHeight: '28px',
        },
        '.rac-h2': {
          fontSize: '20px',
          fontWeight: '300',
          fontFamily: theme('fontFamily.Gotham'),
          lineHeight: '24px',
        },
        '.rac-h3': {
          fontSize: '14px',
          fontWeight: '500',
          fontFamily: theme('fontFamily.Gotham'),
          lineHeight: '16px',
        },
        '.rac-buttons': {
          fontSize: '16px',
          fontWeight: '400',
          fontFamily: theme('fontFamily.Gotham'),
          lineHeight: '19px',
        },
        '.rac-body': {
          fontSize: '16px',
          fontWeight: '400',
          fontFamily: theme('fontFamily.WorkSans'),
          lineHeight: '19px',
        },
        '.rac-caption': {
          fontSize: '12px',
          fontWeight: '400',
          fontFamily: theme('fontFamily.WorkSans'),
          lineHeight: '16px',
        },
        '.rac-menu-active': {
          fontSize: '16px',
          fontWeight: '600',
          fontFamily: theme('fontFamily.WorkSans'),
          lineHeight: '20px',
        },
        '.rac-menu-default': {
          fontSize: '16px',
          fontWeight: '500',
          fontFamily: theme('fontFamily.WorkSans'),
          lineHeight: '20px',
        },
        '.rac-menu-underline': {
          fontSize: '16px',
          fontWeight: '500',
          fontFamily: theme('fontFamily.WorkSans'),
          lineHeight: '20px',
          textDecoration: 'underline',
          fontStyle: 'normal',
        },
      });
    }),
  ],
};

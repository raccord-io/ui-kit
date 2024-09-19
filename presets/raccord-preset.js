// This is the tailwind preset for Raccord applications.

// We disable eslint to be able to define plugins.
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { createThemes } = require('tw-colors');

import {
  colorBlack,
  colorRed300,
  colorBlue300,
  colorGrey100,
  colorWhite200,
  colorWhite,
  colorGray950,
  colorGray900,
  colorGray800,
  colorGray200,
  colorGray100,
  colorDowny200,
  colorDowny300,
  colorTealBlue900,
  colorTealBlue800,
  colorRedCrimson600,
  colorRedCrimson500,
  colorOrangePeel400,
  colorOrangePeel300,
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
        neutral: colorGray950,
        system: colorWhite200,
        'brand-green': colorDowny300,
        'brand-blue': colorTealBlue900,
        'brand-red': colorRedCrimson600,
        // states:
        's-success': colorDowny200,
        's-error': colorRedCrimson600,
        's-warning': colorOrangePeel400,
        // components:
        'c-default': colorGray950,
        'c-hover': colorGray900,
        'c-pressed': colorGray800,
        'c-disabled': colorGray100,
        // fonts:
        'f-primary': colorGray950,
        'f-secondary': colorWhite,
        'f-disabled': colorGray200,
        // icons:
        'i-primary': colorGray950,
        'i-secondary': colorWhite,
      },
      dark: {
        primary: colorWhite,
        secondary: colorBlack,
        tertiary: colorBlue300,
        neutral: colorWhite,
        system: colorWhite200,
        'brand-green': colorDowny200,
        'brand-blue': colorTealBlue800,
        'brand-red': colorRedCrimson500,
        // states:
        's-success': colorDowny200,
        's-error': colorRed300,
        's-warning': colorOrangePeel300,
        // components:
        'c-default': colorWhite,
        'c-hover': colorGrey100,
        'c-pressed': colorWhite,
        'c-disabled': colorGrey100,
        // fonts:
        'f-primary': colorWhite,
        'f-secondary': colorGray950,
        'f-disabled': colorGray200,
        // icons:
        'i-primary': colorWhite,
        'i-secondary': colorGray950,
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

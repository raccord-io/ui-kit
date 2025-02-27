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
    extend: {
      colors: {
        // Text color
        'text-primary': 'rgba(var(--text-primary))',
        'text-primary_on-brand': 'rgba(var(--text-primary_on-brand))',
        'text-secondary': 'rgba(var(--text-secondary))',
        'text-secondary_hover': 'rgba(var(--text-secondary_hover))',
        'text-secondary_on-brand': 'rgba(var(--text-secondary_on-brand))',
        'text-tertiary': 'rgba(var(--text-tertiary))',
        'text-tertiary_hover': 'rgba(var(--text-tertiary_hover))',
        'text-tertiary_on-brand': 'rgba(var(--text-tertiary_on-brand))',
        'text-quaternary': 'rgba(var(--text-quaternary))',
        'text-quaternary_on-brand': 'rgba(var(--text-quaternary_on-brand))',
        'text-white': 'rgba(var(--text-white))',
        'text-disabled': 'rgba(var(--text-disabled))',
        'text-placeholder': 'rgba(var(--text-placeholder))',
        'text-brand-primary': 'rgba(var(--text-brand-primary))',
        'text-brand-secondary': 'rgba(var(--text-brand-secondary))',
        'text-brand-tertiary': 'rgba(var(--text-brand-tertiary))',
        'text-error': 'rgba(var(--text-error))',
        'text-warning': 'rgba(var(--text-warning))',
        'text-success': 'rgba(var(--text-success))',
        // Border color
        'border-primary': 'rgba(var(--border-primary))',
        'border-secondary': 'rgba(var(--border-secondary))',
        'border-neutral': 'rgba(var(--border-neutral))',
        'border-disabled': 'rgba(var(--border-disabled))',
        'border-disabled_subtle': 'rgba(var(--border-disabled_subtle))',
        'border-brand': 'rgba(var(--border-brand))',
        'border-brand_alt': 'rgba(var(--border-brand_alt))',
        'border-error': 'rgba(var(--border-error))',
        'border-error_subtle': 'rgba(var(--border-error_subtle))',
        // Foreground color
        'fg-primary': 'rgba(var(--fg-primary))',
        'fg-secondary': 'rgba(var(--fg-secondary))',
        'fg-secondary_hover': 'rgba(var(--fg-secondary_hover))',
        'fg-tertiary': 'rgba(var(--fg-tertiary))',
        'fg-tertiary_hover': 'rgba(var(--fg-tertiary_hover))',
        'fg-quaternary': 'rgba(var(--fg-quaternary))',
        'fg-quaternary_hover': 'rgba(var(--fg-quaternary_hover))',
        'fg-quinary': 'rgba(var(--fg-quinary))',
        'fg-quinary_hover': 'rgba(var(--fg-quinary_hover))',
        'fg-senary': 'rgba(var(--fg-senary))',
        'fg-white': 'rgba(var(--fg-white))',
        'fg-disabled': 'rgba(var(--fg-disabled))',
        'fg-disabled_subtle': 'rgba(var(--fg-disabled_subtle))',
        'fg-brand-primary': 'rgba(var(--fg-brand-primary))',
        'fg-brand-primary_alt': 'rgba(var(--fg-brand-primary_alt))',
        'fg-brand-secondary': 'rgba(var(--fg-brand-secondary))',
        'fg-error-primary': 'rgba(var(--fg-error-primary))',
        'fg-error-secondary': 'rgba(var(--fg-error-secondary))',
        'fg-warning-primary': 'rgba(var(--fg-warning-primary))',
        'fg-warning-secondary': 'rgba(var(--fg-warning-secondary))',
        'fg-success-primary': 'rgba(var(--fg-success-primary))',
        'fg-success-secondary': 'rgba(var(--fg-success-secondary))',
        // Background color
        'bg-primary': 'rgba(var(--bg-primary))',
        'bg-primary_alt': 'rgba(var(--bg-primary_alt))',
        'bg-primary_hover': 'rgba(var(--bg-primary_hover))',
        'bg-primary-solid': 'rgba(var(--bg-primary-solid))',
        'bg-secondary': 'rgba(var(--bg-secondary))',
        'bg-secondary_alt': 'rgba(var(--bg-secondary_alt))',
        'bg-secondary_hover': 'rgba(var(--bg-secondary_hover))',
        'bg-secondary_subtle': 'rgba(var(--bg-secondary_subtle))',
        'bg-secondary-solid': 'rgba(var(--bg-secondary-solid))',
        'bg-tertiary': 'rgba(var(--bg-tertiary))',
        'bg-quaternary': 'rgba(var(--bg-quaternary))',
        'bg-active': 'rgba(var(--bg-active))',
        'bg-disabled': 'rgba(var(--bg-disabled))',
        'bg-disabled_subtle': 'rgba(var(--bg-disabled_subtle))',
        'bg-overlay': 'rgba(var(--bg-overlay))',
        'bg-brand-primary': 'rgba(var(--bg-brand-primary))',
        'bg-brand-primary_alt': 'rgba(var(--bg-brand-primary_alt))',
        'bg-brand-secondary': 'rgba(var(--bg-brand-secondary))',
        'bg-brand-solid': 'rgba(var(--bg-brand-solid))',
        'bg-brand-solid_hover': 'rgba(var(--bg-brand-solid_hover))',
        'bg-brand-section': 'rgba(var(--bg-brand-section))',
        'bg-brand-section_subtle': 'rgba(var(--bg-brand-section_subtle))',
        'bg-error-primary': 'rgba(var(--bg-error-primary))',
        'bg-error-secondary': 'rgba(var(--bg-error-secondary))',
        'bg-error-solid': 'rgba(var(--bg-error-solid))',
        'bg-warning-primary': 'rgba(var(--bg-warning-primary))',
        'bg-warning-secondary': 'rgba(var(--bg-warning-secondary))',
        'bg-warning-solid': 'rgba(var(--bg-warning-solid))',
        'bg-success-primary': 'rgba(var(--bg-success-primary))',
        'bg-success-secondary': 'rgba(var(--bg-success-secondary))',
        'bg-success-solid': 'rgba(var(--bg-success-solid))',
        // Button color
        'button-primary': 'rgba(var(--button-primary))',
        'button-primary_hover': 'rgba(var(--button-primary_hover))',
        'button-secondary': 'rgba(var(--button-secondary))',
        'button-secondary_hover': 'rgba(var(--button-secondary_hover))',
        'button-secondary-color': 'rgba(var(--button-secondary-color))',
        'button-secondary-color_hover':
          'rgba(var(--button-secondary-color_hover))',
        'button-primary-fg': 'rgba(var(--button-primary-fg))',
        'button-secondary-fg': 'rgba(var(--button-secondary-fg))',
        'button-secondary-color-fg': 'rgba(var(--button-secondary-color-fg))',
        'button-secondary-color-border':
          'rgba(var(--button-secondary-color-border))',
        // Ring color
        'ring-primary': 'rgba(var(--ring-primary))',
        // Badge color
        'badge-gray': 'rgba(var(--badge-gray))',
        'badge-gray-border': 'rgba(var(--badge-gray-border))',
        'badge-gray-fg': 'rgba(var(--badge-gray-fg))',
        'badge-purple': 'rgba(var(--badge-purple))',
        'badge-purple-border': 'rgba(var(--badge-purple-border))',
        'badge-purple-fg': 'rgba(var(--badge-purple-fg))',
        'badge-green': 'rgba(var(--badge-green))',
        'badge-green-border': 'rgba(var(--badge-green-border))',
        'badge-green-fg': 'rgba(var(--badge-green-fg))',
        'badge-orange': 'rgba(var(--badge-orange))',
        'badge-orange-border': 'rgba(var(--badge-orange-border))',
        'badge-orange-fg': 'rgba(var(--badge-orange-fg))',
        'badge-blue': 'rgba(var(--badge-blue))',
        'badge-blue-border': 'rgba(var(--badge-blue-border))',
        'badge-blue-fg': 'rgba(var(--badge-blue-fg))',
        'badge-yellow': 'rgba(var(--badge-yellow))',
        'badge-yellow-border': 'rgba(var(--badge-yellow-border))',
        'badge-yellow-fg': 'rgba(var(--badge-yellow-fg))',
        'badge-red': 'rgba(var(--badge-red))',
        'badge-red-border': 'rgba(var(--badge-red-border))',
        'badge-red-fg': 'rgba(var(--badge-red-fg))',
        'badge-dark-blue': 'rgba(var(--badge-dark-blue))',
        'badge-dark-blue-border': 'rgba(var(--badge-dark-blue-border))',
        'badge-dark-blue-fg': 'rgba(var(--badge-dark-blue-fg))',
      },
    },
  },
  plugins: [
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

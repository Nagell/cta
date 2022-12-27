/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,vue}"],
  darkMode: 'class',
  safelist: [
    { pattern: /(a|m|o|u)-\S*/ },
  ],

  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      '3xl': '1920px'
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',

      prim: {
        DEFAULT: 'rgb(var(--color-prim-default) / <alpha-value>)',
      },
      sec: {
        DEFAULT: 'rgb(var(--color-sec-default) / <alpha-value>)',
      },

      negative: {
        light: 'rgb(var(--color-negative-light) / <alpha-value>)',
        DEFAULT: 'rgb(var(--color-negative-default) / <alpha-value>)',
        dark: 'rgb(var(--color-negative-dark) / <alpha-value>)',
      },
      warning: {
        light: 'rgb(var(--color-warning-light) / <alpha-value>)',
        DEFAULT: 'rgb(var(--color-warning-default) / <alpha-value>)',
        dark: 'rgb(var(--color-warning-dark) / <alpha-value>)',
      },
      positive: {
        light: 'rgb(var(--color-positive-light) / <alpha-value>)',
        DEFAULT: 'rgb(var(--color-positive-default) / <alpha-value>)',
        dark: 'rgb(var(--color-positive-dark) / <alpha-value>)',
      },
      active: 'rgb(var(--color-active) / <alpha-value>)',

      white: 'rgb(var(--color-white) / <alpha-value>)',
      gray: {
        50: 'rgb(var(--color-gray-50) / <alpha-value>)',
        100: 'rgb(var(--color-gray-100) / <alpha-value>)',
        200: 'rgb(var(--color-gray-200) / <alpha-value>)',
        300: 'rgb(var(--color-gray-300) / <alpha-value>)',
        400: 'rgb(var(--color-gray-400) / <alpha-value>)',
        500: 'rgb(var(--color-gray-500) / <alpha-value>)',
        600: 'rgb(var(--color-gray-600) / <alpha-value>)',
        700: 'rgb(var(--color-gray-700) / <alpha-value>)',
        800: 'rgb(var(--color-gray-800) / <alpha-value>)',
        900: 'rgb(var(--color-gray-900) / <alpha-value>)',
        1000: 'rgb(var(--color-gray-1000) / <alpha-value>)',
      },
      black: 'rgb(var(--color-black) / <alpha-value>)',
    },
    borderColor: (theme) => ({
      ...theme('colors'),
      DEFAULT: theme('colors.gray.200', 'currentColor')
    }),
    fontFamily: {
      sans: [
        'Roboto',
        'ui-sans-serif',
        'sans-serif',
      ],
      'sans-secondary': [
        '"Roboto Slab"',
        'Roboto',
        'ui-sans-serif',
        'sans-serif'
      ],
      serif: [
        '"Roboto Serif"',
        'ui-serif',
        'serif'
      ],
      mono: [
        'ui-monospace',
        'monospace'
      ]
    },
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.25rem' }],
      base: ['1rem', { lineHeight: '1.5rem' }],
      lg: ['1.125rem', { lineHeight: '1.75rem' }],
      xl: ['1.25rem', { lineHeight: '1.75rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
      '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
      '5xl': ['3rem', { lineHeight: '1' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
      '7xl': ['4.5rem', { lineHeight: '1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],
      'label-sm': ['0.875rem', { lineHeight: '1.125rem' }],
      'label-base': ['1rem', { lineHeight: '1.25rem' }]
    },
    zIndex: {
      auto: 'auto',
      0: '0',
      10: '10',
      20: '20',
      30: '30',
      40: '40',
      50: '50'
    },
  },
  plugins: [
    require('@tailwindcss/container-queries'),
  ],
}

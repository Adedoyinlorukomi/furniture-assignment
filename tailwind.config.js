/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.{html,js}"
  ],
  theme: {
    screens: {
      'xs': {'max': '490px'}
    },
    borderRadius: {
      'none': '0',
      'sm': '0.125rem',
      DEFAULT: '0.25rem',
      rad: '70px',
      'md': '0.375rem',
      'lg': '0.5rem',
      'full': '9999px',
      'large': '12px',
      },
    extend: {
      colors: {
        blue: {
          950: '#054C73',
          1000: '#DFE9F4',
          1050: '#054C73',
        },
        stone: {
          950: '#333333',
          1000: '#666666',
        },
        slate: {
          950: '#F2F5FF',
          1000: '#D7D6D6',
        },
        cyan: {
          1000: '#DFE9F4',
        }
      }
    },
  },
  plugins: [],
}


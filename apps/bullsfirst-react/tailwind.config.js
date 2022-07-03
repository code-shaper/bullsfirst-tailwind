const tailwindPreset = require('@bullsfirst/tailwind-utils/tailwind-preset.js');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'src/**/*.{js,jsx,ts,tsx}',
    '../../node_modules/@bullsfirst/ui-lib-react/dist/index.js',
  ],
  presets: [tailwindPreset],
  theme: {
    extend: {},
  },
  plugins: [],
};

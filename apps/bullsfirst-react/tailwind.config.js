const tailwindPreset = require('@bullsfirst/tailwind-utils/tailwind-preset.js');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'src/**/*.{js,jsx,ts,tsx}',
    '../../packages/ui-lib-react/src/**/*.{js,jsx,ts,tsx}',
  ],
  presets: [tailwindPreset],
  theme: {
    extend: {},
  },
  plugins: [],
};

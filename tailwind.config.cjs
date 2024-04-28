const typography = require('@tailwindcss/typography');
const forms = require('@tailwindcss/forms');
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				primary: {
					...colors.emerald
				},
				complimentary: {
					...colors.red
				}
			},
			fontFamily: {
				body: ['Inter Variable', 'sans-serif'],
				heading: ['Inter Variable', 'sans-serif']
			}
		}
	},

	plugins: [forms, typography]
};

module.exports = config;

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		screens: {
			md: '809px',
			lg: '1199px',
			xl: '1200px',
		},
		container: {
			center: true,
			padding: {
				DEFAULT: '8px',
				md: '20px',
			},
		},
		fontFamily: {
			main: 'var(--main-font)',
			text: 'var(--text-font)',
		},

		extend: {
			colors: {
				white: '#E6E6E6',
				lightBlack: '#0D0D0D',
				heroColor: '#F8E9D9',
				mainColor: '#81B29A',
				secondaryColor: '#F2CC8F',
				descColor: '#E07A5F',
				mainBlue: '#3D405B',
			},
		},
	},
	plugins: [],
};

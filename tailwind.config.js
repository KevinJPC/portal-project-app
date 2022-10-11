/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.js'],
	theme: {
		extend: {
			fontFamily: {
				fira: ['FiraSans', 'sans-serif'],
				'fira-medium': ['FiraSans-Medium', 'sans-serif'],
			},
			boxShadow: {
				purple: '0px 4px 15px rgba(94, 114, 228, 0.75)',
				red: '0px 4px 15px rgba(255, 74, 74, 1)',
			},
		},
		colors: {
			'p-blue': '#334155',
			'p-silver': '#A0AEC0',
			'p-gray': '#F1F5F9',
			'p-purple': '#5E72E4',
			'p-red': '#FF4A4A',
			'p-white': '#FFFFFF',
			'p-green': '#58B55C',
		},
	},
	plugins: [],
}

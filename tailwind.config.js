/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.js'],
	theme: {
		extend: {
			fontFamily: {
				fira: ['FiraSans', 'sans-serif'],
				'fira-medium': ['FiraSans-Medium', 'sans-serif'],
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

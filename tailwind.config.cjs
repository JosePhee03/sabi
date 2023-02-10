/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '#574EB1',
				secondary: '#0656D0',
				'light-gray': '#eeeeee',
				'dark-gray': '#424864',
				dark: '#292D3E',
				'dark-100': '#272B3B',
				'white-100': '#F9F9F9',
				'semi-transparent': '#00000020',
				github: '#2B3137'
			},
			fontFamily: {
				nunito: ['"Nunito"', 'sans-serif'],
				blinker: ['"Blinker"', 'sans-serif']
			},
			backgroundImage: {
				sabi: 'linear-gradient(0deg, rgba(6,86,208,1) 0%, rgba(87,78,177,1) 100%)',
				'bici-sabi': 'url("/img/bici-SABI.png")',
				'luces-sabi': 'url("/img/luces-SABI.png")',
				'control-sabi': 'url("/img/control-SABI.png")'
			},
			dropShadow: {
				normal: '0px 2px 4px #00000025'
			},
			screens: {
				mini: '360px'
			},
			fontSize: {
				'6xl': '[3.75rem, { lineHeight: 1.1 }]'
			},
			boxShadow: {
				rounded: '0px 0px 4px #00000025'
			}
		}
	},
	plugins: []
}

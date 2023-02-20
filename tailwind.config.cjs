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
				'dark-gray': '#292D3E', // '#424864',
				dark: '#16171b', // '#292D3E'
				'dark-100': '#0f0f10', // '#121013', // '#17181d', // '#272B3B'
				'white-100': '#F9F9F9',
				'semi-transparent': '#00000015',
				github: '#2B3137'
			},
			fontFamily: {
				nunito: ['"Nunito"', 'sans-serif'],
				blinker: ['"Blinker"', 'sans-serif']
			},
			backgroundImage: {
				sabi: 'linear-gradient(0deg, rgba(6,86,208,1) 0%, rgba(87,78,177,1) 100%)',
				'gradient-green': 'linear-gradient(0deg, rgba(6,208,172,1) 0%, rgba(39,255,113,1) 100%)',
				'gradient-red': 'linear-gradient(0deg, rgba(208,35,35,1) 0%, rgba(255,107,178,1) 100%)',
				'gradient-purple': 'linear-gradient(0deg, rgba(121,35,208,1) 0%, rgba(208,107,225,1) 100%)',
				'gradient-orange': 'linear-gradient(0deg, rgba(208,87,35,1) 0%, rgba(255,178,107,1) 100%)',
				'bici-sabi': 'url("/img/bici-sabi-HD.png")',
				'luces-sabi': 'url("/img/luces-sabi-HD.png")',
				'control-sabi': 'url("/img/control-sabi-HD.png")'
			},
			dropShadow: {
				normal: '0px 2px 4px #00000025'
			},
			screens: {
				mini: '360px'
			},
			boxShadow: {
				rounded: '0px 0px 4px #00000025'
			},
			keyframes: {
				click: {
					'0%, 100%': { transform: 'scale(1)' },
					'80%': { transform: 'scale(0.9)' }
				}
			},
			animation: {
				'click-button': 'click 0.1s ease-in-out 1'
			}
		}
	},
	plugins: []
}

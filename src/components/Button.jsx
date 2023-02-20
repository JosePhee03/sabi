import { useState } from 'preact/hooks'

export default function Button({ text, href = '#'}) {
	const [isClick, setIsClick] = useState(false)

	const handleClick = () => {
		setIsClick(!isClick)
		setTimeout(() => {
			setIsClick(false)
		}, 100)
	}

	return (
		<a
		href={href}
			onClick={handleClick}
			class={`${
				isClick ? 'animate-click-button' : ''
			} bg-sabi rounded px-4 py-1 hover:scale-105 drop-shadow-normal`}
		>
			<span class='text-white font-blinker font-bold text-base text-center'>{text}</span>
		</a>
	)
}

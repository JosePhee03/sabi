import { useState } from 'preact/hooks'

export default function ButtonAlternative({ text, href = '#' }) {
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
			class={
				(isClick ? 'animate-click-button' : '') +
				' bg-sabi rounded-lg p-0.5 flex justify-center items-center drop-shadow-normal hover:scale-105'
			}
		>
			<div class=' px-4 py-1 rounded-md bg-color '>
				<span class=' font-blinker bg-clip-text text-transparent font-bold bg-sabi text-lg'>
					{text}
				</span>
			</div>
		</a>
	)
}

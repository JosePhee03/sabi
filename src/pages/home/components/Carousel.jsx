import { useState, useEffect } from 'preact/hooks'
import { PauseIcon, PlayIcon } from '../../../components/icons'

export default function Carousel() {
	const [index, setIndex] = useState(0)
	const [isPlay, setIsPlay] = useState(true)
	// const images = ['bici', 'luces', 'control']

	const handleClickTagglePlay = () => {
		const newIsPlay = isPlay
		setIsPlay(!newIsPlay)
		setIndex(index)
		console.log(newIsPlay)
	}

	const carouselTimeout = (newIndex) => {
		setTimeout(() => {
			setIndex(newIndex)
		}, 5000)
	}

	useEffect(() => {
		console.log('pre: ' + index)

		if (isPlay) {
			let newIndex = index + 1
			if (newIndex === 3) {
				newIndex = 0
			}
			console.log('pos: ' + index)
			carouselTimeout(newIndex)
		} else {
			return () => {
				clearTimeout(carouselTimeout)
				console.log('clear time out')
			}
		}
	}, [index])

	return (
		<div
			className={
				'h-screen w-full bg-bici-sabi bg-cover bg-center relative flex items-center justify-center'
			}
		>
			<button onClick={handleClickTagglePlay}>{isPlay ? <PauseIcon /> : <PlayIcon />}</button>
		</div>
	)
}

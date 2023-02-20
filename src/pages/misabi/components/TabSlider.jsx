import { useState } from 'preact/hooks'

export default function TabSlider() {
	const [index, setIndex] = useState(0)

	const handleClick = (i) => {
		setIndex(i)
	}

	return (
		<>
			<div class='h-12 w-full flex relative'>
				<span
					style={{ transform: `translateX(${100 * index}%)` }}
					class='w-1/3 h-0.5 bg-secondary absolute bottom-0 transition-all ease-in-out duration-150'
				></span>
				<a
					href='#functions'
					onClick={() => handleClick(0)}
					className='w-full border-b border-color bg-color dark:hover:bg-dark-100 hover:bg-white-100  flex justify-center items-center'
				>
					<span
						className={
							(index === 0 ? 'text-sabi' : 'text-color') + ' font-nunito font-bold text-lg'
						}
					>
						Funciones
					</span>
				</a>
				<a
					href='#grafics'
					onClick={() => handleClick(1)}
					className='w-full border-b bg-color border-color dark:hover:bg-dark-100 hover:bg-white-100 font-nunito font-bold text-lg text-color flex justify-center items-center'
				>
					<span
						className={
							(index === 1 ? 'text-sabi' : 'text-color') + ' font-nunito font-bold text-lg'
						}
					>
						Estadisticas
					</span>
				</a>
				<a
					href='#'
					onClick={() => handleClick(0)}
					className=' w-full border-b border-color bg-color dark:hover:bg-dark-100 hover:bg-white-100 font-nunito font-bold text-lg  flex justify-center items-center'
				>
					<span
						className={
							(index === 2 ? 'text-sabi' : 'text-color') + ' font-nunito font-bold text-lg'
						}
					>
						Mapas
					</span>
				</a>
			</div>
		</>
	)
}

import { useRef, useEffect } from 'preact/hooks'

export default function Slider() {
	const sectionRef = useRef()

	useEffect(() => {
		const section = sectionRef.current
		const cardStats = document.querySelectorAll('.card-stats')

		const isObservador = (entries) => {
			entries.forEach((entry) => {
				entry.target.classList.toggle('opacity-80', !entry.isIntersecting)
			})
		}

		const observador = new IntersectionObserver(isObservador, {
			root: section,
			threshold: 0.5
		})

		cardStats.forEach((card) => observador.observe(card))
	}, [])

	return (
		<>
			<section
				ref={sectionRef}
				className={
					'flex flex-col h-80 relative snap-x overflow-x-scroll bg-sabi justify-center xl:items-center'
				}
			>
				<div className='flex w-[69rem] gap-12 mx-5 items-center h-full'>
					<div
						className={
							'card-stats opacity-80 drop-shadow-normal snap-center w-60 h-28 bg-color rounded-md flex flex-col items-center justify-center gap-4 transition-opacity duration-300 ease-in-out'
						}
					>
						<h3 className='font-nunito text-xl font-bold text-gradient-red'>Mejor Recorrido</h3>
						<h3 className='font-nunito text-xl text-color'>
							8 <b className='text-gradient-red'>km</b>
						</h3>
					</div>

					<div
						className={
							'card-stats opacity-80 drop-shadow-normal snap-center w-60 h-28 bg-color rounded-md flex flex-col items-center justify-center gap-4 transition-opacity duration-300 ease-in-out'
						}
					>
						<h3 className='font-nunito text-xl font-bold text-gradient-orange'>Mejor Recorrido</h3>
						<h3 className='font-nunito text-xl text-color'>
							8 <b className='text-gradient-orange'>km</b>
						</h3>
					</div>

					<div
						className={
							'card-stats opacity-80 drop-shadow-normal snap-center w-60 h-28 bg-color rounded-md flex flex-col items-center justify-center gap-4 transition-opacity duration-300 ease-in-out'
						}
					>
						<h3 className='font-nunito text-xl font-bold text-gradient-purple'>Mejor Recorrido</h3>
						<h3 className='font-nunito text-xl text-color'>
							8 <b className='text-gradient-purple'>km</b>
						</h3>
					</div>

					<div
						className={
							'card-stats opacity-80 drop-shadow-normal snap-center w-60 h-28 bg-color rounded-md flex flex-col items-center justify-center gap-4 transition-opacity duration-300 ease-in-out'
						}
					>
						<h3 className='font-nunito text-xl font-bold text-gradient-green'>Mejor Recorrido</h3>
						<h3 className='font-nunito text-xl text-color'>
							8 <b className='text-gradient-green'>km</b>
						</h3>
					</div>
				</div>
			</section>
		</>
	)
}

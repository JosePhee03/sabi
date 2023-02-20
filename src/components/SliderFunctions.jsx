function Buttons() {
	return (
		<div>
			<button>Funciones</button>
			<button>Estadisticas</button>
			<button>Mapas</button>
		</div>
	)
}

function Article() {
	return <article></article>
}

export default function TabsSlider() {
	return (
		<main>
			<section>
				<Buttons />
			</section>
		</main>
	)
}

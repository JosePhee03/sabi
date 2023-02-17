export default function Input({ type, name, placeholder, msgAlert, isValid, setIsValid, pattern }) {
	const handleChange = () => {
		setIsValid(false)
	}

	const alertElement = () => {
		return (
			<>
				<p class={'peer-invalid:visible invisible mt-2 font-nunito text-pink-600 text-sm'}>
					{msgAlert}
				</p>
				<img
					src='/img/error-icon.svg'
					alt=''
					className={
						'peer-invalid:visible peer-focus:invisible invisible absolute z-0 right-2 top-9'
					}
				/>
				<img
					src='/img/check-icon.svg'
					alt=''
					className={'peer-valid:visible peer-focus:invisible invisible absolute z-0 right-2 top-9'}
				/>
			</>
		)
	}

	return (
		<>
			<div class='relative w-full'>
				<label class={' text-color text-base w-full'}>{name}</label>
				<input
					onChange={handleChange}
					type={type}
					name={name.replace(/ /g, '').toLowerCase()}
					required
					pattern={pattern.toString().replaceAll('/', '')}
					placeholder={placeholder}
					class={
						(isValid ? '' : 'invalid:border-pink-400 valid:border-green-300') +
						' peer focus:border-secondary dark:focus:border-secondary text-color input-style'
					}
				/>
				{isValid ? <p className='invisible'>hidden</p> : alertElement()}
			</div>
		</>
	)
}

import { useState } from 'preact/hooks'

export default function InputEmail() {
	const [hiddenAlert, setHiddenAlert] = useState(true)
	const validate = (event) => {
		event.preventDefault()
		const data = Object.fromEntries(new FormData(event.target))
		console.log(data)
	}
	const handleChange = () => {
		setHiddenAlert(false)
	}

	const alertElements = () => {
		return (
			<>
				<p class={'peer-invalid:visible invisible mt-2 font-nunito text-pink-600 text-sm'}>
					Ingrese un email valido "example@mail.com"
				</p>
				<img
					src='/img/error-icon.svg'
					alt=''
					className={
						// (email.status === null ? 'invisible' : email.status ? 'invisible' : '') +
						'peer-invalid:visible invisible absolute right-2 top-9'
					}
				/>
				<img
					src='/img/check-icon.svg'
					alt=''
					className={
						// (email.status === null ? 'invisible' : email.status ? '' : 'invisible') +
						'peer-valid:visible invisible absolute right-2 top-9'
					}
				/>
			</>
		)
	}

	return (
		<>
			<form onSubmit={validate} className='w-1/2 m-auto mt-40'>
				<div class='relative w-full'>
					<label class={' text-color text-base w-full'}>Email</label>
					<input
						onChange={handleChange}
						type='email'
						name='email'
						required
						pattern='^[\w]{1,}[\w.+-]{0,}@[\w-]{2,}([.][a-zA-Z]{2,}|[.][\w-]{2,}[.][a-zA-Z]{2,})$'
						placeholder='Escriba su email..'
						class={
							'peer invalid:border-pink-400 valid:border-green-300 focus:border-secondary dark:focus:border-secondary text-color input-style'
						}
					/>
					{hiddenAlert ? <p className='invisible'>hidden</p> : alertElements()}
				</div>
				<button type='submit' className='bg-dark text-white px-4 py-2'>
					Submit
				</button>
			</form>
		</>
	)
}

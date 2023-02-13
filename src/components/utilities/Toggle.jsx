export function Toggle({ id }) {
	return (
		<>
			<input type='checkbox' id={id} className='peer hidden' />
			<label
				htmlFor={id}
				className=' peer-checked:after:translate-x-5 peer-checked:bg-sabi  hover:cursor-pointer gray-color h-5 w-10 inline-flex rounded-full toggle items-center shadow-rounded'
			></label>
		</>
	)
}

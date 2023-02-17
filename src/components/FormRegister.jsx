import { useState } from 'preact/hooks'
import Input from './Input.jsx'

export default function InputsRegister() {
	const [isValidEmail, setIsValidEmail] = useState(true)
	const [isValidUsername, setIsValidUsername] = useState(true)
	const [isValidPassword, setIsValidPassword] = useState(true)

	const patters = {
		email: /^([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}$/,
		username: /^[\w'\-,.][^0-9_!¡?÷?¿\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,16}$/,
		password: /^(?=.*\w).{8,}$/
	}

	return (
		<>
			<Input
				isValid={isValidEmail}
				setIsValid={setIsValidEmail}
				type={'email'}
				placeholder={'Escriba su email...'}
				name={'Email'}
				pattern={patters.email}
				msgAlert={'Escriba un email valido "example@email.com'}
			/>
			<Input
				isValid={isValidUsername}
				setIsValid={setIsValidUsername}
				type={'text'}
				placeholder={'Escriba su Nombre...'}
				name={'Nombre'}
				pattern={patters.username}
				msgAlert={'Su nombre debe tener de 3-16 letras'}
			/>
			<Input
				isValid={isValidPassword}
				setIsValid={setIsValidPassword}
				type={'password'}
				placeholder={'Escriba una contraceña...'}
				name={'Contraceña'}
				pattern={patters.password}
				msgAlert={'Ingrese una contraceña 8 caracteres minimo'}
			/>
		</>
	)
}

import * as Yup from 'yup'
import { regexPassword, regexText } from '../regex/inputRegex'

export const adminSchema = Yup.object().shape({
	dni: Yup.number().max(11, 'El campo dni no debe ser mayor que 15 caracteres'),
	name: Yup.string()
		.matches(regexText, 'El campo nombre solo puede contener letras y espacios')
		.required('El campo nombre es obligatorio'),
	email: Yup.string()
		.email('El correo electrónico no es válido')
		.required('El campo correo electrónico es obligatorio'),
	firstLastName: Yup.string()
		.matches(
			regexText,
			'El campo primer apellido solo puede contener letras y espacios'
		)
		.required('El campo primer apellido es obligatorio'),
	secondLastName: Yup.string()
		.matches(
			regexText,
			'El campo segundo apellido solo puede contener letras y espacios'
		)
		.required('El campo segundo apellido es obligatorio'),
	password: Yup.string()
		.min(8, 'El campo contraseña debe contener al menos 8 caracteres')
		.max(15, 'El campo contraseña no debe ser mayor que 15 caracteres')
		.matches(
			regexPassword,
			'La contraseña debe contener al menos una letra mayúscula, una minúscula y un caracter especial'
		)
		.required('El campo contraseña es obligatorio'),
	passwordConfirmation: Yup.string().when('password', (password, field) =>
		password
			? field
					.required('El campo confirmar contraseña es obligatorio')
					.oneOf([Yup.ref('password'), null], 'Las contraseñas no coinciden')
			: field
	),
})

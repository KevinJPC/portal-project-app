import * as Yup from 'yup'
import { regexText } from '../regex/inputRegex'

export const roleSchema = Yup.object().shape({
	name: Yup.string()
		.matches(regexText, 'El campo nombre solo puede contener letras y espacios')
		.min(5, 'El campo nombre debe contener al menos 5 caracteres')
		.required('El campo nombre es obligatorio'),
	description: Yup.string().min(5),
})

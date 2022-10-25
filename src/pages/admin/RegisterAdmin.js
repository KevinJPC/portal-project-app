import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAddNewAdminMutation } from '../../app/services/adminApi'
import Input from '../../components/inputs/TextInput'
import PasswordInput from '../../components/inputs/PasswordInput'
import SubmitButton from '../../components/buttons/SubmitButton'
import Alert from '../../components/alerts/Alert'

const RegisterAdmin = () => {
	const navigate = useNavigate()

	const [addNewAdmin, { isLoading, isSuccess, data, isError, error }] =
		useAddNewAdminMutation()

	const [values, setValues] = useState({
		dni: '',
		name: '',
		email: '',
		firstLastName: '',
		secondLastName: '',
		password: '',
		passwordConfirmation: '',
	})

	const registerNewAdmin = e => {
		e.preventDefault()
		try {
			addNewAdmin(values)
				.unwrap()
				.then(
					payload =>
						payload.success &&
						setTimeout(() => {
							navigate(-1)
						}, 2500)
				)
				.catch(error)
		} catch (err) {}
	}

	return (
		<div className=''>
			<div className='flex flex-col items-center pt-10 md:pt-14 mt-14'>
				<div>
					<h3 className='text-3xl text-p-blue'>Registrar administrador</h3>
				</div>
				<div className='w-full py-4 mt-1 px-4 overflow-hidde max-w-xs md:max-w-3xl'>
					<form onSubmit={registerNewAdmin}>
						<div className='md:grid md:grid-cols-2 gap-5 '>
							<div className='mt-4 '>
								<Input
									id='dni'
									label='Cédula'
									placeholder='Cédula'
									onChange={e => setValues({ ...values, dni: e.target.value })}
								/>
							</div>
							<div className='mt-4 '>
								<Input
									id='name'
									label='Nombre'
									placeholder='Nombre'
									onChange={e => setValues({ ...values, name: e.target.value })}
								/>
							</div>
							<div className='mt-4 '>
								<Input
									id='firstLastName'
									label='Primer apellido'
									placeholder='Primer apellido'
									onChange={e =>
										setValues({ ...values, firstLastName: e.target.value })
									}
								/>
							</div>
							<div className='mt-4 '>
								<Input
									id='secondLastName'
									label='Segundo apellido'
									placeholder='Segundo apellido'
									value={values.secondLastName}
									onChange={e =>
										setValues({ ...values, secondLastName: e.target.value })
									}
								/>
							</div>
							<div className='mt-4 '>
								<Input
									id='email'
									label='Correo electrónico'
									placeholder='Correo electrónico'
									value={values.email}
									onChange={e =>
										setValues({ ...values, email: e.target.value })
									}
								/>
							</div>
							<div className='mt-4'>
								<PasswordInput
									id='password'
									label='Contraseña'
									placeholder='Contraseña'
									value={values.password}
									onChange={e =>
										setValues({ ...values, password: e.target.value })
									}
								/>
							</div>
							<div className='mt-4 mb-4'>
								<PasswordInput
									id='passwordConfirmation'
									label='Confirmar Contraseña'
									placeholder='Confirmar Contraseña'
									value={values.passwordConfirmation}
									onChange={e =>
										setValues({
											...values,
											passwordConfirmation: e.target.value,
										})
									}
								/>
							</div>
						</div>
						{isError && (
							<Alert
								type='error'
								message={
									Object.keys(error.data.errors).length === 1
										? error.data.message
										: 'Todos los campos son obligatorios'
								}
							/>
						)}
						{isSuccess && (
							<Alert
								type='success'
								message={data.message}
							/>
						)}
						<div className='md:px-36 my-5'>
							<SubmitButton
								isLoading={isLoading}
								text='Registrar'
							/>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}

export default RegisterAdmin

import React, { useState } from 'react'
import ModalWindow from '../../components/ModalWindow'
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline'
import { useNavigate } from 'react-router-dom'
import { useAddNewAdminMutation } from '../../app/services/adminApi'
import Input from '../../components/inputs/TextInput'
import PasswordInput from '../../components/inputs/PasswordInput'
import SubmitButton from '../../components/buttons/SubmitButton'

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

	const registerNewAdmin = async e => {
		e.preventDefault()
		try {
			await addNewAdmin(values)
			navigate(-1)
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
							<div className='mt-4'>
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
						<div className='md:px-36 my-6'>
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

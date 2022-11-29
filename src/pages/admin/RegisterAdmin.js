import React from 'react'
import Input from '../../components/inputs/TextInput'
import PasswordInput from '../../components/inputs/PasswordInput'
import SubmitButton from '../../components/buttons/SubmitButton'
import Alert from '../../components/alerts/Alert'
import useForm from '../../hooks/useForm'
import useAdmin from '../../hooks/useAdmin'

const RegisterAdmin = () => {
	const {
		formState,
		dni,
		name,
		email,
		firstLastName,
		secondLastName,
		password,
		passwordConfirmation,
		onInputChange,
	} = useForm({
		dni: '',
		name: '',
		email: '',
		firstLastName: '',
		secondLastName: '',
		password: '',
		passwordConfirmation: '',
	})

	const {
		registerProps: { registerNewAdmin, isLoadingAddNewAdmin },
	} = useAdmin({ ...formState })

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
									value={dni}
									onChange={onInputChange}
								/>
							</div>
							<div className='mt-4 '>
								<Input
									id='name'
									label='Nombre'
									placeholder='Nombre'
									value={name}
									onChange={onInputChange}
								/>
							</div>
							<div className='mt-4 '>
								<Input
									id='firstLastName'
									label='Primer apellido'
									placeholder='Primer apellido'
									value={firstLastName}
									onChange={onInputChange}
								/>
							</div>
							<div className='mt-4 '>
								<Input
									id='secondLastName'
									label='Segundo apellido'
									placeholder='Segundo apellido'
									value={secondLastName}
									onChange={onInputChange}
								/>
							</div>
							<div className='mt-4 '>
								<Input
									id='email'
									label='Correo electrónico'
									placeholder='Correo electrónico'
									value={email}
									onChange={onInputChange}
								/>
							</div>
							<div className='mt-4'>
								<PasswordInput
									id='password'
									label='Contraseña'
									placeholder='Contraseña'
									value={password}
									onChange={onInputChange}
								/>
							</div>
							<div className='mt-4 mb-4'>
								<PasswordInput
									id='passwordConfirmation'
									label='Confirmar Contraseña'
									placeholder='Confirmar Contraseña'
									value={passwordConfirmation}
									onChange={onInputChange}
								/>
							</div>
						</div>
						<div className='md:px-36 my-5'>
							<SubmitButton
								isLoading={isLoadingAddNewAdmin}
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

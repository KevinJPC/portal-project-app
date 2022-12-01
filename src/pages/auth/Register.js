import React from 'react'
import SubmitButton from '../../components/buttons/SubmitButton'
import Input from '../../components/inputs/TextInput'
import PasswordInput from '../../components/inputs/PasswordInput'
import Alert from '../../components/alerts/Alert'
import useAuth from '../../hooks/useAuth'
import useForm from '../../hooks/useForm'
import useRole from '../../hooks/useRole'
import { useEffect } from 'react'
import useParseTo from '../../hooks/useParseTo'


const Register = () => {
	const { parseToInteger } = useParseTo()

	const {
		listProps: {
			getPublicRoles,
			publicRoles,
			isLoadingGetPublicRoles,
			isSuccessGetPublicRoles,
		},
	} = useRole()

	const {
		formState,
		name,
		dni,
		firstLastName,
		secondLastName,
		email,
		password,
		passwordConfirmation,
		onInputChange,
		changeFormState,
	} = useForm({
		name: '',
		dni: '',
		firstLastName: '',
		secondLastName: '',
		email: '',
		password: '',
		passwordConfirmation: '',
		roleId: '',
	})

	const {
		registerProps: { RegisterNewUser, isLoadingAddNewUser },
	} = useAuth({ ...formState })

	useEffect(() => {
		getPublicRoles()
	}, [publicRoles])

	useEffect(() => {
		if (isSuccessGetPublicRoles) {
			changeFormState({ roleId: publicRoles?.data.roles[0].id })
		}
	}, [isSuccessGetPublicRoles])

	return (
		<div className='mx-auto my-10 2xl:my-20 w-11/12 md:w-9/12'>
			<h1 className='text-4xl font-fira-medium text-p-blue text-center mb-9'>
				Registrarse
			</h1>
			<form
				className='flex flex-col w-full items-center'
				onSubmit={RegisterNewUser}
			>
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-x-32 gap-y-7 mb-10 w-full'>
					<Input
						label='Cédula'
						placeholder='Cédula'
						id='dni'
						value={dni}
						onChange={onInputChange}
					/>
					<Input
						label='Nombre'
						placeholder='Nombre'
						id='name'
						value={name}
						onChange={onInputChange}
					/>
					<Input
						label='Primer apellido'
						placeholder='Primer apellido'
						id='firstLastName'
						value={firstLastName}
						onChange={onInputChange}
					/>
					<Input
						label='Segundo apellido'
						placeholder='Segundo apellido'
						id='secondLastName'
						value={secondLastName}
						onChange={onInputChange}
					/>
					<Input
						label='Correo electrónico'
						placeholder='Correo electrónico'
						id='email'
						value={email}
						onChange={onInputChange}
					/>

					<div className='flex flex-col w-full'>
						<label className='text-p-blue mb-5 w-fit'>Selecione el Rol</label>
						<select
							id='roles'
							onChange={e =>
								changeFormState({ roleId: parseToInteger(e.target.value) })
							}
							className='px-5 text-p-blue bg-p-silver h-12 rounded-lg focus:outline-none hover:ring-1 hover:ring-p-purple focus:ring-2 focus:ring-p-purple placeholder-p-blue appearance-none'
						>
							{isLoadingGetPublicRoles ? (
								<option value=''>Cargando...</option>
							) : (
								publicRoles?.data.roles.map(role => (
									<option
										key={role.id}
										value={role.id}
									>
										{role.name}
									</option>
								))
							)}
						</select>
					</div>

					<PasswordInput
						label='Nueva contraseña'
						placeholder='Nueva contraseña'
						id='password'
						value={password}
						onChange={onInputChange}
					/>
					<PasswordInput
						label='Confirmar contraseña'
						placeholder='Confirmar contraseña'
						id='passwordConfirmation'
						value={passwordConfirmation}
						onChange={onInputChange}
					/>
				</div>

				<div className='w-full max-w-[38.375rem]'>
					<SubmitButton
						text='Registrarse'
						isLoading={isLoadingAddNewUser}
					/>
				</div>
			</form>
		</div>
	)
}

export default Register

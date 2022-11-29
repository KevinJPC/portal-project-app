import React from 'react'
import SubmitButton from '../../components/buttons/SubmitButton'
import Input from '../../components/inputs/TextInput'
import PasswordInput from '../../components/inputs/PasswordInput'
import Select from '../../components/inputs/Select'
import { useGetPublicRolesQuery } from '../../app/services/roleApi'
import Alert from '../../components/alerts/Alert'
import { useState } from 'react'
import { useRegisterUserMutation } from '../../app/services/authApi'
import { useNavigate } from 'react-router-dom'

const Register = () => {
	const navigate = useNavigate()
	const [selectedRole, setSelectedRole] = useState({
		id: '',
		name: '',
	})

	const [addNewUser, { isLoading, isSuccess, isError, error, data }] =
		useRegisterUserMutation()
	const { data: RolesAactives, isLoading: isLoadingpublic } =
		useGetPublicRolesQuery()
	/**
	 * Filters the roles array to find the role that
	 * matches the id of the selected option, and then it sets the selectedRole state to the role that was
	 * found.
	 */
	/*const handleChangeRole = e => {
		const value = RolesAactives?.data.roles.filter(
			role => role.id === +e.target.value
		)
		
		setSelectedRole({ id: value[0].id, name: value[0].name })
	}*/
	const [values, setValues] = useState({
		name: '',
		dni: '',
		firstLastName: '',
		secondLastName: '',
		email: '',
		password: '',
		passwordConfirmation: '',
		roleId: 3,
	})

	const getState = vaule => {}

	const RegisterNewUser = async e => {
		e.preventDefault()
		try {
			await addNewUser(values)
				.unwrap()
				.then(
					payload =>
						payload.success &&
						setTimeout(() => {
							navigate('/')
						}, 2500)
				)
				.catch(error)
		} catch (error) {}
	}
	return (
		<div className='mx-auto my-10 2xl:my-20 w-11/12 md:w-9/12'>
			<h1 className='text-4xl font-fira-medium text-p-blue text-center mb-9'>
				Registrarse
			</h1>
			<form
				className='flex flex-col w-full items-center'
				onSubmit={RegisterNewUser}
			>
				{isSuccess && (
					<Alert
						type='success'
						message={data?.message}
					/>
				)}
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-x-32 gap-y-7 mb-10 w-full'>
					<Input
						label='Cédula'
						placeholder='Cédula'
						id='dni'
						value={values.dni}
						onChange={e => setValues({ ...values, dni: e.target.value })}
					/>
					<Input
						label='Nombre'
						placeholder='Nombre'
						id='name'
						value={values.nombre}
						onChange={e => setValues({ ...values, name: e.target.value })}
					/>
					<Input
						label='Primer apellido'
						placeholder='Primer apellido'
						id='firstLastName'
						value={values.firstLastName}
						onChange={e =>
							setValues({ ...values, firstLastName: e.target.value })
						}
					/>
					<Input
						label='Segundo apellido'
						placeholder='Segundo apellido'
						id='secondLastName'
						value={values.secondLastName}
						onChange={e =>
							setValues({ ...values, secondLastName: e.target.value })
						}
					/>
					<Input
						label='Correo electrónico'
						placeholder='Correo electrónico'
						id='email'
						value={values.email}
						onChange={e => setValues({ ...values, email: e.target.value })}
					/>

					<div className='flex flex-col w-full'>
						<label className='text-p-blue mb-5 w-fit'>Selecione el Rol</label>
						<select
							id='roles'
							onChange={e => setValues({ ...values, roleId: e.target.value })}
							className='px-5 text-p-blue bg-p-silver h-12 rounded-lg focus:outline-none hover:ring-1 hover:ring-p-purple focus:ring-2 focus:ring-p-purple placeholder-p-blue appearance-none'
						>
							{RolesAactives?.data.roles.map(role => (
								<option
									key={role.id}
									value={role.id}
								>
									{role.name}
								</option>
							))}
						</select>
					</div>

					<PasswordInput
						label='Nueva contraseña'
						placeholder='Nueva contraseña'
						id='password'
						value={values.password}
						onChange={e => setValues({ ...values, password: e.target.value })}
					/>
					<PasswordInput
						label='Confirmar contraseña'
						placeholder='Confirmar contraseña'
						id='passwordConfirmation'
						value={values.passwordConfirmation}
						onChange={e =>
							setValues({ ...values, passwordConfirmation: e.target.value })
						}
					/>
				</div>

				<div className='w-full max-w-[38.375rem]'>
					<SubmitButton
						text='Registrarse'
						isLoading={isLoadingpublic}
					/>
				</div>
			</form>
		</div>
	)
}

export default Register

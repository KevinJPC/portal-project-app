import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useUpdateUserProfileMutation } from '../../app/services/userApi'
import Alert from '../../components/alerts/Alert'
import SubmitButton from '../../components/buttons/SubmitButton'
import Input from '../../components/inputs/TextInput'
import { selectUser } from '../../features/authSlice'

const UpdateUser = () => {
	const [updateProfile, { isLoading, isError, error, data, isSuccess }] =
		useUpdateUserProfileMutation()
	const user = useSelector(selectUser)
	const navigate = useNavigate()

	const [values, setValues] = useState({
		// id: id,
		name: '',
		email: '',
		firstLastName: '',
		secondLastName: '',
	})

	useEffect(() => {
		setValues({
			name: user.name,
			email: user.email,
			firstLastName: user.firstLastName,
			secondLastName: user.secondLastName,
		})
	}, [])

	const update = e => {
		e.preventDefault()
		try {
			updateProfile(values)
		} catch (err) {}
	}

	return (
		<div className=' mt-16 w-full'>
			<div className='flex flex-col items-center pt-6 justify-center sm:pt-0'>
				<div>
					<h3 className='text-3xl text-p-blue'>Editar perfil</h3>
				</div>
				<div className='w-full px-6 py-4 mt-1 overflow-hidde max-w-xs sm:max-w-md'>
					<form onSubmit={update}>
						<div className='mt-4 '>
							<Input
								id='name'
								label='Nombre'
								placeholder='Nombre'
								value={values.name}
								onChange={e => setValues({ ...values, name: e.target.value })}
							/>
						</div>
						<div className='mt-4 '>
							<Input
								id='firstLastName'
								label='Primer apellido'
								placeholder='Primer apellido'
								value={values.firstLastName}
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
						<div className='mt-4 mb-6'>
							<Input
								id='email'
								label='Correo electrónico'
								placeholder='Correo electrónico'
								value={values.email}
								onChange={e => setValues({ ...values, email: e.target.value })}
							/>
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
						<div className='mt-6'>
							<SubmitButton
								isLoading={isLoading}
								text='Guardar cambios'
							/>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}

export default UpdateUser

import React, { useEffect } from 'react'
import Alert from '../../components/alerts/Alert'
import SubmitButton from '../../components/buttons/SubmitButton'
import Input from '../../components/inputs/TextInput'
import useForm from '../../hooks/useForm'
import useUser from '../../hooks/useUser'

const UpdateUser = () => {
	const {
		formState,
		name,
		email,
		firstLastName,
		secondLastName,
		onInputChange,
		changeFormState,
	} = useForm({
		name: '',
		email: '',
		firstLastName: '',
		secondLastName: '',
	})

	const {
		profileProps: { isLoadingUpdateProfile, userData, updateUserProfile },
	} = useUser({ ...formState })

	useEffect(() => {
		changeFormState({
			name: userData?.name,
			email: userData?.email,
			firstLastName: userData?.firstLastName,
			secondLastName: userData?.secondLastName,
		})
	}, [userData])

	return (
		<div className='mt-16 w-full'>
			<div className='flex flex-col items-center pt-6 justify-center sm:pt-0'>
				<div>
					<h3 className='text-3xl text-p-blue'>Editar perfil</h3>
				</div>
				<div className='w-full px-6 py-4 mt-1 overflow-hidde max-w-xs sm:max-w-md'>
					<form onSubmit={updateUserProfile}>
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
						<div className='mt-4 mb-6'>
							<Input
								id='email'
								label='Correo electrónico'
								placeholder='Correo electrónico'
								value={email}
								onChange={onInputChange}
							/>
						</div>
						<div className='mt-6'>
							<SubmitButton
								isLoading={isLoadingUpdateProfile}
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

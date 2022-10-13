import React, { useState } from 'react'
import PasswordInput from '../../components/inputs/PasswordInput'
import SubmitButton from '../../components/buttons/SubmitButton'
import { useUpdateUserPasswordMutation } from '../../app/services/userApi'
import { useNavigate } from 'react-router-dom'
import Alert from '../../components/alerts/Alert'

const UpdatePassword = () => {
	const [updatePassword, { isLoadingUpdate, isSuccess, isError, error }] =
		useUpdateUserPasswordMutation()
	const navigate = useNavigate()

	const [values, setValues] = useState({
		oldPassword: '',
		password: '',
		passwordConfirmation: '',
	})

	const update = e => {
		e.preventDefault()
		try {
			updatePassword(values)
			// setValues({
			// 	oldPassword: '',
			// 	password: '',
			// 	passwordConfirmation: '',
			// })
			// navigate(-1)
		} catch (err) {}
	}

	return (
		<div className=' mt-16 w-full'>
			<div className='flex flex-col items-center pt-6 justify-center sm:pt-0'>
				<div>
					<h3 className='text-3xl text-p-blue'>Cambiar contraseña</h3>
				</div>

				<div className='w-full py-4 mt-4 overflow-hidde max-w-xs sm:max-w-md'>
					<form onSubmit={update}>
						<div>
							<PasswordInput
								id='oldPassword'
								label='Contraseña actual'
								placeholder='Contraseña actual'
								value={values.oldPassword}
								onChange={e =>
									setValues({ ...values, oldPassword: e.target.value })
								}
							/>
						</div>
						<div className='mt-4'>
							<PasswordInput
								id='password'
								label='Nueva contraseña '
								placeholder='Nueva contraseña'
								value={values.password}
								onChange={e =>
									setValues({ ...values, password: e.target.value })
								}
							/>
						</div>
						<div className='mt-4'>
							<PasswordInput
								id='passwordConfirmation'
								label='Confirmar contraseña '
								placeholder='Confirmar contraseña'
								value={values.passwordConfirmation}
								onChange={e =>
									setValues({ ...values, passwordConfirmation: e.target.value })
								}
							/>
						</div>
						<div className='mt-7'>
							{isError && (
								<Alert
									type='error'
									message={error.data.message}
								/>
							)}
						</div>
						<div className='mt-6'>
							<SubmitButton
								isLoading={isLoadingUpdate}
								text='Restablecer'
							/>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}

export default UpdatePassword

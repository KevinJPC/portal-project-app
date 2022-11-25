import PasswordInput from '../../components/inputs/PasswordInput'
import SubmitButton from '../../components/buttons/SubmitButton'
import Alert from '../../components/alerts/Alert'
import useForm from '../../hooks/useForm'
import useUser from '../../hooks/useUser'

const UpdatePassword = () => {
	const {
		formState,
		oldPassword,
		password,
		passwordConfirmation,
		onInputChange,
		onResetForm,
	} = useForm({
		oldPassword: '',
		password: '',
		passwordConfirmation: '',
	})

	const {
		passwordProps: { isLoadingUpdatePassword, updateUserPassword },
	} = useUser({ formState, onResetForm })

	return (
		<div className=' mt-16 w-full'>
			<div className='flex flex-col items-center pt-6 justify-center sm:pt-0'>
				<div>
					<h3 className='text-3xl text-p-blue'>Cambiar contraseña</h3>
				</div>
				<div className='w-full py-4 mt-4 overflow-hidde max-w-xs sm:max-w-md'>
					<form onSubmit={updateUserPassword}>
						<div className='mt-4 '>
							<PasswordInput
								id='oldPassword'
								label='Contraseña actual'
								placeholder='Contraseña actual'
								value={oldPassword}
								onChange={onInputChange}
							/>
						</div>
						<div className='mt-4'>
							<PasswordInput
								id='password'
								label='Nueva contraseña '
								placeholder='Nueva contraseña'
								value={password}
								onChange={onInputChange}
							/>
						</div>
						<div className='mt-4'>
							<PasswordInput
								id='passwordConfirmation'
								label='Confirmar contraseña '
								placeholder='Confirmar contraseña'
								value={passwordConfirmation}
								onChange={onInputChange}
							/>
						</div>
						<div className='mt-6'>
							<SubmitButton
								isLoading={isLoadingUpdatePassword}
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

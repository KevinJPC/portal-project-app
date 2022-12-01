import SubmitButton from '../../components/buttons/SubmitButton'
import useUser from '../../hooks/useUser'
import { Form, Formik } from 'formik'
import { userPasswordSchema } from '../../formYupSchemas/userSchema'
import PasswordInput from '../../components/inputs/InputPassword'

const UpdatePassword = () => {
	const {
		passwordProps: { isLoadingUpdatePassword, updateUserPassword },
	} = useUser()

	return (
		<div className=' mt-16 w-full'>
			<div className='flex flex-col items-center pt-6 justify-center sm:pt-0'>
				<Formik
					initialValues={{
						oldPassword: '',
						password: '',
						passwordConfirmation: '',
					}}
					onSubmit={(values, { resetForm }) => {
						updateUserPassword({ ...values })
						resetForm()
					}}
					validationSchema={userPasswordSchema}
				>
					{() => (
						<>
							<div>
								<h3 className='text-3xl text-p-blue'>Cambiar contraseña</h3>
							</div>
							<div className='w-full py-4 mt-4 overflow-hidde max-w-xs sm:max-w-md'>
								<Form>
									<div className='mt-4 '>
										<PasswordInput
											label='Contraseña actual'
											name='oldPassword'
										/>
									</div>
									<div className='mt-4'>
										<PasswordInput
											label='Nueva contraseña '
											name='password'
										/>
									</div>
									<div className='mt-4'>
										<PasswordInput
											label='Confirmar contraseña '
											name='passwordConfirmation'
										/>
									</div>
									<div className='mt-6'>
										<SubmitButton
											isLoading={isLoadingUpdatePassword}
											text='Restablecer'
										/>
									</div>
								</Form>
							</div>
						</>
					)}
				</Formik>
			</div>
		</div>
	)
}

export default UpdatePassword

import React, { useState } from 'react'
import SubmitButton from '../../components/buttons/SubmitButton'
import Input from '../../components/inputs/TextInput'
import { useForgotPasswordMutation } from '../../app/services/authApi'
import useAlert from '../../hooks/useAlert'

function ForgotPassword() {
	const [values, setValues] = useState({
		email: '',
	})

	const { errorAlert } = useAlert()

	const [forgotPassword, { isSuccess, data, isLoading, error }] =
		useForgotPasswordMutation()

	const handleSubmit = e => {
		e.preventDefault()
		forgotPassword(values).unwrap().catch(errorAlert)
	}

	return (
		<div className='mx-auto my-20 2xl:my-32 w-11/12 md:w-7/12 lg:w-5/12 xl:w-4/12'>
			<h1 className='text-4xl font-fira-medium text-p-blue text-center mb-9'>
				Restablecer contraseña
			</h1>
			{isSuccess ? (
				<p className='font-fira-medium text-p-silver text-center'>
					{data?.message}
				</p>
			) : (
				<>
					<p className='font-fira-medium text-p-silver text-center mb-9'>
						Ingresa la dirección de correo electrónico que usaste para
						registrarte. Te enviaremos un mensaje con un enlace para restablecer
						tu contraseña.
					</p>
					<form
						className='flex flex-col'
						onSubmit={handleSubmit}
					>
						<div className='flex flex-col mb-10'>
							<Input
								label='Correo electrónico'
								placeholder='Correo electrónico'
								name='email'
								value={values.email}
								onChange={e => setValues({ ...values, email: e.target.value })}
								id='email'
								error={error?.data?.errors?.email}
							/>
						</div>

						<SubmitButton
							text='Enviar'
							isLoading={isLoading}
						/>
					</form>
				</>
			)}
		</div>
	)
}

export default ForgotPassword

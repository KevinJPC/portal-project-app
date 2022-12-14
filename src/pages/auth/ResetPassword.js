import React, { useState, useEffect } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import {
	useResetPasswordMutation,
	useValidateResetTokenMutation,
} from '../../app/services/authApi'
import SubmitButton from '../../components/buttons/SubmitButton'
import PasswordInput from '../../components/inputs/PasswordInput'
import Spinner from '../../components/Spinner'
import useAlert from '../../hooks/useAlert'

function ResetPassword() {
	const { successAlert, errorAlert } = useAlert()

	const [searchParams] = useSearchParams()
	const navigate = useNavigate()

	const [
		validateResetToken,
		{ isLoading: isValidating, isUninitialized: isValidateUninitialized },
	] = useValidateResetTokenMutation()

	const [resetPassword, { isLoading: isResetting, error: errorOnReset }] =
		useResetPasswordMutation()

	const [values, setValues] = useState({
		email: '',
		token: '',
		password: '',
		passwordConfirmation: '',
	})

	const handleSetValues = values =>
		setValues(prevValues => ({ ...prevValues, ...values }))

	const handleValidateToken = () => {
		const { email, token } = Object.fromEntries([...searchParams])
		handleSetValues({ email, token })
		validateResetToken({ email, token })
			.unwrap()
			.catch(err => {
				handleRedirectOnInvalidToken(err)
			})
	}

	const handleSubmitResetPassword = e => {
		e.preventDefault()
		resetPassword(values)
			.unwrap()
			.then(data => {
				successAlert(data)
				navigate('/', { replace: true })
			})
			.catch(err => handleRedirectOnInvalidToken(err))
	}

	const handleRedirectOnInvalidToken = err => {
		errorAlert(err)
		if (err.status === 410)
			navigate('/restablecer-contrasena', { replace: true })
	}

	useEffect(() => {
		handleValidateToken()
		// eslint-disable-next-line
	}, [])

	return (
		<div className='mx-auto my-20 2xl:my-32 w-11/12 md:w-7/12 lg:w-5/12 xl:w-4/12'>
			{isValidating || isValidateUninitialized ? (
				<Spinner />
			) : (
				<>
					<h1 className='text-4xl font-fira-medium text-p-blue text-center mb-9 overflow-hidden text-ellipsis'>
						Restablecer contraseña para
						<span className='text-p-purple overflow-hidden text-ellipsis'>
							{' '}
							{values.email}
						</span>
					</h1>
					<form
						className='flex flex-col'
						onSubmit={handleSubmitResetPassword}
					>
						<div className='flex flex-col gap-7 mb-10'>
							<PasswordInput
								label='Nueva contraseña'
								name='password'
								id='password'
								value={values.password}
								onChange={e => handleSetValues({ password: e.target.value })}
								error={errorOnReset?.data?.errors?.password}
							/>
							<PasswordInput
								label='Confirmar contraseña'
								name='confirm_password'
								id='confirm_password'
								value={values.passwordConfirmation}
								onChange={e =>
									handleSetValues({ passwordConfirmation: e.target.value })
								}
							/>
						</div>

						<SubmitButton
							text='Restablecer contraseña'
							isLoading={isResetting}
						/>
					</form>
				</>
			)}
		</div>
	)
}

export default ResetPassword

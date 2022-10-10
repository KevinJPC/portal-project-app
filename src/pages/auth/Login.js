import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import loginImg from '../../assets/img/login.png'
import Input from '../../components/inputs/TextInput'
import PasswordInput from './../../components/inputs/PasswordInput'
import SubmitButton from './../../components/buttons/SubmitButton'
import { useLoginMutation } from '../../app/services/authApi'
import Alert from '../../components/alerts/Alert'
import { useDispatch } from 'react-redux'
import { setCredentials } from '../../features/authSlice'

function Login() {
	const dispatch = useDispatch()

	const [login, { isLoading, isSuccess, data, isError, error }] =
		useLoginMutation()

	const [values, setValues] = useState({
		email: '',
		password: '',
	})

	useEffect(() => {
		if (isSuccess) {
			dispatch(setCredentials(data.data))
		}
	}, [isSuccess])

	const handleSubmit = e => {
		e.preventDefault()
		login(values)
	}

	return (
		<div className='w-full flex flex-col lg:grid lg:grid-cols-2'>
			<div className='flex flex-col my-auto justify-center items-center'>
				<div className='w-11/12 md:w-7/12 lg:w-9/12'>
					<h1 className=' text-p-blue text-4xl font-fira-medium mb-4'>
						Bienvenido a <span className='text-p-purple'>Lorem ipsum</span>
					</h1>
					<p className='text-p-silver font-fira-medium mb-7'>
						Inicia sesión para acceder a tu cuenta del portal
					</p>
					<div className='mb-7'>
						{isError && (
							<Alert
								type='error'
								message={error.data.message}
							/>
						)}
					</div>
					<form
						className='flex flex-col'
						onSubmit={handleSubmit}
					>
						<div className='flex flex-col gap-7 mb-6'>
							<Input
								id='email'
								label='Correo electrónico'
								placeholder='Correo electrónico'
								value={values.email}
								onChange={e => setValues({ ...values, email: e.target.value })}
							/>
							<PasswordInput
								id='password'
								label='Contraseña'
								placeholder='Contraseña'
								value={values.password}
								onChange={e =>
									setValues({ ...values, password: e.target.value })
								}
							/>
						</div>
						<Link
							className='text-p-purple w-fit mb-6'
							to='/restablecer-contrasena'
						>
							¿Olvidó su contraseña?
						</Link>
						<SubmitButton
							isLoading={isLoading}
							text='Iniciar sesión'
						/>
					</form>
					<p className='text-p-silver text-center mt-10'>
						¿No tienes una cuenta?{' '}
						<Link
							to='/registrarse'
							className='text-p-purple'
						>
							Registrarse
						</Link>
					</p>
				</div>
			</div>
			<div className='bg-p-red hidden lg:block'>
				<img
					className='h-full object-cover'
					src={loginImg}
					alt='Imagen de bienvenida'
				/>
			</div>
		</div>
	)
}

export default Login
import React from 'react'
import { Link } from 'react-router-dom'
import loginImg from '../../assets/img/login.png'
import Input from '../../components/inputs/TextInput'
import PasswordInput from './../../components/inputs/PasswordInput'
import SubmitButton from './../../components/buttons/SubmitButton'

function Login() {
	return (
		<div className='w-full flex flex-col lg:grid lg:grid-cols-2'>
			<div className='flex flex-col my-auto justify-center items-center'>
				<div className='w-11/12 md:w-7/12 lg:w-9/12'>
					<h1 className=' text-p-blue text-4xl font-fira-medium mb-4'>
						Bienvenido a <span className='text-p-purple'>Lorem ipsum</span>
					</h1>
					<p className='text-p-silver font-fira-medium'>
						Inicia sesión para acceder a tu cuenta del portal
					</p>
					<form className='flex flex-col'>
						<div className='flex flex-col mt-7 gap-7 mb-6'>
							<Input
								id='email'
								name='email'
								label='Correo electrónico'
								placeholder='Correo electrónico'
							/>
							<PasswordInput
								id='password'
								name='password'
								label='Contraseña'
								placeholder='Contraseña'
							/>
						</div>
						<Link
							className='text-p-purple w-fit mb-6'
							to='/restablecer-contrasena'
						>
							¿Olvidó su contraseña?
						</Link>
						<SubmitButton text='Iniciar sesión' />
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

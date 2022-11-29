import React from 'react'
import SubmitButton from '../../components/buttons/SubmitButton'
import Input from '../../components/inputs/TextInput'

function ForgotPassword() {
	return (
		<div className='mx-auto my-20 2xl:my-32 w-11/12 md:w-7/12 lg:w-5/12 xl:w-4/12'>
			<h1 className='text-4xl font-fira-medium text-p-blue text-center mb-9'>
				Restablecer contraseña
			</h1>
			<p className='font-fira-medium text-p-silver text-center mb-9'>
				Ingresa la dirección de correo electrónico que usaste para registrarte.
				Te enviaremos un mensaje con un enlace para restablecer tu contraseña.
			</p>
			<form className='flex flex-col'>
				<div className='flex flex-col mb-10'>
					<Input
						label='Correo electrónico'
						placeholder='Correo electrónico'
						name='email'
						id='email'
					/>
				</div>

				<SubmitButton text='Enviar' />
			</form>
		</div>
	)
}

export default ForgotPassword

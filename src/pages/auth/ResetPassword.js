import React from 'react'
import SubmitButton from '../../components/buttons/SubmitButton'
import PasswordInput from '../../components/inputs/PasswordInput'

function ResetPassword() {
	return (
		<div className='mx-auto my-20 2xl:my-32 w-11/12 md:w-7/12 lg:w-5/12 xl:w-4/12'>
			<h1 className='text-4xl font-fira-medium text-p-blue text-center mb-9 overflow-hidden text-ellipsis'>
				Restablecer contraseña para
				<span className='text-p-purple overflow-hidden text-ellipsis'>
					{' '}
					correo@ejemplo.com
				</span>
			</h1>
			<form className='flex flex-col'>
				<div className='flex flex-col gap-7 mb-10'>
					<PasswordInput
						label='Nueva contraseña'
						placeholder='Nueva contraseña'
						name='password'
						id='password'
					/>
					<PasswordInput
						label='Confirmar contraseña'
						placeholder='Confirmar contraseña'
						name='confirm_password'
						id='confirm_password'
					/>
				</div>

				<SubmitButton text='Restablecer contraseña' />
			</form>
		</div>
	)
}

export default ResetPassword

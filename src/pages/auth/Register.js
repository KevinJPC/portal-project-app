import React from 'react'
import SubmitButton from '../../components/buttons/SubmitButton'
import Input from '../../components/inputs/TextInput'
import PasswordInput from '../../components/inputs/PasswordInput'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import Select from '../../components/inputs/Select'

const Register = () => {
	return (
		<div className='mx-auto my-10 2xl:my-20 w-11/12 md:w-9/12'>
			<h1 className='text-4xl font-fira-medium text-p-blue text-center mb-9'>
				Registrarse
			</h1>
			<form className='flex flex-col w-full items-center'>
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-x-32 gap-y-7 mb-10 w-full'>
					<Input
						label='Cédula'
						placeholder='Cédula'
						name='dni'
						id='dni'
					/>
					<Input
						label='Nombre'
						placeholder='Nombre'
						name='name'
						id='name'
					/>
					<Input
						label='Primer apellido'
						placeholder='Primer apellido'
						name='first_last_name'
						id='first_last_name'
					/>
					<Input
						label='Segundo apellido'
						placeholder='Segundo apellido'
						name='second_last_name'
						id='second_last_name'
					/>
					<Input
						label='Correo electrónico'
						placeholder='Correo electrónico'
						name='email'
						id='email'
					/>
					<Select
						label='Rol'
						defaulOption='Seleccione su rol'
						name='rol'
						id='rol'
					/>

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

				<div className='w-full max-w-[38.375rem]'>
					<SubmitButton text='Registrarse' />
				</div>
			</form>
		</div>
	)
}

export default Register

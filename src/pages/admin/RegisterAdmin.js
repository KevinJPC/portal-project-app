import React, { useState } from 'react'
import ModalWindow from '../../components/ModalWindow'
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline'

const RegisterAdmin = () => {
	const [showModal, setShowModal] = useState(false)
	const [isPasswordVisible, setIsPasswordVisible] = useState(true)
	const [isPasswordConfirmVisible, setIsPasswordConfirmVisible] = useState(true)

	return (
		<div className=''>
			<div className='flex flex-col items-center pt-10 md:pt-14 mt-14'>
				<div>
					<h3 className='text-3xl text-p-blue'>Registrar administrador</h3>
				</div>
				<div className='w-full py-4 mt-1 px-4 overflow-hidde max-w-xs md:max-w-3xl'>
					<form>
						<div className='md:grid md:grid-cols-2 gap-5 '>
							<div className='mt-4 '>
								<label
									htmlFor='dni'
									className='block text-sm font-medium text-p-blue mb-2'
								>
									Cédula
								</label>
								<div className='flex flex-col items-start '>
									<input
										type='text'
										name='dni'
										className=' w-full mt-1 rounded-md shadow-sm bg-p-silver p-2'
										placeholder='Nombre del usuario'
									/>
								</div>
							</div>
							<div className='mt-4 '>
								<label
									htmlFor='name'
									className='block text-sm font-medium text-p-blue mb-2'
								>
									Nombre
								</label>
								<div className='flex flex-col items-start '>
									<input
										type='text'
										name='name'
										className=' w-full mt-1 rounded-md shadow-sm bg-p-silver p-2'
										placeholder='Nombre del usuario'
									/>
								</div>
							</div>
							<div className='mt-4 '>
								<label
									htmlFor='first_last_name'
									className='block text-sm font-medium text-p-blue mb-2'
								>
									Primer apellido
								</label>
								<div className='flex flex-col items-start '>
									<input
										type='text'
										name='first_last_name'
										className=' w-full mt-1 rounded-md shadow-sm bg-p-silver p-2'
										placeholder='Primer apellido'
									/>
								</div>
							</div>
							<div className='mt-4 '>
								<label
									htmlFor='second_last_name'
									className='block text-sm font-medium text-p-blue mb-2'
								>
									Segundo apellido
								</label>
								<div className='flex flex-col items-start '>
									<input
										type='text'
										name='second_last_name'
										className=' w-full mt-1 rounded-md shadow-sm bg-p-silver p-2'
										placeholder='Segundo apellido'
									/>
								</div>
							</div>
							<div className='mt-4 '>
								<label
									htmlFor='second_last_name'
									className='block text-sm font-medium text-p-blue mb-2'
								>
									Correo electrónico
								</label>
								<div className='flex flex-col items-start '>
									<input
										type='email'
										name='second_last_name'
										className=' w-full mt-1 rounded-md shadow-sm bg-p-silver p-2'
										placeholder='Correo electrónico'
									/>
								</div>
							</div>
							<div className='mt-4'>
								<label
									htmlFor='new_password'
									className='block text-sm font-medium text-p-blue mb-2'
								>
									Contraseña
								</label>
								<div className='flex flex-col items-start relative '>
									<input
										type={isPasswordVisible ? 'password' : 'text'}
										name='new_password'
										className=' w-full mt-1 rounded-md shadow-sm bg-p-silver p-2 pr-12'
										placeholder='Contraseña'
									/>
									<div
										className='flex absolute inset-y-0 left-56 ml-6 md:left-64 md:ml-16 items-center cursor-pointer '
										onClick={() => setIsPasswordVisible(!isPasswordVisible)}
									>
										{isPasswordVisible ? (
											<EyeSlashIcon className='h-6 w-6 text-p-blue' />
										) : (
											<EyeIcon className='h-6 w-6 text-p-blue' />
										)}
									</div>
								</div>
							</div>
							<div className='mt-4'>
								<label
									htmlFor='password_confirmation'
									className='block text-sm font-medium text-p-blue mb-2'
								>
									Confirmar contraseña
								</label>
								<div className='flex flex-col items-start relative'>
									<input
										type={isPasswordConfirmVisible ? 'password' : 'text'}
										name='password_confirmation'
										className=' w-full mt-1 rounded-md shadow-sm bg-p-silver p-2 pr-12'
										placeholder='Confirmar contraseña'
									/>
									<div
										className='flex absolute inset-y-0 left-56 ml-6 md:left-64 md:ml-16 items-center cursor-pointer '
										onClick={() =>
											setIsPasswordConfirmVisible(!isPasswordConfirmVisible)
										}
									>
										{isPasswordConfirmVisible ? (
											<EyeSlashIcon className='h-6 w-6 text-p-blue' />
										) : (
											<EyeIcon className='h-6 w-6 text-blue' />
										)}
									</div>
								</div>
							</div>
						</div>
						<div className='md:px-36'>
							{showModal ? <ModalWindow setShowModal={setShowModal} /> : null}
							<button
								type='submit'
								className='text-p-white bg-p-purple mt-6 focus:outline-none font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center'
							>
								Registrar
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}

export default RegisterAdmin

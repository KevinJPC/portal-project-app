import React, { useState } from 'react'
/* Importing the EyeIcon from the heroicons package. */
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline'

const UpdatePassword = () => {
	const [isOldPasswordVisible, setIsOldPasswordVisible] = useState(true)
	const [isNewPasswordVisible, setIsNewPasswordVisible] = useState(true)
	const [isPasswordConfirmVisible, setIsPasswordConfirmVisible] = useState(true)

	return (
		<div className=' mt-16'>
			<div className='flex flex-col items-center pt-6 justify-center sm:pt-0'>
				<div>
					<h3 className='text-3xl text-p-blue'>Cambiar contraseña</h3>
				</div>
				<div className='w-full py-4 mt-4 overflow-hidde max-w-xs sm:max-w-md'>
					<form>
						<div className='mt-4 '>
							<label
								htmlFor='old_password'
								className='block text-sm font-medium text-p-blue mb-2'
							>
								Contraseña actual
							</label>
							<div className='flex flex-col items-start relative'>
								<input
									type={isOldPasswordVisible ? 'password' : 'text'}
									name='old_password'
									className=' w-full mt-1 rounded-md shadow-sm bg-p-silver p-2 pr-12'
									placeholder='Contraseña actual'
								/>
								<div
									className='flex absolute inset-y-0 left-64 ml-3 sm:left-80 sm:ml-20 items-center pl-3 cursor-pointer '
									onClick={() => setIsOldPasswordVisible(!isOldPasswordVisible)}
								>
									{isOldPasswordVisible ? (
										<EyeSlashIcon className='h-6 w-6 text-p-blue' />
									) : (
										<EyeIcon className='h-6 w-6 text-p-blue' />
									)}
								</div>
							</div>
						</div>
						<div className='mt-4'>
							<label
								htmlFor='new_password'
								className='block text-sm font-medium text-p-blue mb-2'
							>
								Nueva contraseña
							</label>
							<div className='flex flex-col items-start relative '>
								<input
									type={isNewPasswordVisible ? 'password' : 'text'}
									name='new_password'
									className=' w-full mt-1 rounded-md shadow-sm bg-p-silver p-2 pr-12'
									placeholder='Nueva contraseña'
								/>
								<div
									className='flex absolute inset-y-0 left-64 ml-3 sm:left-80 sm:ml-20 items-center pl-3 cursor-pointer '
									onClick={() => setIsNewPasswordVisible(!isNewPasswordVisible)}
								>
									{isNewPasswordVisible ? (
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
									className='flex absolute inset-y-0 left-64 ml-3 sm:left-80 sm:ml-20 items-center pl-3 cursor-pointer '
									onClick={() =>
										setIsPasswordConfirmVisible(!isPasswordConfirmVisible)
									}
								>
									{isPasswordConfirmVisible ? (
										<EyeSlashIcon className='h-6 w-6 text-p-blue' />
									) : (
										<EyeIcon className='h-6 w-6 text-p-blue' />
									)}
								</div>
							</div>
						</div>
						<button
							type='submit'
							className='text-p-white bg-p-purple mt-7 focus:outline-none font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center'
						>
							Restablecer
						</button>
					</form>
				</div>
			</div>
		</div>
	)
}

export default UpdatePassword

import React from 'react'

const UpdateUser = () => {
	return (
		<div className=' mt-16 w-full'>
			<div className='flex flex-col items-center pt-6 justify-center sm:pt-0'>
				<div>
					<h3 className='text-3xl text-p-blue'>Editar perfil</h3>
				</div>
				<div className='w-full px-6 py-4 mt-1 overflow-hidde max-w-xs sm:max-w-md'>
					<form>
						<div className='mt-4 '>
							<label
								htmlFor='name'
								className='block text-sm font-medium text-p-blue mb-2'
							>
								Nombre
							</label>
							<div className='flex flex-col items-start relative'>
								<input
									type='text'
									name='old_password'
									className=' w-full mt-1 rounded-md shadow-sm bg-p-silver p-2'
									placeholder='Nombre'
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
							<div className='flex flex-col items-start relative'>
								<input
									type='text'
									name='first_last_name'
									className=' w-full mt-1 rounded-md shadow-sm bg-p-silver p-2'
									placeholder='Nombre'
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
							<div className='flex flex-col items-start relative'>
								<input
									type='text'
									name='second_last_name'
									className=' w-full mt-1 rounded-md shadow-sm bg-p-silver p-2'
									placeholder='Nombre'
								/>
							</div>
						</div>
						<div className='mt-4 '>
							<label
								htmlFor='email'
								className='block text-sm font-medium text-p-blue mb-2'
							>
								Correo electrónico
							</label>
							<div className='flex flex-col items-start relative'>
								<input
									type='email'
									name='email'
									className=' w-full mt-1 rounded-md shadow-sm bg-p-silver p-2'
									placeholder='Nombre'
								/>
							</div>
						</div>
						<button
							type='submit'
							className='text-p-white bg-p-purple mt-7 focus:outline-none font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center'
						>
							Editar
						</button>
					</form>
				</div>
			</div>
		</div>
	)
}

export default UpdateUser

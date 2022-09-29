import React from 'react'

const UpdateRole = () => {
	return (
		<div>
			<div className=' mt-16'>
				<div className='flex flex-col items-center pt-6 justify-center sm:pt-0'>
					<div>
						<h3 className='text-3xl text-blue'>Registrar Rol</h3>
					</div>
					<div className='w-full px-6 py-4 mt-1 overflow-hidde max-w-xs sm:max-w-md'>
						<form>
							<div className='mt-4 '>
								<label
									htmlFor='name'
									className='block text-sm font-medium text-blue mb-2'
								>
									Nombre
								</label>
								<div className='flex flex-col items-start relative'>
									<input
										type='text'
										name='name'
										className=' w-full mt-1 rounded-md shadow-sm bg-silver p-2'
										placeholder='Nombre'
									/>
								</div>
							</div>

							<div className='mt-4 '>
								<label
									htmlFor='description'
									className='block text-sm font-medium text-blue mb-2'
								>
									Descripción
								</label>
								<div className='flex flex-col items-start relative'>
									<textarea 
										type='text'
										name='description'
										className=' w-full mt-1 rounded-md shadow-sm bg-silver p-2'
										placeholder='Descripción'
									/>
								</div>
							</div>
							<button
								type='submit'
								className='text-white bg-red mt-7 focus:outline-none font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center'
							>
								Desactivar
							</button>
							<button
								type='submit'
								className='text-white bg-purple mt-7 focus:outline-none font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center'
							>
								Editar
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}

export default UpdateRole

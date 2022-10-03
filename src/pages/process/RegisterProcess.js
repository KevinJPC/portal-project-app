import React from 'react'

const RegisterProcess = () => {
	return (
		<div className=' '>
			<div className='flex flex-col items-center pt-6 justify-center sm:pt-0 mt-24'>
				<div>
					<h3 className='text-3xl text-p-blue'>Registrar proceso</h3>
				</div>
				<div className='w-full px-6 py-4 mt-1 overflow-hidde max-w-xs sm:max-w-md'>
					<form>
						<div className='mt-4 '>
							<label
								htmlFor='name'
								className='block text-sm font-medium text-blue mb-2'
							>
								Nombre del proceso
							</label>
							<div className='flex flex-col items-start '>
								<input
									type='text'
									name='name'
									className=' w-full mt-1 rounded-md shadow-sm bg-p-silver p-2'
									placeholder='Nombre del proceso'
								/>
							</div>
						</div>
						<div className='mt-4 '>
							<label className='block text-sm font-medium text-blue mb-2'>
								Proceso
							</label>
							<select
								id='countries'
								className='bg-p-silver text-sm rounded-lg block w-full p-2.5'
							>
								<option defaultValue>Choose a country</option>
								<option value='US'>United States</option>
								<option value='CA'>Canada</option>
								<option value='FR'>France</option>
								<option value='DE'>Germany</option>
							</select>
						</div>
						<div className='mt-4 '>
							<label
								htmlFor='first_last_name'
								className='block text-sm font-medium text-p-blue mb-2'
							>
								Roles
							</label>
							<div className='flex items-center gap-3 md:gap-4'>
								<select
									id='countries'
									className='bg-p-silver text-sm rounded-lg block w-full p-2.5'
								>
									<option defaultValue>Choose a country</option>
									<option value='US'>United States</option>
									<option value='CA'>Canada</option>
									<option value='FR'>France</option>
									<option value='DE'>Germany</option>
								</select>
								<button
									type='button'
									className='text-p-white bg-p-purple font-medium rounded-lg text-sm px-4 sm:px-8 py-2.5 text-center'
								>
									Agregar
								</button>
							</div>
						</div>
						<div className='mt-5 bg-p-silver p-12 rounded-lg overflow-y-auto'></div>
						<div className='mt-4 '>
							<div className='flex items-center'>
								<label
									htmlFor='visible'
									className='mr-5 text-sm font-medium text-p-blue'
								>
									Mostrar proceso
								</label>
								<input
									id='visible'
									type='checkbox'
									value=''
									className='w-5 h-5 text-p-silver rounded'
								/>
							</div>
						</div>
						<button
							type='submit'
							className='text-p-white bg-p-purple mt-7 focus:outline-none font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center'
						>
							Registrar
						</button>
					</form>
				</div>
			</div>
		</div>
	)
}

export default RegisterProcess

import React from 'react'
import Input from '../../components/inputs/TextInput'

const RegisterRole = () => {
	return (
		<div>
			<div className=' mt-16'>
				<div className='flex flex-col items-center pt-6 justify-center sm:pt-0'>
					<div>
						<h3 className='text-3xl text-p-blue'>Registrar Rol</h3>
					</div>
					<div className='w-full px-6 py-4 mt-1 overflow-hidde max-w-xs sm:max-w-md'>
						<form>
							<div className='mt-4 '>
								<div className='flex flex-col items-start relative'>
									<Input
										value={''}
										id='name'
										className=' w-full mt-1 rounded-md shadow-sm bg-p-silver p-2'
										placeholder='Nombre'
										onChange={() => {}}
									/>
								</div>
							</div>

							<div className='mt-4 '>
								<div className='flex flex-col items-start relative'>
									<Input
										value={''}
										id='description'
										className=' w-full mt-1 rounded-md shadow-sm bg-p-silver p-2'
										placeholder='Descripción'
										onChange={() => {}}
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
		</div>
	)
}

export default RegisterRole

import React, { useState } from 'react'
import ModalWindow from '../../components/ModalWindow'

const UpdateAdmin = () => {
	const [showModal, setShowModal] = useState(false)

	return (
		<div className=''>
			<div className='flex flex-col items-center pt-10 md:pt-2 mt-14'>
				<div>
					<h3 className='text-3xl text-blue'>Modificar usuario</h3>
				</div>
				<div className='w-full py-4 mt-1 px-4 overflow-hidde max-w-xs md:max-w-3xl'>
					<form>
						<div className='md:grid md:grid-cols-2 gap-5 '>
							<div className='mt-4 '>
								<label
									htmlFor='name'
									className='block text-sm font-medium text-blue mb-2'
								>
									Nombre
								</label>
								<div className='flex flex-col items-start '>
									<input
										type='text'
										name='name'
										className=' w-full mt-1 rounded-md shadow-sm bg-silver p-2'
										placeholder='Nombre del usuario'
									/>
								</div>
							</div>
							<div className='mt-4 '>
								<label
									htmlFor='first_last_name'
									className='block text-sm font-medium text-blue mb-2'
								>
									Primer apellido
								</label>
								<div className='flex flex-col items-start '>
									<input
										type='text'
										name='first_last_name'
										className=' w-full mt-1 rounded-md shadow-sm bg-silver p-2'
										placeholder='Primer apellido'
									/>
								</div>
							</div>
							<div className='mt-4 '>
								<label
									htmlFor='second_last_name'
									className='block text-sm font-medium text-blue mb-2'
								>
									Segundo apellido
								</label>
								<div className='flex flex-col items-start '>
									<input
										type='text'
										name='second_last_name'
										className=' w-full mt-1 rounded-md shadow-sm bg-silver p-2'
										placeholder='Segundo apellido'
									/>
								</div>
							</div>
							<div className='mt-4 '>
								<label
									htmlFor='second_last_name'
									className='block text-sm font-medium text-blue mb-2'
								>
									Correo electrónico
								</label>
								<div className='flex flex-col items-start '>
									<input
										type='email'
										name='second_last_name'
										className=' w-full mt-1 rounded-md shadow-sm bg-silver p-2'
										placeholder='Correo electrónico'
									/>
								</div>
							</div>
						</div>
						<div className='md:px-36'>
							<button
								type='button'
								className='text-white bg-red mt-7 focus:outline-none font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center'
								onClick={() => setShowModal(true)}
							>
								Desactivar
							</button>
							{showModal ? <ModalWindow setShowModal={setShowModal} /> : null}
							<button
								type='submit'
								className='text-white bg-purple mt-6 focus:outline-none font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center'
							>
								Modificar
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}

export default UpdateAdmin

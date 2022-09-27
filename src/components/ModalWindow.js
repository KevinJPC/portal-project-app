import React from 'react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/solid'
import PropTypes from 'prop-types'

function ModalWindow({ setShowModal }) {
	return (
		<div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 backdrop-blur-sm backdrop-brightness-75'>
			<div className='relative p-8 sm:p-0 w-full max-w-md h-auto md:h-auto'>
				<div className=' bg-white shadow rounded-lg'>
					<div className='flex flex-col items-center '>
						<div className='mt-8 mb-3'>
							<ExclamationTriangleIcon className='h-8 w-8 text-red ' />
						</div>
						<h3 className='mb-5 text-lg font-normal'>
							¿Está seguro de eliminar este registro?
						</h3>
						<div className='bg-gray py-3 w-full rounded-b-lg text-end'>
							<div className='mr-3'>
								<button
									type='button'
									className='text-blue font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2'
									onClick={() => setShowModal(false)}
								>
									Cancelar
								</button>
								<button
									type='button'
									className='text-white bg-red rounded-md text-sm font-medium px-6 py-2 '
									onClick={() => setShowModal(false)}
								>
									Desactivar
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

ModalWindow.propTypes = {
	setShowModal: PropTypes.func,
}

export default ModalWindow
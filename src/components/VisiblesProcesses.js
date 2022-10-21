import React, { useState } from 'react'
import PropTypes from 'prop-types'
import ClickButton from './buttons/ClickButton'
import { useStartNewProcessMutation } from '../app/services/userHasProcessApi'
import ModalWindow from './ModalWindow'

function VisiblesProcesses({ visibleProcesses }) {
	const { name, createdAt, id } = visibleProcesses
	const [showModal, setShowModal] = useState(false)

	const [startProcess, { isLoading }] = useStartNewProcessMutation()

	const handleStart = () => {
		setShowModal(true)
	}

	const areSureActivate = choose => {
		if (choose) {
			setShowModal(false)
			//filter and send body
			// startProcess(id)
		}
	}

	return (
		<div className='flex flex-col pt-2 sm:pt-0 mt-4'>
			<div className='flex justify-center py-4'>
				<div className='w-3/4 bg-p-gray rounded'>
					<div className='md:grid md:grid-cols-3 text-center items-center justify-items-center px-2 py-6 md:py-3'>
						<div className='p-4 px-1 break-words text-p-blue'>
							<p className='text-ms  font-fira-medium font-medium leading-5'>
								Nombre
							</p>
							<p className='text-center leading-normal pt-2'>{name}</p>
						</div>
						<div className='p-4 px-1 break-words text-p-blue'>
							<p className='text-ms font-fira-medium font-medium leading-5'>
								Fecha creación
							</p>
							<p className='text-center leading-normal pt-2'>{createdAt} </p>
						</div>
						<div>
							<ClickButton
								isLoading={isLoading}
								text='Iniciar'
								func={handleStart}
								color='purple'
							/>
							{showModal && (
								<ModalWindow
									text='¿Está seguro de iniciar este proceso?'
									buttonText='Iniciar'
									setShowModal={setShowModal}
									onDialog={areSureActivate}
								/>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

VisiblesProcesses.propTypes = {
	visibleProcesses: PropTypes.object,
	buttonText: PropTypes.string,
}

export default VisiblesProcesses

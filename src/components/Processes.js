import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import ModalWindow from './ModalWindow'
import ClickButton from './buttons/ClickButton'
import useProcess from '../hooks/useProcess'
import useForm from '../hooks/useForm'
import useParseTo from '../hooks/useParseTo'

function Processes({ processes, buttonText }) {
	const { id, name, createdAt, updatedAt } = processes

	const { parseToDate } = useParseTo()

	const { showModal, closeModal, openModal } = useForm()

	const {
		updateProps: { activateSelectedProcess, isLoadingActivateProcess },
	} = useProcess()

	return (
		<div className='flex flex-col pt-2 sm:pt-0 mt-4'>
			<div className='flex justify-center py-4'>
				<div className='w-3/4 bg-p-gray rounded'>
					<div className='md:grid md:grid-cols-4 text-center items-center justify-items-center px-2 py-6 md:py-3'>
						<div className='p-4 px-1 break-words text-p-blue'>
							<p className='text-ms  font-fira-medium font-medium leading-5'>
								Nombre del proceso
							</p>
							<p className='text-center leading-normal pt-2'>{name}</p>
						</div>
						<div className='p-4 px-1 break-words text-p-blue'>
							<p className='text-ms font-fira-medium font-medium leading-5'>
								Fecha de creacción
							</p>
							<p className='text-center leading-normal pt-2'>
								{parseToDate(createdAt)}
							</p>
						</div>
						<div className='p-4 px-1 break-words text-p-blue '>
							<p className='text-ms font-medium leading-5 break-words font-fira-medium'>
								Fecha de modificación
							</p>
							<p className='text-sm leading-normal pt-2'>
								{parseToDate(updatedAt)}
							</p>
						</div>
						<div className='text-center'>
							{buttonText === 'Modificar' ? (
								<Link
									to={`editar/${id}`}
									className='text-p-white bg-p-purple text-center font-medium rounded-lg text-xs sm:text-sm p-1.5 px-10 py-3 ml-4 md:mr-2'
								>
									{buttonText}
								</Link>
							) : (
								<ClickButton
									isLoading={isLoadingActivateProcess}
									text={buttonText}
									func={openModal}
									color='purple'
								/>
							)}
							{showModal && (
								<ModalWindow
									text='¿Está seguro de activar este registro?'
									buttonText='Activar'
									setShowModal={closeModal}
									onDialog={() => activateSelectedProcess(id)}
								/>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

Processes.propTypes = {
	processes: PropTypes.object,
	buttonText: PropTypes.string,
}

export default Processes

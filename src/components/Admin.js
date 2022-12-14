import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import ClickButton from './buttons/ClickButton'
import ModalWindow from './ModalWindow'
import useParseTo from '../hooks/useParseTo'
import useForm from '../hooks/useForm'
import useAdmin from '../hooks/useAdmin'

function Admins({ admins, buttonText }) {
	const { name, firstLastName, secondLastName, email, dni, createdAt, id } =
		admins
	const { parseToDate } = useParseTo()

	const { showModal, closeModal, openModal } = useForm()
	const {
		updateProps: { activateAdminUser, isLoadingActivateAdmin },
	} = useAdmin()

	return (
		<div className='flex flex-col'>
			<div className='flex justify-center py-4'>
				<div className='w-auto bg-p-gray rounded'>
					<div className='md:grid md:grid-cols-5 text-center items-center justify-items-center px-2 py-6 md:py-3'>
						<div className='p-4 px-1 break-words text-p-blue'>
							<p className='text-ms font-fira-medium font-medium leading-5'>
								Nombre completo
							</p>
							<p className='text-center leading-normal pt-2'>
								{name + ' ' + firstLastName + ' ' + secondLastName}
							</p>
						</div>
						<div className='p-4 px-1 break-words text-p-blue'>
							<p className='text-ms font-fira-medium font-medium leading-5'>
								Correo electronico
							</p>
							<p className='text-center leading-normal pt-2'>{email}</p>
						</div>
						<div className='p-4 px-1 break-words text-p-blue '>
							<p className='text-ms font-medium leading-5 break-words font-fira-medium'>
								Cédula
							</p>
							<p className='text-sm leading-normal pt-2'>{dni}</p>
						</div>
						<div className='p-4 px-1 break-words text-p-blue '>
							<p className='text-ms font-medium leading-5 break-words font-fira-medium'>
								Fecha de creación
							</p>
							<p className='text-sm leading-normal pt-2'>
								{parseToDate(createdAt)}
							</p>
						</div>
						<div className='p-8'>
							{buttonText === 'Modificar' ? (
								<Link
									to={`editar/${id}`}
									className='text-p-white bg-p-purple shadow-p-purple text-center font-medium rounded-lg text-xs sm:text-sm p-1.5 px-10 py-3 ml-4 md:mr-2'
								>
									{buttonText}
								</Link>
							) : (
								<ClickButton
									isLoading={isLoadingActivateAdmin}
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
									onDialog={() => activateAdminUser(id)}
								/>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

Admins.propTypes = {
	admins: PropTypes.object,
	buttonText: PropTypes.string,
}
export default Admins

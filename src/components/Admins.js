import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import ClickButton from './buttons/ClickButton'
import { useActivateAdminMutation } from '../app/services/adminApi'

function Admins({ admin, buttonText }) {
	const [activateAdmin, { isLoading: isLoadingActivate }] =
		useActivateAdminMutation()
	const { name, firstLastName, secondLastName, email, dni, createdAt, id } =
		admin

	const activate = async e => {
		e.preventDefault()
		// setShowModal(true)
		// if (isInactivate) {
		await activateAdmin(id).unwrap()
		// navigate(-1)
		// }
	}

	return (
		<div className='flex flex-col pt-2 sm:pt-0'>
			<div className='flex justify-center py-4'>
				<div className='w-auto bg-p-gray rounded'>
					<div className='md:grid md:grid-cols-5 text-center items-center justify-items-center px-2 py-6 md:py-3'>
						<div className='p-4 px-1 break-words text-p-blue'>
							<p className='text-ms  font-fira-medium font-medium leading-5'>
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
							<p className='text-sm leading-normal pt-2'>{createdAt}</p>
						</div>
						<div className='p-8'>
							{buttonText === 'Modificar' ? (
								<Link
									to={`editar/${id}`}
									className='text-p-white bg-p-purple text-center font-medium rounded-lg text-xs sm:text-sm p-1.5 px-10 py-3 ml-4 md:mr-2'
								>
									{buttonText}
								</Link>
							) : (
								<ClickButton
									isLoading={isLoadingActivate}
									text={buttonText}
									func={activate}
									color='purple'
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
	admin: PropTypes.object,
	buttonText: PropTypes.string,
}
export default Admins

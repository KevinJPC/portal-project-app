import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import ClickButton from './buttons/ClickButton'
import { useActivateRoleMutation } from '../app/services/roleApi'

function Roles({ data, buttonText }) {
	const { name, description, createdAt, id } = data
	const [activateRole, { isLoading: isLoadingActivate }] =
		useActivateRoleMutation()
	const handleActivate = e => {
		e.preventDefault()
		activateRole(id)
	}

	return (
		<div className='flex flex-col pt-2 sm:pt-0'>
			<div className='flex justify-center py-4'>
				<div className='w-3/4 bg-p-gray rounded'>
					<div className='md:grid md:grid-cols-4 text-center items-center justify-items-center px-2 py-6 md:py-3'>
						<div className='p-4 px-1 break-words text-p-blue'>
							<p className='text-ms  font-fira-medium font-medium leading-5'>
								Nombre
							</p>
							<p className='text-center leading-normal pt-2'>{name}</p>
						</div>
						<div className='p-4 px-1 break-words text-p-blue'>
							<p className='text-ms font-fira-medium font-medium leading-5'>
								Descripción
							</p>
							<p className='text-center leading-normal pt-2'>{description} </p>
						</div>
						<div className='p-4 px-1 break-words text-p-blue '>
							<p className='text-ms font-medium leading-5 break-words font-fira-medium'>
								Fecha de creacción
							</p>
							<p className='text-sm leading-normal pt-2'>{createdAt}</p>
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
									isLoading={isLoadingActivate}
									text={buttonText}
									func={handleActivate}
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

Roles.propTypes = {
	data: PropTypes.object,
	buttonText: PropTypes.string,
	route: PropTypes.string,
}

export default Roles

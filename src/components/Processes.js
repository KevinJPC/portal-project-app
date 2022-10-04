import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

function Processes({ name, creationDate, modifyDate, buttonText, route }) {
	return (
		<div className='flex flex-col pt-2 sm:pt-0 '>
			<div className='flex justify-center py-4'>
				<div className='w-3/4 bg-p-gray rounded'>
					<div className='md:grid md:grid-cols-4 text-center justify-center items-center justify-items-center gap-4 sm:pr-auto'>
						<div className='p-6 px-1 break-words text-p-blue'>
							<p className='text-ms  font-fira-medium font-medium leading-5'>
								Nombre del proceso
							</p>
							<p className='text-center leading-normal pt-2'>{name}</p>
						</div>
						<div className='p-6 px-1 break-words text-p-blue'>
							<p className='text-ms font-fira-medium font-medium leading-5'>
								Fecha de creacción
							</p>
							<p className='text-center leading-normal pt-2'>{creationDate}</p>
						</div>
						<div className='p-6 px-1 break-words text-p-blue '>
							<p className='text-ms font-medium leading-5 break-words font-fira-medium'>
								Fecha de modificación
							</p>
							<p className='text-sm leading-normal pt-2'>{modifyDate}</p>
						</div>
						<div className='p-8 text-center'>
							<Link
								to={route}
								className='text-p-white bg-p-purple text-center font-medium rounded-lg text-xs sm:text-sm p-1.5 px-10 py-3 ml-4 md:mr-2'
							>
								{buttonText}
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

Processes.propTypes = {
	name: PropTypes.string,
	description: PropTypes.string,
	modifyDate: PropTypes.string,
	buttonText: PropTypes.string,
	route: PropTypes.string,
}

export default Processes

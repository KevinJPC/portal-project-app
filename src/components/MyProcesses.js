import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

function MyProcesses({
	name,
	creationDate,
	activitynow,
	percentageAdvance,
	buttonText,
	route,
}) {
	return (
		<div className='flex flex-col pt-2'>
			<div className='flex justify-center py-4'>
				<div className='w-3/4 bg-p-gray rounded'>
					<div className='sm:grid md:grid-cols-4 text-center justify-items-center gap-2 sm:px-32 '>
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
								Actividad actual
							</p>
							<p className='text-sm leading-normal pt-2'>{activitynow}</p>
						</div>
						<div className='p-4 px-1 break-words text-p-blue '>
							<p className='text-ms font-medium leading-5 break-words font-fira-medium'>
								Avance porcentual
							</p>
							<p className='text-sm leading-normal pt-2'>{percentageAdvance}</p>
						</div>
						<div className='p-8 text-center'>
							<Link
								to={route}
								className='text-p-white bg-p-purple text-center font-medium rounded-lg text-xs sm:text-sm'
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
MyProcesses.propTypes = {
	name: PropTypes.string,
	description: PropTypes.string,
	activitynow: PropTypes.string,
	percentageAdvance: PropTypes.string,
	buttonText: PropTypes.string,
	route: PropTypes.string,
}

export default MyProcesses

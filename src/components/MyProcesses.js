import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

function MyProcesses({ userProcesses }) {
	const { name, createdAt, activity, id } = userProcesses

	return (
		<div className='flex flex-col pt-2 sm:pt-0 mt-4'>
			<div className='flex justify-center py-4'>
				<div className='w-3/4 bg-p-gray rounded'>
					<div className='md:grid md:grid-cols-4 text-center items-center justify-items-center px-2 py-6 md:py-3'>
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
							<p className='text-center leading-normal pt-2'>{createdAt}</p>
						</div>
						<div className='p-6 px-1 break-words text-p-blue '>
							<p className='text-ms font-medium leading-5 break-words font-fira-medium'>
								Actividad actual
							</p>
							<p className='text-sm leading-normal pt-2'>{activity}</p>
						</div>
						{/* <div className='p-4 px-1 break-words text-p-blue '>
							<p className='text-ms font-medium leading-5 break-words font-fira-medium'>
								Avance porcentual
							</p>
							<p className='text-sm leading-normal pt-2'>{percentageAdvance}</p>
						</div> */}
						<div className='p-8 '>
							<Link
								to={`${id}`}
								className='text-p-white md:flex bg-p-purple text-center font-medium rounded-lg text-xs md:text-sm p-1.5 px-10 py-3 md:mr-2'
							>
								Más información
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
MyProcesses.propTypes = {
	userProcesses: PropTypes.object,
}

export default MyProcesses

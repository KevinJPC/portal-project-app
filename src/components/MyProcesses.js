import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { format } from 'date-fns'

function MyProcesses({ userProcesses }) {
	const { name, startedAt, finishedAt, enabledActivity, status, id } =
		userProcesses
	const dateStarted = format(new Date(startedAt), 'dd/MM/yyyy')
	const dateFinished = format(new Date(finishedAt), 'dd/MM/yyyy')
	return (
		<div className='flex flex-col pt-2 sm:pt-0 md:px-10 mt-4'>
			<div className='flex justify-center py-4'>
				<div className='w-auto bg-p-gray rounded'>
					<div className='md:grid md:grid-cols-5 text-center items-center justify-items-center px-2 py-6 md:py-1'>
						<div className='p-6 px-1 break-words text-p-blue md:text-left'>
							<p className='text-ms font-fira-medium font-medium leading-5'>
								Nombre
							</p>
							<p className='text-center leading-normal pt-2'>{name}</p>
						</div>
						<div className='p-6 px-9 break-words text-p-blue '>
							<p className='text-ms font-medium leading-5 break-words font-fira-medium'>
								Estado
							</p>
							<p className='flex justify-center text-sm leading-normal py-1 px-2 bg-p-purple rounded-full text-p-white'>
								En progreso
							</p>
						</div>
						<div className='p-6 px-1 break-words text-p-blue '>
							<p className='text-ms font-medium leading-5 break-words font-fira-medium'>
								Actividad actual
							</p>
							<p className='text-sm leading-normal pt-2'>{enabledActivity}</p>
						</div>
						<div className='p-6 px-1 break-words text-p-blue'>
							<p className='text-ms font-fira-medium font-medium leading-5'>
								Fecha de inicio
							</p>
							<p className='text-center leading-normal pt-2'>{dateStarted}</p>
						</div>
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

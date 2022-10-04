import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowDownIcon } from '@heroicons/react/24/solid'

function AboutProcesses({
	name,
	creationDate,
	activitynow,
	percentageAdvance,
}) {
	return (
		<div className='flex flex-col pt-2 sm:pt-0 '>
			<div className='flex justify-center py-4'>
				<div className='w-3/4 bg-p-gray rounded'>
					<div className='md:grid md:grid-cols-2 justify-items-start text-center gap-4 '>
						<div>
							<div className='p-6 px-1 break-words text-p-blue'>
								<p className='text-ms  font-fira-medium font-medium leading-5'>
									Nombre del proceso
								</p>
								<p className='text-center leading-normal pt-2'>{name}</p>
							</div>
							<div className='p-6 px-1 break-words text-p-blue'>
								<p className='text-ms  font-fira-medium font-medium leading-5'>
									Fecha de creacción
								</p>
								<p className='text-center leading-normal pt-2'>
									{creationDate}
								</p>
							</div>
							<div className='p-6 px-1 break-words text-p-blue'>
								<p className='text-ms  font-fira-medium font-medium leading-5'>
									Actividad actual
								</p>
								<p className='text-center leading-normal pt-2'>{activitynow}</p>
							</div>
							<div className='p-6 px-1 break-words text-p-blue'>
								<p className='text-ms  font-fira-medium font-medium leading-5'>
									Avance porcentual
								</p>
								<p className='text-center leading-normal pt-2'>
									{percentageAdvance}
								</p>
							</div>
						</div>
						<div>
							<div className='p-6 justify-items-center px-1 break-words text-p-blue'>
								<p className='text-ms  font-fira-medium font-medium leading-5'>
									Actividades
								</p>
							</div>

							<div className='flex flex-row items-center gap-6 p-1'>
								<p className='text-ms  font-fira-medium font-medium leading-5'>
									Actividad
								</p>
								<div className='p-4 shadow-sm bg-p-silver w-16 h-16 rounded-full'>
									1
								</div>
								<Link
									to='/'
									className='text-p-white bg-p-purple text-center font-medium rounded-lg text-xs sm:text-sm p-1.5 px-10 py-3 ml-4 md:mr-2'
								>
									Ir a actividad
								</Link>
							</div>

							<div className='flex flex-row items-center gap-6 p-1'>
								<p className='text-ms  font-fira-medium font-medium leading-5'>
									Actividad
								</p>
								<div className='p-4 shadow-sm bg-p-silver w-16 h-16 rounded-full'>
									2
								</div>
								<Link
									to='/'
									className='text-p-white bg-p-purple text-center font-medium rounded-lg text-xs sm:text-sm p-1.5 px-10 py-3 ml-4 md:mr-2'
								>
									Ir a actividad
								</Link>
							</div>
							<div className='flex flex-row items-center gap-6 p-1'>
								<p className='text-ms  font-fira-medium font-medium leading-5'>
									Actividad
								</p>
								<div className='p-4 shadow-sm bg-p-blue w-16 h-16 rounded-full'>
									3
								</div>
								<Link
									to='/'
									className='text-p-white bg-p-purple text-center font-medium rounded-lg text-xs sm:text-sm p-1.5 px-10 py-3 ml-4 md:mr-2'
								>
									Ir a actividad
								</Link>
							</div>
							<div></div>
							<div className='flex flex-row items-center gap-6 p-1'>
								<p className='text-ms  font-fira-medium font-medium leading-5'>
									Actividad
								</p>
								<div className='p-4 shadow-sm bg-p-silver w-16 h-16 rounded-full'>
									4
								</div>
								<Link
									to='/'
									className='text-p-white bg-p-purple text-center font-medium rounded-lg text-xs sm:text-sm p-1.5 px-10 py-3 ml-4 md:mr-2'
								>
									Ir a actividad
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default AboutProcesses

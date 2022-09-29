import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
function Roles({ name, description, date, buttonText, route }) {
	return (
		<div className='flex flex-col pt-2 sm:pt-0 '>
			<div className='flex justify-center py-4'>
				<div className='w-3/4 bg-gray shadow rounded'>
					<div className='pb-6'>
						<div className='md:grid md:grid-cols-4 text-center gap-4 '>
							<div className='p-6 px-1 break-words'>
								<p className='text-xl font-medium leading-5'>Nombre</p>
								<p className='text-sm leading-normal pt-6'>{name} </p>
							</div>
							<div className='p-6 px-1 break-words'>
								<p className='text-xl font-medium leading-5'>Descripción</p>
								<p className='text-center leading-normal pt-2'>{description} </p>
							</div>
							<div className='p-6 px-1 break-words'>
								<p className='text-xl font-medium leading-5'>
									Fecha de creacción
								</p>
								<p className='text-sm leading-normal pt-2'>{date}</p>
							</div>
							<div className='p-8 text-center'>
								<Link
									to={route}
									className='text-white bg-purple text-center font-medium rounded-lg text-xs sm:text-sm p-1.5 px-10 py-3 ml-4 md:mr-2'
								>
									{buttonText}
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

Roles.propTypes = {
	name: PropTypes.string,
	description: PropTypes.string,
	date: PropTypes.string,
	buttonText: PropTypes.string,
	route: PropTypes.string,
}

export default Roles

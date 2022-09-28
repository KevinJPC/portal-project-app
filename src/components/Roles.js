import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
function Roles({ name, description, date, buttonText, route }) {
	return (
		<div className='md:flex flex-col items-center pt-2 justify-center sm:pt-0'>
			<div className='md:flex items-center justify-center'>
				<div className='py-4 w-full'>
					<div className='lg:flex items-center justify-center w-full'>
						<div className='w-3/4 justify-center items-center bg-gray shadow rounded'>
							<div className='md:flex justify-center items-center pb-6'>
								<div className='md:flex items-center justify-between w-screen'>
									<div className='pl-3 p-6 items-center text-center'>
										<p className='text-xl font-medium leading-5'>Nombre</p>
										<p className='text-sm leading-normal pt-2'>{name} </p>
									</div>
									<div className='pl-3 p-6 text-center'>
										<p className='text-xl font-medium leading-5'>Descripción</p>
										<p className='text-sm leading-normal pt-2'>
											{description}{' '}
										</p>
									</div>
									<div className='pl-3 p-6 text-center'>
										<p className='text-xl font-medium leading-5'>
											Fecha de crección
										</p>
										<p className='text-sm leading-normal pt-2'>{date}</p>
									</div>
									<div className='pl-3 p-8 text-center'>
										<Link
											to={route}
											className='text-white bg-purple text-center font-medium rounded-lg text-xs sm:text-sm p-1.5 sm:px-4 sm:py-2 ml-4 md:mr-2'
										>
											{buttonText}
										</Link>
									</div>
								</div>
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

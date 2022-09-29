import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

function SearchBar({ title, buttonText, route }) {
	return (
		<div className='shadow-md w-full fixed top-30 left-0'>
			<div className='md:flex items-center justify-between bg-silver py-4 md:p-3 md:px-10 px-6'>
				<div className=''>
					<select
						id={title}
						className='bg-silver text-sm outline-none rounded-l-lg'
					>
						<option value='active'>{title} activos</option>
						<option value='inactive'>{title} inactivos</option>
					</select>
				</div>
				<div className='flex items-center'>
					<div className=''>
						<input
							className='bg-white h-10 px-2 text-sm outline-none rounded-l-lg w-36 sm:w-80'
							type='search'
							name='search'
							placeholder='Buscar'
						/>
					</div>
					<button
						type='submit'
						className='p-2.5 ml-2 text-sm font-medium bg-white hover:bg-blue-800 rounded-r-lg '
					>
						<MagnifyingGlassIcon className='h-5 w-5 text-blue ' />
					</button>
				</div>
				<Link
					to={route}
					className='text-white bg-purple text-center font-medium rounded-lg text-xs sm:text-sm p-1.5 sm:px-4 sm:py-2 ml-4 md:mr-2'
				>
					{buttonText}
				</Link>
			</div>
		</div>
	)
}

SearchBar.propTypes = {
	title: PropTypes.string,
	buttonText: PropTypes.string,
	route: PropTypes.string,
}

export default SearchBar

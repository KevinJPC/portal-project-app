import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

function SearchBar({ title, buttonText, route, getState, getdata }) {
	const [search, setSearch] = useState('')

	const searcher = e => {
		getdata(search)
	}

	const enter = event => {
		if (event.keyCode === 13) {
			searcher()
		}
	}
	

	const empty = event => {
		if (event.keyCode === 46) {
			console.log('delete')
		}
	}

	return (
		<div className='shadow-md w-full'>
			<div className='flex items-center justify-between bg-p-silver py-4 md:p-3 md:px-2 '>
				<div className='text-sm'>
					<select
						id={title}
						onChange={e => getState(e.target.value)}
						className=' bg-p-silver text-p-blue font-fira-medium lg:text-lg outline-none text-sm sm:w-auto w-20'
					>
						<option value='actives'>{title} activos</option>
						<option value='inactives'>{title} inactivos</option>
					</select>
				</div>
				<div className='flex bg-center'>
					<input
						id='search'
						onChange={e => {
							setSearch(e.target.value)
						}}
						onKeyDown={enter}
						onEmptied={searcher}
						className='bg-p-white h-10 px-2 text-sm text-p-blue outline-none focus:ring-2 focus:ring-offset-2 rounded-l-lg w-32 sm:w-80'
						type='search'
						name='search'
						placeholder='Buscar'
					/>
					<button
						onClick={searcher}
						type='submit'
						className='p-2.5 ml-2 text-sm font-medium bg-p-white rounded-r-lg mt '
					>
						<MagnifyingGlassIcon className='h-5 w-5 text-p-blue' />
					</button>
				</div>
				<Link
					to={route}
					className='text-p-white bg-p-purple text-center font-medium rounded-lg text-xs sm:text-base p-1.5 sm:px-4 py-2 sm:ml-4 md:mr-2 '
				>
					{buttonText}
				</Link>
			</div>
		</div>
	)
}

SearchBar.propTypes = {
	title: PropTypes.string,
	getState: PropTypes.func,
	buttonText: PropTypes.string,
	route: PropTypes.string,
	getdata: PropTypes.func,
}

export default SearchBar

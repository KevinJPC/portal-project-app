import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
const SearchBar = () => {
	const [open, setOpen] = useState(false)
	return (
		<div>
			<div className='shadow-md w-full fixed top-16 left-0'>
				<div className='md:flex items-center justify-between bg-silver py-4 md:p-3 md:px-10 px-6'>
					<div className='text-1xl flex items-center text-grey right-4'>
						Roles
					</div>
					<form className='flex items-center'>
						<div className='relative w-full'>
							<input
								className='bg-white h-10 px-2 text-sm outline-none rounded-l-lg w-80'
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
					</form>
					<Link
						to='/'
						className='text-white bg-purple text-center font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2'
						onClick={() => setOpen(!open)}
					>
						Nuevo Rol
					</Link>
				</div>
			</div>
		</div>
	)
}

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Navbar = () => {
	const [open, setOpen] = useState(false)

	return (
		<div className='shadow-md w-full fixed top-0 left-0'>
			<div className='md:flex items-center justify-between bg-blue py-4 md:p-3 md:px-10 px-6'>
				<div className='font-bold text-2xl cursor-pointer flex items-center text-white'>
					Logo
				</div>
				<div
					onClick={() => setOpen(!open)}
					className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'
				>
					{open ? (
						<XMarkIcon className='h-6 w-6 text-white' />
					) : (
						<Bars3Icon className='h-6 w-6 text-white' />
					)}
				</div>
				<ul
					className={`md:flex md:items-center md:pb-0 absolute md:static bg-blue md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-200 ease-in ${
						open ? 'top-14 ' : 'top-[-490px]'
					}`}
				>
					<li className='md:ml-4 text-xl md:my-0 my-7 flex sm:flex-col md:flex-row md:w-auto sm:w-32 gap-4'>
						<Link
							to='/register'
							className='text-white bg-silver text-center font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2'
							onClick={() => setOpen(!open)}
						>
							Registrarme
						</Link>
						<Link
							to='/'
							className='text-white bg-purple text-center font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2'
							onClick={() => setOpen(!open)}
						>
							Iniciar sesión
						</Link>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default Navbar

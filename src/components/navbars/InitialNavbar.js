import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

function InitialNavbar() {
	const [open, setOpen] = useState(false)

	return (
		<div className='h-16 shadow-md w-full fixed top-0 left-0 md:flex items-center justify-between bg-p-blue p-4 text-p-white'>
			<div className='cursor-pointer'>Logo</div>
			<div
				onClick={() => setOpen(!open)}
				className='absolute right-2 top-4 cursor-pointer md:hidden'
			>
				{open ? (
					<XMarkIcon className='w-6 text-white' />
				) : (
					<Bars3Icon className='w-6 text-white' />
				)}
			</div>
			<ul
				className={`flex flex-col items-center absolute md:static bg-p-blue md:z-auto z-[-1] left-0 w-full md:w-auto transition-all duration-200 ease-in ${
					open ? 'top-14 ' : 'top-[-490px]'
				}`}
			>
				<li className='my-7 md:my-0 flex flex-row gap-5 px-2'>
					<Link
						to='/registrarse'
						className=' bg-p-silver text-center font-medium rounded-lg px-4 py-2 '
						onClick={() => setOpen(!open)}
					>
						Registrarme
					</Link>
					<Link
						to='/'
						className=' bg-p-purple text-center font-medium rounded-lg px-4 py-2 '
						onClick={() => setOpen(!open)}
					>
						Iniciar sesión
					</Link>
				</li>
			</ul>
		</div>
	)
}

export default InitialNavbar

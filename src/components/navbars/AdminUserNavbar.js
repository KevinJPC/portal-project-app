import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import {
	Bars3Icon,
	XMarkIcon,
	ChevronDownIcon,
} from '@heroicons/react/24/outline'
import { UserCircleIcon } from '@heroicons/react/24/solid'
import Navlink from '../Navlink'
import { NavLink } from 'react-router-dom'
// import { Link } from 'react-router-dom'

function AdminUserNavbar() {
	/* An array of objects that are being used to create the links in the profile menu. */
	const profileLinks = [
		{ to: 'usuario/editar-perfil', label: 'Editar perfil' },
		{ to: 'usuario/cambiar-contrasena', label: 'Cambiar contraseña' },
		{ to: '/', label: 'Cerrar sesión' },
	]

	/* An array of objects that are being used to create the links in the navbar. */
	const adminUserLinks = [
		{ to: 'admin/procesos', label: 'Administrar procesos' },
		{ to: 'admin/roles', label: 'Administrar roles' },
		{ to: 'admin/usuarios', label: 'Administrar usuarios' },
	]

	return (
		<Disclosure
			as='nav'
			className='bg-p-blue text-p-white '
		>
			{({ open }) => (
				<>
					<div className='mx-auto px-2 sm:px-6 lg:px-8 '>
						<div className='relative flex h-16 items-center justify-between'>
							<div className=' inset-y-0 left-0 flex items-center sm:hidden'>
								<Disclosure.Button className='inline-flex items-center justify-center rounded-md p-2 hover:bg-p-silver focus:outline-none focus:ring-1 focus:ring-inset'>
									{open ? (
										<XMarkIcon
											className='block h-6 w-6'
											aria-hidden='true'
										/>
									) : (
										<Bars3Icon
											className='block h-6 w-6'
											aria-hidden='true'
										/>
									)}
								</Disclosure.Button>
							</div>
							<div className='flex flex-1 items-center sm:items-stretch sm:justify-start'>
								<div className='flex flex-shrink-0 items-center ml-3'>Logo</div>
								<div className='hidden sm:ml-6 sm:block'>
									<div className='flex flex-row '>
										{adminUserLinks.map(link => (
											<div
												key={link.label}
												className='px-3 py-10 text-sm lg:text-lg'
											>
												<Navlink to={link.to}>{link.label}</Navlink>
											</div>
										))}
									</div>
								</div>
							</div>
							<div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
								<Menu
									as='div'
									className='relative ml-3'
								>
									<div>
										<Menu.Button className='flex items-center focus:outline-none rounded-full focus:ring-1 focus:ring-offset-1 '>
											<UserCircleIcon className='h-8 w-8 rounded-full' />
											<ChevronDownIcon className='h-3 w-3' />
										</Menu.Button>
									</div>
									<Transition
										as={Fragment}
										enter='transition duration-100 ease-out'
										enterFrom='transform scale-95 opacity-0'
										enterTo='transform scale-100 opacity-100'
										leave='transition duration-75 ease-out'
										leaveFrom='transform scale-100 opacity-100'
										leaveTo='transform scale-95 opacity-0'
									>
										<Menu.Items className='absolute divide-y border right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-p-blue py-1 ring-1 ring-black ring-opacity-5 focus:outline-none'>
											<Menu.Item>
												<div className='block px-4 py-2 hover:bg-p-silver rounded mb-2'>
													<p>Pancho panchito</p>
												</div>
											</Menu.Item>
											{profileLinks.map(link => (
												<Menu.Item key={link.label}>
													<Navlink to={link.to}>{link.label}</Navlink>
												</Menu.Item>
											))}
										</Menu.Items>
									</Transition>
								</Menu>
							</div>
						</div>
					</div>
					<Disclosure.Panel className='sm:hidden backdrop-blur-sm '>
						<div className=' px-2 pt-2 pb-3'>
							<div className='flex flex-col gap-2 w-full'>
								{adminUserLinks.map(link => (
									<Disclosure.Button
										key={link.label}
										as={NavLink}
										to={link.to}
									>
										<div className='px-3 py-2 hover:bg-p-silver rounded'>
											{link.label}
										</div>
									</Disclosure.Button>
								))}
							</div>
						</div>
					</Disclosure.Panel>
				</>
			)}
		</Disclosure>
	)
}

export default AdminUserNavbar

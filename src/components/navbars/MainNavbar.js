import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import {
	Bars3Icon,
	XMarkIcon,
	ChevronDownIcon,
	BellAlertIcon,
} from '@heroicons/react/24/outline'
import { UserCircleIcon } from '@heroicons/react/24/solid'
import Navlink from '../Navlink'
import {
	adminUserLinks,
	generalUserLinks,
	notifications,
	profileLinks,
} from './navbarLinks'
import { useSelector } from 'react-redux'
import {
	selectFullName,
	selectIsAuthenticated,
	selectRoleForRoutes,
} from '../../features/authSlice'

function AdminUserNavbar() {
	const role = useSelector(selectRoleForRoutes)
	const isAuthenticated = useSelector(selectIsAuthenticated)
	const userName = useSelector(selectFullName)
	return isAuthenticated ? (
		<Disclosure
			as='nav'
			className='bg-p-blue text-p-white '
		>
			<>
				<div className='mx-auto px-2 sm:px-6 lg:px-8 '>
					<div className='relative flex h-16 items-center justify-between'>
						<div className=' inset-y-0 left-0 flex items-center sm:hidden'>
							<Menu
								as='div'
								className='relative ml-3'
							>
								{({ open }) => (
									<>
										<Menu.Button className='inline-flex items-center justify-center rounded-md p-2 hover:bg-p-silver focus:outline-none focus:ring-1 focus:ring-inset'>
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
										</Menu.Button>
										<Transition
											as={Fragment}
											enter='transition duration-100 ease-out'
											enterFrom='transform scale-95 opacity-0'
											enterTo='transform scale-100 opacity-100'
											leave='transition duration-75 ease-out'
											leaveFrom='transform scale-100 opacity-100'
											leaveTo='transform scale-95 opacity-0'
										>
											<Menu.Items className='fixed sm:absolute sm:text-left text-center space-y-2 sm:space-y-1 h-screen sm:h-auto mt-3 right-0 px-2 z-10 sm:mt-2 w-screen sm:rounded-md bg-p-blue py-3 ring-1 ring-black ring-opacity-5 focus:outline-none'>
												{role === 'admin'
													? adminUserLinks.map(link => (
															<Menu.Item key={link.label}>
																<Navlink
																	to={link.to}
																	text={link.label}
																/>
															</Menu.Item>
													  ))
													: generalUserLinks.map(link => (
															<Menu.Item key={link.label}>
																<Navlink
																	to={link.to}
																	text={link.label}
																/>
															</Menu.Item>
													  ))}
											</Menu.Items>
										</Transition>
									</>
								)}
							</Menu>
						</div>
						<div className='flex flex-1 items-center sm:items-stretch sm:justify-start'>
							<div className='flex flex-shrink-0 items-center ml-3'>Logo</div>
							<div className='hidden sm:ml-6 sm:block'>
								<div className='flex flex-row '>
									{role === 'admin'
										? adminUserLinks.map(link => (
												<div
													key={link.label}
													className='px-3 text-sm lg:text-lg'
												>
													<Navlink
														to={link.to}
														text={link.label}
													/>
												</div>
										  ))
										: generalUserLinks.map(link => (
												<div
													key={link.label}
													className='px-3 hover:bg-p-silver rounded '
												>
													<Navlink
														to={link.to}
														text={link.label}
													/>
												</div>
										  ))}
								</div>
							</div>
						</div>
						<div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
							{role !== 'admin' ? (
								<Menu
									as='div'
									className='relative ml-3'
								>
									<Menu.Button
										type='button'
										className='flex rounded-full p-1 hover:bg-p-silver'
									>
										<BellAlertIcon
											className='h-6 w-6'
											aria-hidden='true'
										/>
										<p>{notifications.length}</p>
									</Menu.Button>
									<Transition
										as={Fragment}
										enter='transition duration-100 ease-out'
										enterFrom='transform scale-95 opacity-0'
										enterTo='transform scale-100 opacity-100'
										leave='transition duration-75 ease-out'
										leaveFrom='transform scale-100 opacity-100'
										leaveTo='transform scale-95 opacity-0'
									>
										<Menu.Items className='fixed sm:absolute sm:text-left text-center space-y-2 sm:space-y-1 divide-y sm:border h-screen sm:h-auto right-0 px-2 z-10 mt-4 sm:mt-2 w-screen sm:w-80 origin-top-right sm:rounded-md bg-p-blue py-3 ring-1 ring-black ring-opacity-5 focus:outline-none'>
											{notifications.map(notification => (
												<Menu.Item key={notification.label}>
													<div>
														<p className='font-fira-medium'>
															{notification.label}
														</p>
														<span className='font-fira text-p-silver'>
															{notification.description}
														</span>
													</div>
												</Menu.Item>
											))}
										</Menu.Items>
									</Transition>
								</Menu>
							) : null}
							<Menu
								as='div'
								className='relative ml-3'
							>
								<div>
									<Menu.Button className='flex  items-center focus:outline-none rounded-full hover:bg-p-silver'>
										<UserCircleIcon className='h-8 w-8 rounded-full' />
										<p className='mx-1 lg:text-base text-sm '>{userName}</p>
										<ChevronDownIcon className='h-4 w-4' />
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
									<Menu.Items className='fixed sm:absolute text-center space-y-2 sm:space-y-1 divide-y sm:border h-screen sm:h-auto right-0 z-10 mt-4 sm:mt-2 w-screen sm:w-48 origin-top-right sm:rounded-md bg-p-blue py-3 ring-1 ring-black ring-opacity-5 focus:outline-none'>
										{profileLinks.map(link => (
											<Menu.Item key={link.label}>
												<Navlink
													to={link.to}
													text={link.label}
												/>
											</Menu.Item>
										))}
									</Menu.Items>
								</Transition>
							</Menu>
						</div>
					</div>
				</div>
			</>
		</Disclosure>
	) : null
}

export default AdminUserNavbar

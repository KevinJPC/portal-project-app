import { useEffect } from 'react'
import { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
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
	profileAdminLinks,
	profileGeneralLinks,
} from './navbarLinks'
import {
	removeCredentials,
	selectFullName,
	selectIsAdmin,
	selectIsAuthenticated,
} from '../../features/authSlice'
import { useLazyGetNotificationsQuery } from '../../app/services/notificationsApi'
import Notification from '../Notification'
import { useLogoutMutation } from '../../app/services/authApi'

function AdminUserNavbar() {
	const dispatch = useDispatch()

	const [getNotifications, { data: notification, isSuccess, isError }] =
		useLazyGetNotificationsQuery()

	const [logout, { isLoading: isLoggingOut }] = useLogoutMutation()

	const isAdmin = useSelector(selectIsAdmin)
	const isAuthenticated = useSelector(selectIsAuthenticated)
	const userName = useSelector(selectFullName)

	const handleLogout = () => {
		logout().unwrap().catch()
		dispatch(removeCredentials())
	}

	useEffect(() => {
		if (!isAdmin) {
			getNotifications()
		}
	}, [isSuccess])

	return isAuthenticated ? (
		<Disclosure
			as='nav'
			className='bg-p-blue text-p-white '
		>
			<>
				<div className='mx-auto px-4 '>
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
											<Menu.Items className='fixed sm:absolute sm:text-left text-center space-y-2 sm:space-y-1 h-screen sm:h-auto mt-3 right-0 px-2 z-10 sm:mt-2 w-screen sm:rounded-md bg-p-blue'>
												{isAdmin
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
									{isAdmin
										? adminUserLinks.map(link => (
												<div
													key={link.label}
													className='px-3'
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
						<div className='flex items-center'>
							{!isAdmin ? (
								<Menu
									as='div'
									className='relative mr-5'
								>
									<Menu.Button
										type='button'
										className='flex rounded-full p-1 hover:bg-p-silver'
									>
										<BellAlertIcon
											className='h-6 w-6'
											aria-hidden='true'
										/>
										<p>{notification?.data.results}</p>
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
										<Menu.Items className='fixed sm:absolute overlay overflow-y-auto sm:text-left sm:border divide-y h-screen sm:h-80 right-0 z-10 mt-4 sm:mt-2 w-screen sm:w-96 origin-top-right sm:rounded-md bg-p-blue'>
											{notification?.data.results > 0 ? (
												notification?.data.notifications.map(notification => (
													<Menu.Item key={notification.userProcessId}>
														<Notification notification={notification} />
													</Menu.Item>
												))
											) : (
												<div className='h-full flex flex-col justify-center text-center'>
													<p>Sin tareas pendientes</p>
												</div>
											)}
										</Menu.Items>
									</Transition>
								</Menu>
							) : null}
							<Menu
								as='div'
								className='relative'
							>
								<div>
									<Menu.Button className='flex items-center focus:outline-none rounded-full hover:bg-p-silver'>
										<UserCircleIcon className='h-8 w-8 rounded-full' />
										<p className='mx-1'>{userName}</p>
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
									<Menu.Items className='fixed sm:absolute text-center divide-y sm:border h-screen sm:h-auto right-0 z-10 mt-4 sm:mt-2 w-screen sm:w-48 origin-top-right sm:rounded-md bg-p-blue'>
										{isAdmin
											? profileAdminLinks.map(link => (
													<Menu.Item key={link.label}>
														<Navlink
															to={link.to}
															text={link.label}
															rounded={false}
														/>
													</Menu.Item>
											  ))
											: profileGeneralLinks.map(link => (
													<Menu.Item key={link.label}>
														<Navlink
															to={link.to}
															text={link.label}
															rounded={false}
														/>
													</Menu.Item>
											  ))}
										<Menu.Item>
											<button
												disabled={isLoggingOut}
												onClick={handleLogout}
												className='text-p-silver hover:text-p-blue block px-4 py-2 hover:bg-p-silver w-full'
											>
												Cerrar sesión
											</button>
										</Menu.Item>
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

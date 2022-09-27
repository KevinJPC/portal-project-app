import React from 'react'

const ActivesRoles = () => {
	return (
		<div>
			<div className=' mt-16'>
				<div className='flex flex-col items-center pt-6 justify-center sm:pt-0'>
					<div className='bg-gray-50  flex items-center justify-center px-16'>
						<div className='py-8 w-full'>
							<div className='lg:flex items-center justify-center w-full'>
								<div className='w-3/4 justify-center bg-gray p-4 shadow rounded'>
									<div className='flex items-center pb-6'>
										<div className='flex items-start justify-between w-screen'>
											<div className='pl-3 text-center'>
												<p className='text-xl font-medium leading-5 text-gray-800'>
													Nombre
												</p>
												<p className='text-sm leading-normal pt-2 text-gray-500'>
													36 members
												</p>
											</div>
											<div className='pl-3 text-center'>
												<p className='text-xl font-medium leading-5 text-gray-800'>
													Descripción
												</p>
												<p className='text-sm leading-normal pt-2 text-gray-500'>
													36 members
												</p>
											</div>
											<div className='pl-3 text-center'>
												<p className='text-xl font-medium leading-5 text-gray-800'>
													Fecha de crección
												</p>
												<p className='text-sm leading-normal pt-2 text-gray-500'>
													36 members
												</p>
											</div>
											<div className='pl-3 p-4 text-center'>
												<Link
													to='/'
													className='text-white  bg-purple text-center font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2'
													onClick={() => setOpen(!open)}
												>
													Modificar
												</Link>
											</div>
										</div>
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

export default ActivesRoles

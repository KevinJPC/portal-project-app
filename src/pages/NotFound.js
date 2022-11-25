import React from 'react'

function NotFound() {
	return (
		<div className='flex flex-col pt-2 sm:pt-0 mt-4'>
			<div className='flex justify-center py-4'>
				<div className='w-3/4 bg-p-gray rounded'>
					<div className='md:grid  text-center items-center justify-items-center px-2 py-6 md:py-3'>
						<div className='p-4 px-1 break-words text-p-blue'>
							<section className='flex items-center h-full p-16 dark:bg-gray-900 dark:text-gray-100'>
								<div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
									<div className='max-w-md text-center'>
										<h2 className='mb-8 font-extrabold text-9xl dark:text-gray-600'>
											<span className='sr-only'>Error</span>404
										</h2>
										<p className='text-2xl font-semibold md:text-3xl'>
											Sorry, we couldn't find this page.
										</p>
										<p className='mt-4 mb-8 dark:text-gray-400'>
											But dont worry, you can find plenty of other things on our
											homepage.
										</p>
										<a
											rel='noopener noreferrer'
											href='/'
											className='px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900'
										>
											Back to homepage
										</a>
									</div>
								</div>
							</section>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
export default NotFound

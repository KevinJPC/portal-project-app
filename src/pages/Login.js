import React from 'react'

const Login = () => {
	return (
		<div className='flex flex-col h-full'>
			<main className=' flex-1 overflow-y-auto sm:mt-2 md:mt-3'>
				<div className='grid grid-cols-2 h-full'>
					<div className='h-full grid grid-rows-2	'>
						<div>
							<h1 className='font-fira'>Con fuente custom</h1>
							<h1 className='font-fira-medium'>Con fuente default</h1>
						</div>
					</div>
					<div></div>
				</div>
			</main>
		</div>
	)
}

export default Login

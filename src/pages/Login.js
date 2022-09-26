import React from 'react'
import Spinner from '../components/Spinner'

const Login = () => {
	return (
		<div className='flex flex-col h-full'>
			<main className=' flex-1 overflow-y-auto sm:mt-2 md:mt-3'>
				<div className='grid grid-cols-2 h-full'>
					<div className='h-full grid grid-rows-2	'>
						<div className='h-full row-span-2'>
							Login
							<Spinner />
						</div>
						<footer className='py-2 bg-blue text-center text-white'>
							Footer
						</footer>
					</div>
					<div className='h-full'>Imagen</div>
				</div>
			</main>
		</div>
	)
}

export default Login

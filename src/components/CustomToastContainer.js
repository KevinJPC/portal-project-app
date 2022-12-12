import React from 'react'
import { ToastContainer } from 'react-toastify'

const contextClass = {
	success: 'bg-p-green',
	error: 'bg-p-red',
	info: 'bg-gray-600',
	warning: 'bg-orange-400',
	default: 'bg-indigo-600',
	dark: 'bg-white-600 font-gray-300',
}

function CustomToastContainer() {
	return (
		<ToastContainer
			className={'mt-20 w-full sm:w-3/4 md:w-2/3 lg:w-2/5'}
			position='top-center'
			hideProgressBar
			newestOnTop={false}
			closeOnClick
			rtl={false}
			pauseOnFocusLoss
			draggable
			pauseOnHover
			closeButton={false}
			icon={false}
			autoClose={1500}
			toastClassName={({ type }) =>
				contextClass[type || 'default'] +
				' mx-4 sm:max-2xl:mx-0 mb-3 rounded-full flex flex-row items-center justify-center min-h-10 overflow-hidden cursor-pointer py-1 px-2 text-center'
			}
			bodyClassName='font-fira text-sm font-p-white'
			progressClassName='bg-p-gray'
		/>
	)
}

export default CustomToastContainer

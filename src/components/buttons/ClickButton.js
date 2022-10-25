import React from 'react'
import PropTypes from 'prop-types'
import Spinner from '../Spinner'

function ClickButton({ text, color, func, isLoading }) {
	return (
		<div className='text-center'>
			<button
				className={`text-p-white text-center font-medium rounded-lg 
			${
				text === 'Desactivar'
					? 'h-12 rounded-lg w-full mt-7'
					: 'text-xs sm:text-sm p-1.5 px-10 py-3 md:mr-2'
			}
			${color === 'red' ? 'bg-p-red shadow-p-red' : null}
			${color === 'purple' ? 'bg-p-purple shadow-p-purple' : null}

			`}
				type='button'
				disabled={isLoading}
				onClick={func}
			>
				{isLoading ? <Spinner /> : text}
			</button>
		</div>
	)
}

ClickButton.propTypes = {
	text: PropTypes.string,
	isLoading: PropTypes.bool,
	color: PropTypes.string,
	func: PropTypes.func,
}

export default ClickButton

import React from 'react'
import PropTypes from 'prop-types'
import Spinner from '../Spinner'

function ClickButton({ text, color, func, isLoading }) {
	return (
		<div className='text-center'>
			<button
				className={`text-p-white h-12 rounded-lg w-full mt-7
			${text === 'Activar' ? 'p-1.5 px-10 py-3 ml-4 md:mr-2' : null}
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

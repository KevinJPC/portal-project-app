import React from 'react'
import PropTypes from 'prop-types'
import Spinner from '../Spinner'

function SubmitButton({ text, color = 'purple', isLoading = false }) {
	return (
		<button
			className={`text-p-white h-12 rounded-lg w-full 
			${color === 'purple' ? 'bg-p-purple shadow-p-purple' : null}
			${color === 'red' ? 'bg-p-red shadow-p-red' : null}
			`}
			type='submit'
			disabled={isLoading}
		>
			{isLoading ? <Spinner /> : text}
		</button>
	)
}

SubmitButton.propTypes = {
	text: PropTypes.string.isRequired,
	isLoading: PropTypes.bool,
	color: PropTypes.string,
}

export default SubmitButton

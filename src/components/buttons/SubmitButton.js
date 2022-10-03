import React from 'react'
import PropTypes from 'prop-types'

function SubmitButton({ text, color = 'purple' }) {
	return (
		<button
			className={`text-p-white h-12 rounded-lg w-full 
			${color === 'purple' ? 'bg-p-purple shadow-purple' : null}
			${color === 'red' ? 'bg-p-red shadow-red' : null}
			`}
			type='submit'
		>
			{text}
		</button>
	)
}

SubmitButton.propTypes = {
	text: PropTypes.string.isRequired,
	color: PropTypes.string,
}

export default SubmitButton

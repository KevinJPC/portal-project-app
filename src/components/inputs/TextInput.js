import React from 'react'
import PropTypes from 'prop-types'

function TextInput({
	label,
	id,
	placeholder,
	value,
	onChange,
	error,
	...props
}) {
	return (
		<div className='flex flex-col w-full'>
			<label
				className='text-p-blue mb-5 w-fit'
				htmlFor={id}
			>
				{label}
			</label>
			<input
				id={id}
				type='text'
				placeholder={placeholder}
				className='px-5 text-p-blue bg-p-silver h-12 rounded-lg focus:outline-none hover:ring-1 hover:ring-p-purple focus:ring-2 focus:ring-p-purple placeholder-p-blue'
				{...props}
				value={value}
				onChange={onChange}
			/>
			<span className='text-p-red mt-1'>{error && error.join('\n')}</span>
		</div>
	)
}

TextInput.propTypes = {
	label: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	placeholder: PropTypes.string.isRequired,
	value: PropTypes.string,
	onChange: PropTypes.func,
	error: PropTypes.array,
	props: PropTypes.object,
}

export default TextInput

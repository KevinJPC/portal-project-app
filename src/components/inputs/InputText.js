import React from 'react'
import PropTypes from 'prop-types'
import { useField } from 'formik'

function InputText({ label, ...props }) {
	const [field, meta] = useField(props)

	return (
		<div className='flex flex-col w-full'>
			<label className='text-p-blue mb-5 w-fit'>{label}</label>
			<input
				type='text'
				className={`${
					meta.touched && meta.error
						? 'focus:outline-none hover:ring-1 hover:ring-p-red focus:ring-2 focus:ring-p-red'
						: 'focus:outline-none hover:ring-1 hover:ring-p-purple focus:ring-2 focus:ring-p-purple'
				}
				 text-p-blue bg-p-silver h-12 rounded-lg px-5`}
				{...field}
				{...props}
			/>
			{meta.touched && meta.error ? (
				<div className='text-p-red mt-1'>{meta.error}</div>
			) : null}
		</div>
	)
}

InputText.propTypes = {
	label: PropTypes.string.isRequired,
	props: PropTypes.object,
}

export default InputText

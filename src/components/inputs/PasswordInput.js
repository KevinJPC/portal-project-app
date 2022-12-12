import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline'

function PasswordInput({
	label,
	id,
	placeholder,
	value,
	onChange,
	error,
	...props
}) {
	const [showPassword, setShowPassword] = useState(false)

	return (
		<div className='flex flex-col w-full'>
			<label
				className=' text-p-blue mb-5 w-fit'
				htmlFor={id}
			>
				{label}
			</label>
			<div className='flex flex-col relative'>
				<input
					id={id}
					type={showPassword ? 'text' : 'password'}
					placeholder={placeholder}
					className='px-5 text-p-blue bg-p-silver h-12 rounded-lg focus:outline-none hover:ring-1 hover:ring-p-purple focus:ring-2 focus:ring-p-purple placeholder-p-blue'
					value={value}
					name={id}
					onChange={onChange}
					{...props}
				/>
				<span className='text-p-red mt-1'>{error && error.join('\n')}</span>
				{showPassword ? (
					<EyeIcon
						className='text-p-blue w-6 my-auto absolute inset-y-0 right-0 mr-4 cursor-pointer'
						onClick={() => setShowPassword(!showPassword)}
					/>
				) : (
					<EyeSlashIcon
						className='text-p-blue w-6 my-auto absolute inset-y-0 right-0 mr-4 cursor-pointer'
						onClick={() => setShowPassword(!showPassword)}
					/>
				)}
			</div>
		</div>
	)
}

PasswordInput.propTypes = {
	label: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	placeholder: PropTypes.string.isRequired,
	value: PropTypes.string,
	error: PropTypes.array,
	onChange: PropTypes.func,
	props: PropTypes.object,
}

export default PasswordInput

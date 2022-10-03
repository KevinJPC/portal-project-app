import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline'

function PasswordInput({ label, id, name, placeholder, ...props }) {
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
					name={name}
					type={showPassword ? 'text' : 'password'}
					placeholder={placeholder}
					className='px-5 text-p-blue bg-p-silver h-12 rounded-lg focus:outline-none hover:ring-1 hover:ring-p-purple focus:ring-2 focus:ring-p-purple placeholder-p-blue'
					{...props}
				/>
				{showPassword ? (
					<EyeSlashIcon
						className='text-p-blue w-6 my-auto absolute inset-y-0 right-0 mr-4 cursor-pointer'
						onClick={() => setShowPassword(!showPassword)}
					/>
				) : (
					<EyeIcon
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
	name: PropTypes.string.isRequired,
	placeholder: PropTypes.string.isRequired,
	props: PropTypes.object,
}

export default PasswordInput

import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useField } from 'formik'
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline'

const InputPassword = ({ label, ...props }) => {
	const [showPassword, setShowPassword] = useState(false)
	const [field, meta] = useField(props)

	return (
		<div className='flex flex-col w-full'>
			<label className=' text-p-blue mb-5 w-fit'>{label}</label>
			<div className='flex flex-col relative'>
				<input
					type={showPassword ? 'text' : 'password'}
					className={`${
						meta.touched && meta.error
							? 'focus:outline-none hover:ring-1 hover:ring-p-red focus:ring-2 focus:ring-p-red'
							: 'focus:outline-none hover:ring-1 hover:ring-p-purple focus:ring-2 focus:ring-p-purple'
					} text-p-blue bg-p-silver h-12 rounded-lg  px-2`}
					{...field}
					{...props}
				/>
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
			{meta.touched && meta.error ? (
				<div className='text-p-red mt-1'>{meta.error}</div>
			) : null}
		</div>
	)
}

InputPassword.propTypes = {
	label: PropTypes.string.isRequired,
	props: PropTypes.object,
}

export default InputPassword

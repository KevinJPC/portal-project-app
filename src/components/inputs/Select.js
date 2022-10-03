import { ChevronDownIcon } from '@heroicons/react/24/outline'
import React from 'react'
import PropTypes from 'prop-types'

function Select({ label, id, name, defaulOption, ...props }) {
	return (
		<div className='flex flex-col w-full'>
			<label
				className='text-p-blue mb-5 w-fit'
				htmlFor='rol'
			>
				Rol
			</label>
			<div className='flex flex-col relative'>
				<select
					id='rol'
					name='rol'
					className='px-5 text-p-blue bg-p-silver h-12 rounded-lg focus:outline-none hover:ring-1 hover:ring-p-purple focus:ring-2 focus:ring-p-purple placeholder-p-blue appearance-none'
				>
					<option>{defaulOption}</option>
				</select>
				<ChevronDownIcon className='text-p-blue w-6 my-auto absolute inset-y-0 right-0 mr-4' />
			</div>
		</div>
	)
}

Select.propTypes = {
	label: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	defaulOption: PropTypes.string.isRequired,
	props: PropTypes.object,
}

export default Select

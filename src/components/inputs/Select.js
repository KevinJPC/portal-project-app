import { ChevronDownIcon } from '@heroicons/react/24/outline'
import React from 'react'
import PropTypes from 'prop-types'

function Select({ label, id, name, defaulOption, value, data, ...props }) {
	return (
		<div className='flex flex-col w-full'>
			<label
				className='text-p-blue mb-5 w-fit'
				htmlFor={id}
			>
				{label}
			</label>
			<div className='flex flex-col relative'>
				<select
					id={id}
					className='px-5 text-p-blue bg-p-silver h-12 rounded-lg focus:outline-none hover:ring-1 hover:ring-p-purple focus:ring-2 focus:ring-p-purple placeholder-p-blue appearance-none'
				>
					{data.map(obj => (
						<option
							key={obj.key}
							value={obj.key}
						>
							{obj.value}
						</option>
					))}
					;
				</select>
			</div>
		</div>
	)
}

Select.propTypes = {
	label: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	data: PropTypes.object.isRequired,
	id: PropTypes.string.isRequired,
	name: PropTypes.string,
	defaulOption: PropTypes.string.isRequired,
	props: PropTypes.object,
}

export default Select

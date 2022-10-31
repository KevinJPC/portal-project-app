import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { ArrowLongDownIcon } from '@heroicons/react/24/outline'

function Activity({ activity, activities }) {
	const { id, name, status } = activity
	return (
		<div className='flex flex-row items-center gap-6 p-1'>
			<div className='mb-6'>
				<p
					className={`text-sm font-fira-medium ${
						status === 1 ? 'text-p-silver/80' : 'text-p-blue'
					}`}
				>
					{name}
					{id}
				</p>
				<p className='text-sm font-fira-medium text-p-silver'>
					{status === 2 ? 'Por hacer' : status === 3 && 'Terminada'}
				</p>
			</div>
			<div className='flex flex-col items-center justify-center'>
				<div
					className={`p-4 shadow-sm text-xl ${
						status === 2
							? 'bg-p-purple text-p-white'
							: status === 3
							? 'bg-p-silver'
							: 'bg-p-silver/40 text-p-silver/80'
					} text-p-blue w-16 h-16 rounded-full`}
				>
					{id}
				</div>
				{activities.at(-1).id !== id && (
					<ArrowLongDownIcon
						className='block h-6 w-6 text-p-blue mt-2'
						aria-hidden='true'
					/>
				)}
			</div>
			{status === 2 && (
				<Link
					to='/'
					className='text-p-white bg-p-purple text-center rounded-lg text-xs sm:text-sm p-1.5 px-10 py-2 ml-2 md:mr-2 mb-6'
				>
					Ir a actividad
				</Link>
			)}
		</div>
	)
}

Activity.propTypes = {
	activity: PropTypes.object,
	activities: PropTypes.array,
}

export default Activity

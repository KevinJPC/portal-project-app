import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { ArrowLongDownIcon } from '@heroicons/react/24/outline'

function Activity({ activity, activities }) {
	const { order, name, status, executeOnPortal } = activity
	return (
		<>
			<div className='grid grid-cols-3'>
				<div className=''>
					<p
						className={`font-fira-medium  ${
							status === 1 ? 'text-p-silver/80' : 'text-p-blue'
						}`}
					>
						{name}
					</p>
					<p className='text-p-silver'>
						{status === 2 ? 'Por hacer' : status === 3 && 'Terminada'}
					</p>
				</div>
				<div
					className={`mx-auto text-center shadow-sm text-xl ${
						status === 2
							? 'bg-p-purple text-p-white'
							: status === 3
							? 'bg-p-silver'
							: 'bg-p-silver/40 text-p-silver/80'
					} flex flex-col items-center justify-center text-p-blue w-[70px] h-[70px] rounded-full`}
				>
					<span>{order}</span>
				</div>
				{status === 2 && executeOnPortal ? (
					<div className='flex flex-col justify-center'>
						<Link
							to='/'
							className='text-p-white bg-p-purple shadow-p-purple text-center rounded-lg px-4 py-1.5 w-fit'
						>
							Ir a actividad
						</Link>
					</div>
				) : null}
			</div>
			{activities.at(-1).order !== order && (
				<ArrowLongDownIcon
					className='block h-6 text-p-blue w-full text-center'
					aria-hidden='true'
				/>
			)}
		</>
	)
}

Activity.propTypes = {
	activity: PropTypes.object,
	activities: PropTypes.array,
}

export default Activity

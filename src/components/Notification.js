import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

function Notification({ notification }) {
	const { userProcessId, processName, activityName } = notification

	return (
		<div className='cursor-pointer hover:bg-p-silver/40 px-2 py-1'>
			<Link to={`/mis-procesos/${userProcessId}`}>
				<p className='font-fira text-base'>{processName}</p>
				<span className='text-p-silver'>
					Tiene tareas pendientes en este proceso, en la actividad{' '}
					{activityName}
				</span>
			</Link>
		</div>
	)
}

Notification.propTypes = {
	notification: PropTypes.object,
}

export default Notification

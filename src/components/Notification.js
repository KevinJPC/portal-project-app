import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

function Notification({ notification }) {
	const { userProcessId, processName, activityName } = notification

	return (
		<div className='cursor-pointer hover:bg-p-silver/40 rounded-sm'>
			<Link to={`/mis-procesos/${userProcessId}`}>
				<p className='font-fira-medium'>{processName}</p>
				<span className='font-fira text-p-silver'>
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

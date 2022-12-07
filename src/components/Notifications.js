import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

function Notification({ notification }) {
	// const [userProcessId, processName, activityName] = data

	return (
		<div className='cursor-pointer hover:bg-p-silver/40 rounded-sm'>
			<Link to=''>
				<p className='font-fira-medium'>{notification.label}</p>
				<span className='font-fira text-p-silver'>
					Tiene tareas pendientes en este proceso
				</span>
			</Link>
		</div>
	)
}

Notification.propTypes = {
	notification: PropTypes.object,
}

export default Notification

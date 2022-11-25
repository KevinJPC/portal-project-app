import React, { useState } from 'react'

function notification(data, message) {

    const [userProcessId, processName, activityName] = data

	return (
		<div>
			<p className='font-fira-medium'>{message}</p>
			<span className='font-fira text-p-silver'>
				Acción pendiente en {processName} la actividad {activityName}
			</span>
		</div>
	)
}

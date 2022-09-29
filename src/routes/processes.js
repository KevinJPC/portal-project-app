import React from 'react'
import { Route } from 'react-router-dom'
import ActivesProcesses from '../pages/process/ActivesProcesses'
import RegisterProcess from '../pages/process/RegisterProcess'
import UpdateProcess from '../pages/process/UpdateProcess'

export const processesRoutes = (
	<>
		<Route
			path='processes'
			element={<ActivesProcesses />}
		/>

		<Route
			path='processes/register'
			element={<RegisterProcess />}
		/>
		<Route
			path='processes/:id'
			element={<UpdateProcess />}
		/>
	</>
)

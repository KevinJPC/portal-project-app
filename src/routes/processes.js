import React from 'react'
import { Route } from 'react-router-dom'
import ActivesProcesses from '../pages/process/ActivesProcesses'
import RegisterProcess from '../pages/process/RegisterProcess'
import UpdateProcess from '../pages/process/UpdateProcess'
import AboutProcesses from '../pages/process/AboutProcesses'

export const processesRoutes = (
	<>
		<Route
			path='admin/procesos'
			element={<ActivesProcesses />}
		/>
		<Route
			path='admin/informacion-proceso/:id'
			element={<AboutProcesses />}
		/>
		<Route
			path='admin/procesos/registrar'
			element={<RegisterProcess />}
		/>
		<Route
			path='admin/procesos/editar/:id'
			element={<UpdateProcess />}
		/>
	</>
)

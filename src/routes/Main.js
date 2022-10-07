import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { authRoutes } from './auth'
import { profileRoutes } from './profile'
import { rolesRoutes } from './roles'
import { processesRoutes } from './processes'
import { notFoundRoute } from './notFound'
import { userAdminsRoutes } from './userAdmins'
import { visibleProcessesRoutes } from './visibleProcesses'
import { userProcessesRoutes } from './userProcesses'
import ProtectedRoute from '../components/ProtectedRoute'

const MainRoutes = () => {
	return (
		<Routes>
			{authRoutes}

			<Route
				element={
					<ProtectedRoute
						accessRole='general'
						redirectPath='admin/procesos'
					/>
				}
			>
				{profileRoutes}
				{visibleProcessesRoutes}
				{userProcessesRoutes}
			</Route>

			{userAdminsRoutes}
			{processesRoutes}
			{rolesRoutes}

			{notFoundRoute}
		</Routes>
	)
}

export default MainRoutes

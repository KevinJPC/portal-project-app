import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { authRoutes } from './auth'
import { profileRoutes } from './profile'
import { rolesRoutes } from './roles'
import { processesRoutes } from './processes'
import { notFoundRoute } from './notFound'
import { userAdminsRoutes } from './userAdmins'
import { visibleProcessesRoutes } from './visibleProcesses'
import { userProcessesRoutes } from './userProcesses'

const MainRoutes = () => {
	return (
		<Routes>
			{authRoutes}

			{profileRoutes}
			{visibleProcessesRoutes}
			{userProcessesRoutes}

			{userAdminsRoutes}
			{processesRoutes}
			{rolesRoutes}

			{notFoundRoute}
		</Routes>
	)
}

export default MainRoutes

import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { authRoutes } from './auth'
import { profileRoutes } from './profile'
import { rolesRoutes } from './roles'
import { processesRoutes } from './processes'
import { notFoundRoute } from './notFound'

const MainRoutes = () => {
	return (
		<Routes>
			{authRoutes}
			{profileRoutes}

			<Route path='admin'>
				{processesRoutes}
				{rolesRoutes}
			</Route>

			{notFoundRoute}
		</Routes>
	)
}

export default MainRoutes

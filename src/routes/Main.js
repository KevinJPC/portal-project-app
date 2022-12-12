import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { authRoutes } from './auth'
import { profileRoutes } from './generalProfile'
import { rolesRoutes } from './roles'
import { processesRoutes } from './processes'
import { notFoundRoute } from './notFound'
import { userAdminsRoutes } from './userAdmins'
import { visibleProcessesRoutes } from './visibleProcesses'
import { userProcessesRoutes } from './userProcesses'
import RequireAuth from '../components/auth/RequireAuth'
import NonRequireAuth from '../components/auth/NonRequireAuth'
import useAuth from '../hooks/useAuth'
import { adminProfileRoutes } from './adminProfile'

const MainRoutes = () => {
	const { isAuthenticated, isTokenValidated, isAdmin } = useAuth()
	const location = useLocation()

	return (
		<Routes>
			{/* Public routes that does not require authentication. */}
			<Route
				element={
					<NonRequireAuth
						isAuthenticated={isAuthenticated}
						isTokenValidated={isTokenValidated}
						isAdmin={isAdmin}
						state={location?.state}
					/>
				}
			>
				{authRoutes}
			</Route>

			{/* User routes that requires authentication. */}
			<Route
				element={
					<RequireAuth
						isAuthenticated={isAuthenticated}
						isTokenValidated={isTokenValidated}
						isAdmin={isAdmin}
						restrictTo='user'
						redirectPath='admin/procesos'
						location={location}
					/>
				}
			>
				{profileRoutes}
				{visibleProcessesRoutes}
				{userProcessesRoutes}
			</Route>

			{/* Admin routes that requires authentication. */}
			<Route
				element={
					<RequireAuth
						isAuthenticated={isAuthenticated}
						isTokenValidated={isTokenValidated}
						isAdmin={isAdmin}
						restrictTo='admin'
						redirectPath='mis-procesos'
						location={location}
					/>
				}
			>
				{adminProfileRoutes}
				{userAdminsRoutes}
				{processesRoutes}
				{rolesRoutes}
			</Route>

			{/* A route that is always rendered when no other route matches. */}
			{notFoundRoute}
		</Routes>
	)
}

export default MainRoutes

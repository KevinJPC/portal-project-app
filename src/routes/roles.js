import React from 'react'
import { Route } from 'react-router-dom'
import ActivesRoles from '../pages/role/ActivesRoles'
import InactivesRoles from '../pages/role/InactivesRoles'
import RegisterRole from '../pages/role/RegisterRole'
import UpdateRole from '../pages/role/UpdateRole'

export const rolesRoutes = (
	<Route path='roles'>
		<Route
			index
			path='actives'
			element={<ActivesRoles />}
		/>
		<Route
			path='inactives'
			element={<InactivesRoles />}
		/>
		<Route
			path='register'
			element={<RegisterRole />}
		/>
		<Route
			path='edit'
			element={<UpdateRole />}
		/>
	</Route>
)

import React from 'react'
import { Route } from 'react-router-dom'
import ActivesRoles from '../pages/role/ActivesRoles'
import RegisterRole from '../pages/role/RegisterRole'
import UpdateRole from '../pages/role/UpdateRole'

export const rolesRoutes = (
	<>
		<Route
			path='admin/roles'
			element={<ActivesRoles />}
		/>
		<Route
			path='admin/roles/registrar'
			element={<RegisterRole />}
		/>
		<Route
			path='admin/roles/editar/:id'
			element={<UpdateRole />}
		/>
	</>
)

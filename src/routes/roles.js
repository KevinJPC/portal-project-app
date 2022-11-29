import React from 'react'
import { Route } from 'react-router-dom'
import ListRoles from '../pages/role/ListRoles'
import RegisterRole from '../pages/role/RegisterRole'
import UpdateRole from '../pages/role/UpdateRole'

export const rolesRoutes = (
	<>
		<Route
			path='admin/roles'
			element={<ListRoles />}
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

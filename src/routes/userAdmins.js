import React from 'react'
import { Navigate, Route } from 'react-router-dom'
import ListAdmins from '../pages/admin/ListAdmins'
import RegisterAdmin from '../pages/admin/RegisterAdmin'
import UpdateAdmin from '../pages/admin/UpdateAdmin'

export const userAdminsRoutes = (
	<>
		<Route
			path='admin'
			element={<Navigate to='procesos' />}
		/>
		<Route
			path='admin/usuarios'
			element={<ListAdmins />}
		/>
		<Route
			path='admin/usuarios/registrar'
			element={<RegisterAdmin />}
		/>
		<Route
			path='admin/usuarios/editar/:id'
			element={<UpdateAdmin />}
		/>
	</>
)

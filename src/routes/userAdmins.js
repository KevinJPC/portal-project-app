import React from 'react'
import { Navigate, Route } from 'react-router-dom'
import ActivesAdmins from '../pages/admin/ActivesAdmins'
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
			element={<ActivesAdmins />}
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

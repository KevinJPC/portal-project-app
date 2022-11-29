import React from 'react'
import { Route } from 'react-router-dom'
import UpdatePassword from '../pages/user/UpdatePassword'
import UpdateUser from '../pages/user/UpdateUser'

export const adminProfileRoutes = (
	<>
		<Route
			path='admin/usuario/editar-perfil'
			element={<UpdateUser />}
		/>
		<Route
			path='admin/usuario/cambiar-contrasena'
			element={<UpdatePassword />}
		/>
	</>
)

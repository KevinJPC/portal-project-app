import React from 'react'
import { Route } from 'react-router-dom'
import UpdatePassword from '../pages/user/UpdatePassword'
import UpdateUser from '../pages/user/UpdateUser'

export const profileRoutes = (
	<>
		<Route
			path='usuario/editar-perfil'
			element={<UpdateUser />}
		/>
		<Route
			path='usuario/cambiar-contrasena'
			element={<UpdatePassword />}
		/>
	</>
)

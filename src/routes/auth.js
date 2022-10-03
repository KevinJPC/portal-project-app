import React from 'react'
import { Route } from 'react-router-dom'
import ForgotPassword from '../pages/auth/ForgotPassword'
import Login from '../pages/auth/Login'
import Register from '../pages/auth/Register'
import ResetPassword from '../pages/auth/ResetPassword'

export const authRoutes = (
	<>
		<Route
			path='/'
			element={<Login />}
		></Route>
		<Route
			path='registrarse'
			element={<Register />}
		/>
		<Route
			path='restablecer-contrasena'
			element={<ForgotPassword />}
		/>
		<Route
			path='restablecer-contrasena/confirmar'
			element={<ResetPassword />}
		/>
	</>
)

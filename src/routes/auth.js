import React from 'react'
import { Route } from 'react-router-dom'
import Login from '../pages/Login'
import Register from '../pages/Register'

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
	</>
)

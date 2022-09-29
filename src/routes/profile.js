import React from 'react'
import { Route } from 'react-router-dom'
import UpdatePassword from '../pages/user/UpdatePassword'
import UpdateUser from '../pages/user/UpdateUser'

export const profileRoutes = (
	<Route path='profile'>
		<Route
			index
			element={<UpdateUser />}
		/>
		<Route
			path='update-password'
			element={<UpdatePassword />}
		/>
	</Route>
)

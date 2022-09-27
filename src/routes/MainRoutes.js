import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../layout/Home'
import UpdateUser from '../pages/user/UpdateUser'
import UpdatePassword from '../pages/user/UpdatePassword'
import Login from '../pages/Login'
import Register from '../pages/Register'
import ActivesProcesses from '../pages/process/ActivesProcesses'
import InactivesProcesses from '../pages/process/InactivesProcesses'
import RegisterProcess from '../pages/process/RegisterProcess'
import UpdateProcess from '../pages/process/UpdateProcess'
import ActivesRoles from '../pages/role/ActivesRoles'
import InactivesRoles from '../pages/role/InactivesRoles'
import RegisterRole from '../pages/role/RegisterRole'
import UpdateRole from '../pages/role/UpdateRole'

const MainRoutes = () => {
	return (
		<Routes>
			<Route
				path='/'
				element={<Home />}
			>
				<Route
					index
					element={<Login />}
				/>
				<Route
					path='register'
					element={<Register />}
				/>
				<Route path='dashboard'></Route>
				<Route path='admin'>
					<Route path='processes'>
						<Route
							index
							path='actives'
							element={<ActivesProcesses />}
						/>
						<Route
							path='inactives'
							element={<InactivesProcesses />}
						/>
						<Route
							path='register'
							element={<RegisterProcess />}
						/>
						<Route
							path=':id'
							element={<UpdateProcess />}
						/>
					</Route>
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
							path=':id'
							element={<UpdateRole />}
						/>
					</Route>
				</Route>
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
			</Route>
		</Routes>
	)
}

export default MainRoutes

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
import RegisterAdmin from '../pages/admin/RegisterAdmin'
import ActivesAdmins from '../pages/admin/ActivesAdmins'
import InactivesAdmins from '../pages/admin/InactivesAdmins'
import UpdateAdmin from '../pages/admin/UpdateAdmin'

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
					<Route
						path='register'
						element={<RegisterAdmin />}
					/>
					<Route
						path=':id'
						element={<UpdateAdmin />}
					/>
					<Route
						path='actives'
						element={<ActivesAdmins />}
					/>
					<Route
						path='inactives'
						element={<InactivesAdmins />}
					/>
					<Route path='processes'>
						<Route
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

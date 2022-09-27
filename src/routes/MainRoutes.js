import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from '../layout/Layout'
import Login from '../pages/Login'
import Register from '../pages/Register'

const MainRoutes = () => {
	return (
		<Routes>
			<Route
				path='/'
				element={<Layout />}
			>
				<Route
					index
					element={<Login />}
				/>
				<Route
					path='register'
					element={<Register />}
				/>
			</Route>
			{/* <Route path="/admin">

      </Route>
      <Route path="/user">

      </Route>
      <Route path="/admin">

      </Route> */}
		</Routes>
	)
}

export default MainRoutes

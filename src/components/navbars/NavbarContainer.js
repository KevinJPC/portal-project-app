import React from 'react'
import { useSelector } from 'react-redux'
import { selectIsAuthenticated } from '../../features/authSlice'
import InitialNavbar from './InitialNavbar'
import MainNavbar from './MainNavbar'

function NavbarContainer() {
	const isAuthenticated = useSelector(selectIsAuthenticated)

	return isAuthenticated ? (
		<>
			<MainNavbar />
		</>
	) : (
		<InitialNavbar />
	)
}

export default NavbarContainer

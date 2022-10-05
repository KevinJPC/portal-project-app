import React from 'react'
import InitialNavbar from './InitialNavbar'
import MainNavbar from './MainNavbar'

function NavbarContainer() {
	return (
		<>
			{/* <InitialNavbar /> */}
			{/* <GeneralUserNavbar /> */}
			<AdminUserNavbar />
		</>
	)
}

export default NavbarContainer

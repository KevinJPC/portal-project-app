import React from 'react'
import InitialNavbar from './InitialNavbar'
import GeneralUserNavbar from './GeneralUserNavbar'
import AdminUserNavbar from './AdminUserNavbar'

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

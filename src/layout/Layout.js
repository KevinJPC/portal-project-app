import React from 'react'
import PropTypes from 'prop-types'
import InitialNavbar from '../components/navbars/InitialNavbar'
import GeneralUserNavbar from '../components/navbars/GeneralUserNavbar'
import AdminUserNavbar from '../components/navbars/AdminUserNavbar'

const Layout = ({ children }) => {
	return (
		<div className='flex flex-col h-screen font-fira'>
			<header className='md:h-18 h-16 text-white'>
				{/* <InitialNavbar /> */}
				{/* <GeneralUserNavbar /> */}
				<AdminUserNavbar />
			</header>
			<main className='mt-5'>{children}</main>
			<footer></footer>
		</div>
	)
}

Layout.propTypes = {
	children: PropTypes.element.isRequired,
}

export default Layout

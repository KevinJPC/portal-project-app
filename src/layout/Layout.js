import React from 'react'
import PropTypes from 'prop-types'
import NavbarContainer from '../components/navbars/NavbarContainer'

const Layout = ({ children }) => {
	return (
		<div className='flex flex-col h-screen font-fira'>
			<header className='md:h-18 h-16 text-white absolute w-full'>
				<NavbarContainer />
			</header>
			<main className='mt-16 h-full overflow-y-auto'>{children}</main>
			<footer></footer>
		</div>
	)
}

Layout.propTypes = {
	children: PropTypes.element.isRequired,
}

export default Layout

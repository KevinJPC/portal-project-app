import React from 'react'
import PropTypes from 'prop-types'
import NavbarContainer from '../components/navbars/NavbarContainer'

/**
 * The Layout component is a wrapper for the Navbar and the children components.
 * @returns A React component that renders a div with a header, main, and footer.
 */
const Layout = ({ children }) => {
	return (
		<div className='font-fira'>
			<header className='md:h-18 h-16 text-white w-full'>
				<NavbarContainer />
			</header>
			<main className='min-h-[calc(100vh-64px)] flex'>{children}</main>
			<footer></footer>
		</div>
	)
}

Layout.propTypes = {
	children: PropTypes.element.isRequired,
}

export default Layout

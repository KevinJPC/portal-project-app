import React from 'react'
import PropTypes from 'prop-types'
import { ToastContainer } from 'react-toastify'
import NavbarContainer from '../components/navbars/NavbarContainer'

import 'react-toastify/dist/ReactToastify.css'

/**
 * The Layout component is a wrapper for the Navbar and the children components.
 * @returns A React component that renders a div with a header, main, and footer.
 */
const Layout = ({ children }) => {
	return (
		<div className='font-fira'>
			<header className='md:h-18 h-16 text-white w-full sticky top-0 z-50'>
				<NavbarContainer />
			</header>
			<main className='min-h-[calc(100vh-64px)] flex flex-col'>{children}</main>
			<ToastContainer autoClose={1500} />
			<footer></footer>
		</div>
	)
}

Layout.propTypes = {
	children: PropTypes.element.isRequired,
}

export default Layout

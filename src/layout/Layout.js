import React from 'react'
import Navbar from '../components/Navbar'
import PropTypes from 'prop-types'

const Layout = ({ children }) => {
	return (
		<div className='flex flex-col h-screen font-fira'>
			<header className='md:h-18 h-16 text-white'>
				<Navbar />
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

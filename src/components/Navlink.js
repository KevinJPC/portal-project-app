import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

function Navlink({ to, text, ...props }) {
	return (
		<NavLink
			to={to}
			{...props}
			className={({ isActive }) =>
				isActive ? 'text-p-white' : 'text-p-silver'
			}
		>
			{text}
		</NavLink>
	)
}

Navlink.propTypes = {
	to: PropTypes.string,
	text: PropTypes.string,
	props: PropTypes.object,
}

export default Navlink

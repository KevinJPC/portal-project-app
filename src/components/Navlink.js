import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

function Navlink({ to, text, rounded = true }) {
	return (
		<NavLink
			to={to}
			className={({ isActive }) =>
				isActive
					? `text-p-white block px-4 py-2`
					: `text-p-silver hover:text-p-blue block px-4 py-2 hover:bg-p-silver ${
							rounded && 'rounded'
					  }`
			}
		>
			{text}
		</NavLink>
	)
}

Navlink.propTypes = {
	to: PropTypes.string,
	text: PropTypes.string,
	rounded: PropTypes.bool,
}

export default Navlink

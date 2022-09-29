import React from 'react'
import { NavLink } from 'react-router-dom'

function Navlink({ to, children, ...props }) {
	return (
		<NavLink
			to={to}
			{...props}
			className={({ isActive }) =>
				isActive ? 'text-p-white' : 'text-p-silver'
			}
		>
			{children}
		</NavLink>
	)
}

export default Navlink

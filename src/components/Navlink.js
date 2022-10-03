import React from 'react'
import { NavLink } from 'react-router-dom'

function Navlink({ to, children, ...props }) {
	return (
		<NavLink
			to={to}
			{...props}
			className={({ isActive }) =>
				isActive
					? 'text-p-white block px-4 py-2'
					: 'text-p-silver hover:text-p-blue block px-4 py-2 hover:bg-p-silver rounded'
			}
		>
			{children}
		</NavLink>
	)
}

export default Navlink

import React from 'react'
import { NavLink } from 'react-router-dom'

function Navlink({ to, children, ...props }) {
	return (
		<NavLink
			to={to}
			{...props}
			className={({ isActive }) =>
				isActive ? 'text-p-red pointer-events-none' : undefined
			}
		>
			{children}
		</NavLink>
	)
}

export default Navlink

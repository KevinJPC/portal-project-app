import React from 'react'
import PropTypes from 'prop-types'
import { Outlet } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import Spinner from '../Spinner'

function RequireAuth({
	isAuthenticated,
	isTokenValidated,
	isAdmin,
	restrictTo,
	redirectPath,
	location,
}) {
	if (!isTokenValidated)
		return (
			<div className='w-full flex flex-grow items-center justify-center -mt-16'>
				<Spinner />
			</div>
		)

	if (!isAuthenticated)
		return (
			<Navigate
				to='/'
				state={{ location }}
				replace={true}
			/>
		)

	if (
		(restrictTo === 'admin' && !isAdmin) ||
		(restrictTo === 'user' && isAdmin)
	)
		return (
			<Navigate
				to={redirectPath}
				replace={true}
			/>
		)

	return <Outlet />
}

RequireAuth.propTypes = {
	redirectPath: PropTypes.string.isRequired,
	restrictTo: PropTypes.oneOf(['admin', 'user']).isRequired,
	isAuthenticated: PropTypes.bool.isRequired,
	isTokenValidated: PropTypes.bool.isRequired,
	isAdmin: PropTypes.bool.isRequired,
	location: PropTypes.object.isRequired,
}

export default RequireAuth

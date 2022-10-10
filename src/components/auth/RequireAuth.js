import React from 'react'
import PropTypes from 'prop-types'
import { Outlet } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import Spinner from '../Spinner'

function RequireAuth({
	isAuthenticated,
	isTokenValidated,
	roleForRoutes,
	accessRole,
	redirectPath,
	location,
}) {
	if (!isTokenValidated)
		return (
			<div className='w-full flex flex-col justify-center -mt-16'>
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

	if (roleForRoutes !== accessRole)
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
	accessRole: PropTypes.oneOf(['admin', 'general']).isRequired,
	isAuthenticated: PropTypes.bool.isRequired,
	isTokenValidated: PropTypes.bool.isRequired,
	roleForRoutes: PropTypes.string.isRequired,
	location: PropTypes.object.isRequired,
}

export default RequireAuth

import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import Spinner from '../Spinner'
import PropTypes from 'prop-types'

function NonRequireAuth({
	isAuthenticated,
	isTokenValidated,
	roleForRoutes,
	state,
}) {
	if (!isTokenValidated)
		return (
			<div className='w-full flex flex-col justify-center -mt-16'>
				<Spinner />
			</div>
		)

	if (isAuthenticated && state) {
		return (
			<Navigate
				to={state?.location?.pathname}
				replace={true}
			/>
		)
	}

	if (isAuthenticated && roleForRoutes === 'admin')
		return (
			<Navigate
				to='/admin/procesos'
				replace={true}
			/>
		)

	if (isAuthenticated && roleForRoutes === 'general')
		return (
			<Navigate
				to='/procesos'
				replace={true}
			/>
		)

	return <Outlet />
}

NonRequireAuth.propTypes = {
	isAuthenticated: PropTypes.bool.isRequired,
	isTokenValidated: PropTypes.bool.isRequired,
	roleForRoutes: PropTypes.string.isRequired,
	state: PropTypes.object,
}

export default NonRequireAuth

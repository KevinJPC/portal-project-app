import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import Spinner from '../Spinner'
import PropTypes from 'prop-types'

function NonRequireAuth({ isAuthenticated, isTokenValidated, isAdmin, state }) {
	if (!isTokenValidated)
		return (
			<div className='w-full flex flex-grow items-center justify-center -mt-16'>
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

	if (isAuthenticated && isAdmin)
		return (
			<Navigate
				to='/admin/procesos'
				replace={true}
			/>
		)

	if (isAuthenticated && !isAdmin)
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
	isAdmin: PropTypes.bool.isRequired,
	state: PropTypes.object,
}

export default NonRequireAuth

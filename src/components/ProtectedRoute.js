import React, { useEffect, useState } from 'react'
import useAuth from '../hooks/useAuth'
import PropTypes from 'prop-types'
import { Outlet, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {
	selectIsAuthenticated,
	selectRole,
	selectRoleForRoutes,
	selectToken,
	setCredentials,
} from '../features/authSlice'
import { Navigate } from 'react-router-dom'
import { useReconnectMutation } from '../app/services/authApi'

function ProtectedRoute({ accessRole, redirectPath }) {
	const dispatch = useDispatch()
	const isAuthenticated = useSelector(selectIsAuthenticated)
	const token = useSelector(selectToken)
	const role = useSelector(selectRole)
	const roleForRoutes = role === 'admin' ? role : 'general'
	const navigate = useNavigate()

	const [reconnect] = useReconnectMutation()

	// useEffect(() => {
	// 	console.log(isSuccess)
	// 	if (isSuccess) {
	// 		console.log('reconectado ✅')
	// 		console.log(data)
	// 		// dispatch(setCredentials(data.data))
	// 	}
	// }, [isSuccess])

	const handleReconnect = async () => {
		try {
			if (!isAuthenticated && token) {
				console.log('reconectando...')
				const { data } = await reconnect(token).unwrap()
				console.log(data)
				dispatch(setCredentials(data))
			}
		} catch (error) {
			console.log(error)
			navigate('/')
		}
	}

	useEffect(() => {
		console.log('protegiendo ruta')
		handleReconnect()
		if (!isAuthenticated && !token) navigate('/')

		console.log({ isAuthenticated, roleForRoutes })
	}, [])

	// const { isAuthenticated, roleForRoutes } = useAuth()
	// const role = useSelector(selectRole)
	// const roleForRoute = role === 'admin' ? role : 'general'

	// console.log({ isAuthenticated, roleForRoutes })

	// if (!isAuthenticated) return <Navigate to='/' />

	if (isAuthenticated && roleForRoutes !== accessRole)
		return <Navigate to={redirectPath} />

	return isAuthenticated && <Outlet />
}

ProtectedRoute.propTypes = {
	redirectPath: PropTypes.string.isRequired,
	accessRole: PropTypes.oneOf(['admin', 'general']).isRequired,
}

export default ProtectedRoute

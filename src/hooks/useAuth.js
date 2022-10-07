import { useState, useEffect } from 'react'
import {
	selectIsAuthenticated,
	selectRole,
	selectRoleForRoutes,
	selectToken,
	selectUser,
	setCredentials,
} from '../features/authSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useReconnectMutation } from '../app/services/authApi'

function useAuth() {
	const dispatch = useDispatch()
	const isAuthenticated = useSelector(selectIsAuthenticated)
	const token = useSelector(selectToken)
	const role = useSelector(selectRole)
	const roleForRoutes = role === 'admin' ? role : 'general'

	const [reconnect, { isSuccess, data }] = useReconnectMutation()

	useEffect(() => {
		console.log(isSuccess)
		if (isSuccess) {
			console.log('reconectado ✅')
			console.log(data)
			// dispatch(setCredentials(data.data))
		}
	}, [isSuccess])

	useEffect(() => {
		if (!isAuthenticated && token) {
			console.log('reconectando...')
			reconnect(token)
		}
	}, [isAuthenticated])

	return { isAuthenticated, roleForRoutes }
}

export default useAuth

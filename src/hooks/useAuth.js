import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useReconnectMutation } from '../app/services/authApi'
import {
	removeCredentials,
	selectIsAuthenticated,
	selectIsTokenValidated,
	selectRoleForRoutes,
	selectToken,
	setCredentials,
	setIsTokenValidated,
} from '../features/authSlice'

function useAuth() {
	const isAuthenticated = useSelector(selectIsAuthenticated)
	const isTokenValidated = useSelector(selectIsTokenValidated)
	const roleForRoutes = useSelector(selectRoleForRoutes)

	const [reconnect] = useReconnectMutation()
	const dispatch = useDispatch()
	const token = useSelector(selectToken)

	const handleCheckAuth = async () => {
		try {
			if (!isAuthenticated && token) {
				console.log('reconectando...')
				const { data } = await reconnect().unwrap()
				console.log(data)
				dispatch(setCredentials(data))
			} else {
				dispatch(setIsTokenValidated(true))
			}
		} catch (error) {
			dispatch(removeCredentials())
			console.log(error)
		}
	}

	useEffect(() => {
		handleCheckAuth()
	}, [])

	return { isAuthenticated, isTokenValidated, roleForRoutes }
}

export default useAuth

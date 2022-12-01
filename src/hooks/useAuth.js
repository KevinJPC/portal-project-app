import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useReconnectMutation } from '../app/services/authApi'
import {
	selectIsAuthenticated,
	selectIsTokenValidated,
	selectIsAdmin,
	selectToken,
	setCredentials,
	setIsTokenValidated,
} from '../features/authSlice'

function useAuth() {
	const isAuthenticated = useSelector(selectIsAuthenticated)
	const isTokenValidated = useSelector(selectIsTokenValidated)
	const isAdmin = useSelector(selectIsAdmin)

	const [reconnect] = useReconnectMutation()
	const dispatch = useDispatch()
	const token = useSelector(selectToken)

	const handleCheckAuth = async () => {
		try {
			if (!isAuthenticated && token) {
				const { data } = await reconnect().unwrap()
				dispatch(setCredentials(data))
			} else {
				dispatch(setIsTokenValidated(true))
			}
		} catch (error) {
			dispatch(setIsTokenValidated(true))
		}
	}

	useEffect(() => {
		handleCheckAuth()
	}, [])

	return { isAuthenticated, isTokenValidated, isAdmin }
}

export default useAuth

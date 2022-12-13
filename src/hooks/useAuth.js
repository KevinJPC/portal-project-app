import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {
	useReconnectMutation,
	useRegisterUserMutation,
} from '../app/services/authApi'
import {
	selectIsAuthenticated,
	selectIsTokenValidated,
	selectIsAdmin,
	selectToken,
	setCredentials,
	setIsTokenValidated,
} from '../features/authSlice'
import useAlert from './useAlert'

function useAuth(formState = {}) {
	const navigate = useNavigate()

	const isAuthenticated = useSelector(selectIsAuthenticated)
	const isTokenValidated = useSelector(selectIsTokenValidated)
	const [addNewUser, { isLoading: isLoadingAddNewUser }] =
		useRegisterUserMutation()
	const isAdmin = useSelector(selectIsAdmin)

	const [reconnect] = useReconnectMutation()
	const dispatch = useDispatch()
	const token = useSelector(selectToken)
	const { successAlert, errorAlert } = useAlert()

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

	const RegisterNewUser = e => {
		e.preventDefault()

		addNewUser(formState)
			.unwrap()
			.then(data => {
				successAlert(data)
				navigate('/')
			})
			.catch(errorAlert)
	}

	return {
		isAuthenticated,
		isTokenValidated,
		isAdmin,
		registerProps: { RegisterNewUser, isLoadingAddNewUser },
	}
}

export default useAuth

import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useReconnectMutation, useRegisterUserMutation } from '../app/services/authApi'
import {
	removeCredentials,
	selectIsAuthenticated,
	selectIsTokenValidated,
	selectRoleForRoutes,
	selectToken,
	setCredentials,
	setIsTokenValidated,
} from '../features/authSlice'
import { toast } from 'react-toastify'

function useAuth(formState = {}) {
	const navigate = useNavigate()

	const isAuthenticated = useSelector(selectIsAuthenticated)
	const isTokenValidated = useSelector(selectIsTokenValidated)
	const roleForRoutes = useSelector(selectRoleForRoutes)
	const [addNewUser, { isLoading: isLoadingAddNewUser }] =
	useRegisterUserMutation()

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

	const RegisterNewUser = e => {
		e.preventDefault()

		addNewUser(formState)
			.unwrap()
			.then(
				payload =>
					payload.success &&
					(toast.success(payload.message),
					setTimeout(() => {
						navigate('/')
					}, 2500))
			)
			.catch(error =>
				Object.keys(error.data.errors).length === 1
					? toast.error(error.data.message)
					: toast.error('Todos los campos son obligatorios')
			)
	}

	return {
		isAuthenticated,
		isTokenValidated,
		roleForRoutes,
		registerProps: { RegisterNewUser, isLoadingAddNewUser },
	}
}

export default useAuth

import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import { toast } from 'react-toastify'
import {
	useUpdateUserPasswordMutation,
	useUpdateUserProfileMutation,
} from '../app/services/userApi'
import { selectUser } from '../features/authSlice'

function useUser(onResetForm, formState = {}) {
	const userData = useSelector(selectUser)
	const [updatePassword, { isloading: isLoadingUpdatePassword }] =
		useUpdateUserPasswordMutation()

	const [updateProfile, { isLoading: isLoadingUpdateProfile }] =
		useUpdateUserProfileMutation()

	/**
	 * Update the password of the current user & show the notification of success or error.
	 */
	const updateUserPassword = e => {
		e.preventDefault()
		updatePassword(formState)
			.unwrap()
			.then(
				payload => payload.success && toast.success(payload.message),
				onResetForm()
			)
			.catch(error =>
				Object.keys(error.data.errors).length === 1
					? toast.error(error.data.message)
					: toast.error('Todos los campos son obligatorios')
			)
	}

	/**
	 * Update the profile of the current user & show the notification of success or error.
	 */
	const updateUserProfile = e => {
		e.preventDefault()
		updateProfile(formState)
			.unwrap()
			.then(payload => payload.success && toast.success(payload.message))
			.catch(error =>
				Object.keys(error.data.errors).length === 1
					? toast.error(error.data.message)
					: toast.error('Todos los campos son obligatorios')
			)
	}

	return {
		passwordProps: {
			isLoadingUpdatePassword,
			updateUserPassword,
		},
		profileProps: {
			isLoadingUpdateProfile,
			userData,
			updateUserProfile,
		},
	}
}

useUser.propTypes = {
	onResetForm: PropTypes.func,
	formState: PropTypes.object,
}

export default useUser

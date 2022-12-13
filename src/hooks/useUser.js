import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import {
	useUpdateUserPasswordMutation,
	useUpdateUserProfileMutation,
} from '../app/services/userApi'
import { selectUser } from '../features/authSlice'
import useAlert from './useAlert'

function useUser(formState = {}, onResetForm) {
	const userData = useSelector(selectUser)
	const { successAlert, errorAlert } = useAlert()

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
			.then(data => {
				successAlert(data)
				onResetForm()
			})
			.catch(errorAlert)
	}

	/**
	 * Update the profile of the current user & show the notification of success or error.
	 */
	const updateUserProfile = e => {
		e.preventDefault()
		updateProfile(formState)
			.unwrap()
			.then(data => {
				successAlert(data)
			})
			.catch(errorAlert)
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
	formState: PropTypes.object,
	onResetForm: PropTypes.func,
}

export default useUser

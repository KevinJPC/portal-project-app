import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import {
	useAddNewAdminMutation,
	useLazyGetAdminByIdQuery,
	useInactivateAdminMutation,
	useUpdateAdminMutation,
	useActivateAdminMutation,
	useLazyGetActivesAdminQuery,
	useLazyGetInactivesAdminQuery,
	useLazyGetSearchAdminQuery,
} from '../app/services/adminApi'
import useParseTo from './useParseTo'
import useAlert from './useAlert'

function useAdmin(formState = {}, id) {
	const navigate = useNavigate()
	const { successAlert, errorAlert } = useAlert()

	const [addNewAdmin, { isLoading: isLoadingAddNewAdmin }] =
		useAddNewAdminMutation()
	const [
		updateAdmin,
		{ isLoading: isLoadingUpdateAdmin, isSuccess: isSuccessUpdateAdmin },
	] = useUpdateAdminMutation()
	const [
		getUserAdminData,
		{ data: userInformation, isSuccess: isSuccessGetAdmin },
	] = useLazyGetAdminByIdQuery()
	const [inactivateAdmin, { isLoading: isLoadingInactivateAdmin }] =
		useInactivateAdminMutation()
	const [activateAdmin, { isLoading: isLoadingActivateAdmin }] =
		useActivateAdminMutation()
	const [
		getActivesAdmins,
		{
			data: activesAdmins,
			isSuccess: isSuccessGetActivesAdmins,
			isFetching: isLoadingGetActivesAdmins,
		},
	] = useLazyGetActivesAdminQuery()
	const [
		getInactivesAdmins,
		{
			data: inactivesAdmins,
			isSuccess: isSuccessGetInactivesAdmins,
			isFetching: isLoadingGetInactivesAdmins,
		},
	] = useLazyGetInactivesAdminQuery()
	const [
		searchAdmin,
		{ data: searchAdminData, isFetching: isLoadingSearchAdmin },
	] = useLazyGetSearchAdminQuery()

	const { parseToInteger } = useParseTo()

	/**
	 *  Call the rtk query function of add a new admin, and then does some stuff with the promise
	 * 	to send a notification of success or error.
	 */
	const registerNewAdmin = e => {
		e.preventDefault()
		addNewAdmin(formState)
			.unwrap()
			.then(data => {
				successAlert(data)
				navigate('/admin/usuarios')
			})
			.catch(errorAlert)
	}

	/**
	 *  Call the rtk query function of update the admin, and then does some stuff with the promise
	 * 	to send a notification of success or error.
	 */
	const updateAdminUser = e => {
		e.preventDefault()
		updateAdmin(formState)
			.unwrap()
			.then(data => {
				successAlert(data)
				navigate('/admin/usuarios')
			})
			.catch(errorAlert)
	}

	/**
	 *  Call the rtk query function of inactivate admin, and then does some stuff with the promise
	 * 	to send a notification of success.
	 */
	const inactivaUserAdmin = () => {
		inactivateAdmin(parseToInteger(id))
			.unwrap()
			.then(data => {
				successAlert(data)
				navigate('/admin/usuarios')
			})
	}

	/**
	 *  Receives the id of the admin and call the rtk query function of activate admin
	 * 	and then does some stuff with the promise to send a notification of success.
	 */
	const activateAdminUser = idAdmin => {
		activateAdmin(parseToInteger(idAdmin))
			.unwrap()
			.then(data => {
				successAlert(data)
			})
	}

	/**
	 * 	Call the rtk query function of get admin data to get the information of the admin
	 */
	const getUserAdminInformation = () => {
		getUserAdminData(parseToInteger(id))
	}

	/**
	 *  Call the rtk query function of get active administrators
	 * 	@param pageNum - The page number to get the data from.
	 */
	const getActivesAdminsData = (pageNum = 1) => {
		getActivesAdmins(pageNum)
	}

	/**
	 *  Call the rtk query function of get inactive administrators
	 * 	@param pageNum - The page number to get the data from.
	 */
	const getInactivesAdminsData = (pageNum = 1) => {
		getInactivesAdmins(pageNum)
	}

	return {
		registerProps: { registerNewAdmin, isLoadingAddNewAdmin },
		updateProps: {
			updateAdminUser,
			isSuccessUpdateAdmin,
			isLoadingUpdateAdmin,
			inactivaUserAdmin,
			isLoadingInactivateAdmin,
			activateAdminUser,
			isLoadingActivateAdmin,
		},
		listProps: {
			getActivesAdminsData,
			activesAdmins,
			isLoadingGetActivesAdmins,
			isSuccessGetActivesAdmins,
			getInactivesAdminsData,
			inactivesAdmins,
			isLoadingGetInactivesAdmins,
			isSuccessGetInactivesAdmins,
			searchAdmin,
			searchAdminData,
			isLoadingSearchAdmin,
		},
		getUserAdminInformation,
		userInformation,
		isSuccessGetAdmin,
	}
}

useAdmin.propTypes = {
	formState: PropTypes.object,
	id: PropTypes.string,
}

export default useAdmin

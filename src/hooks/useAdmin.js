import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import { toast } from 'react-toastify'
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

function useAdmin(formState = {}, id) {
	const navigate = useNavigate()

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
			isLoading: isLoadingGetActivesAdmins,
		},
	] = useLazyGetActivesAdminQuery()
	const [
		getInactivesAdmins,
		{
			data: inactivesAdmins,
			isSuccess: isSuccessGetInactivesAdmins,
			isLoading: isLoadingGetInactivesAdmins,
		},
	] = useLazyGetInactivesAdminQuery()
	const [
		searchAdmin,
		{ data: searchAdminData, isLoading: isLoadingSearchAdmin },
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
			.then(
				payload =>
					payload.success &&
					(toast.success(payload.message),
					setTimeout(() => {
						navigate(-1)
					}, 2500))
			)
			.catch(error =>
				Object.keys(error.data.errors).length === 1
					? toast.error(error.data.message)
					: toast.error('Todos los campos son obligatorios')
			)
	}

	/**
	 *  Call the rtk query function of update the admin, and then does some stuff with the promise
	 * 	to send a notification of success or error.
	 */
	const updateAdminUser = e => {
		e.preventDefault()
		updateAdmin(formState)
			.unwrap()
			.then(
				payload =>
					payload.success &&
					(toast.success(payload.message),
					setTimeout(() => {
						navigate(-1)
					}, 2500))
			)
			.catch(error =>
				Object.keys(error.data.errors).length === 1
					? toast.error(error.data.message)
					: toast.error('Todos los campos son obligatorios')
			)
	}

	/**
	 *  Call the rtk query function of inactivate admin, and then does some stuff with the promise
	 * 	to send a notification of success.
	 */
	const inactivaUserAdmin = () => {
		inactivateAdmin(parseToInteger(id))
			.unwrap()
			.then(
				payload =>
					payload.success &&
					(toast.success(payload.message),
					setTimeout(() => {
						navigate(-1)
					}, 2500))
			)
	}

	/**
	 *  Receives the id of the admin and call the rtk query function of activate admin
	 */
	const activateAdminUser = idAdmin => {
		activateAdmin(parseToInteger(idAdmin))
		// .unwrap()
		// .then(
		// 	payload =>
		// 		payload.success &&
		// 		(toast.success(payload.message),
		// 		setTimeout(() => {
		// 			navigate(-1)
		// 		}, 2500))
		// )
	}

	/**
	 * 	Call the rtk query function of get admin data to get the information of the admin
	 */
	const getUserAdminInformation = () => {
		getUserAdminData(parseToInteger(id))
	}

	const getActivesAdminsData = (pageNum = 1) => {
		getActivesAdmins(pageNum)
	}

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

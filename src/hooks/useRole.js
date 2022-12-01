import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import { toast } from 'react-toastify'
import {
	useAddNewRoleMutation,
	useLazyGetRoleByIdQuery,
	useUpdateRoleMutation,
	useInactivateRoleMutation,
	useActivateRoleMutation,
	useLazyGetActivesRolesQuery,
	useLazyGetInactivesRolesQuery,
	useLazyGetSearchRoleQuery,
	useLazyGetPublicRolesQuery,
} from '../app/services/roleApi'
import useParseTo from './useParseTo'

function useRole(formState = {}, id) {
	const navigate = useNavigate()

	const [addNewRole, { isLoading: isLoadingAddNewRole }] =
		useAddNewRoleMutation()
	const [updateRole, { isLoading: isLoadingUpdateRole }] =
		useUpdateRoleMutation()
	const [getRoleData, { data: roleData, isSuccess: isSuccessGetRole }] =
		useLazyGetRoleByIdQuery()
	const [inactivateRole, { isLoading: isLoadingInactivateRole }] =
		useInactivateRoleMutation()
	const [activateRole, { isLoading: isLoadingActivateRole }] =
		useActivateRoleMutation()
	const [
		getActivesRoles,
		{
			data: activesRoles,
			isSuccess: isSuccessGetActivesRoles,
			isLoading: isLoadingGetActivesRoles,
		},
	] = useLazyGetActivesRolesQuery()
	const [
		getInactivesRoles,
		{
			data: inactivesRoles,
			isSuccess: isSuccessGetInactivesRoles,
			isLoading: isLoadingGetInactivesRoles,
		},
	] = useLazyGetInactivesRolesQuery()
	const [searchRole, { data: searchRoleData, isLoading: isLoadingSearchRole }] =
		useLazyGetSearchRoleQuery()

	const [
		getPublicRoles,
		{ data: publicRoles, isLoading: isLoadingGetPublicRoles, isSuccess: isSuccessGetPublicRoles},
	] = useLazyGetPublicRolesQuery()

	const { parseToInteger } = useParseTo()

	/**
	 *  Call the rtk query function of add a new role, and then does some stuff with the promise
	 * 	to send a notification of success or error.
	 */
	const registerNewRole = e => {
		e.preventDefault()
		addNewRole(formState)
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
	 *  Call the rtk query function of update the role, and then does some stuff with the promise
	 * 	to send a notification of success or error.
	 */
	const updateRoleData = e => {
		e.preventDefault()
		updateRole(formState)
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
	 *  Call the rtk query function of inactivate role, and then does some stuff with the promise
	 * 	to send a notification of success.
	 */
	const inactivateSelectedRole = () => {
		inactivateRole(parseToInteger(id))
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
	 *  Receives the id of the role and call the rtk query function of activate role
	 */
	const activateSelectedRole = idRole => {
		activateRole(parseToInteger(idRole))
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

	const getActivesRolesData = (pageNum = 1) => {
		getActivesRoles(pageNum)
	}

	const getInactivesRolesData = (pageNum = 1) => {
		getInactivesRoles(pageNum)
	}

	/**
	 * 	Call the rtk query function of get role data to get the information of the role
	 */
	const getRoleInformation = () => {
		getRoleData(parseToInteger(id))
	}

	return {
		registerProps: {
			registerNewRole,
			isLoadingAddNewRole,
		},
		updateProps: {
			updateRoleData,
			isLoadingUpdateRole,
			inactivateSelectedRole,
			isLoadingInactivateRole,
			activateSelectedRole,
			isLoadingActivateRole,
		},
		listProps: {
			getActivesRolesData,
			activesRoles,
			isLoadingGetActivesRoles,
			isSuccessGetActivesRoles,
			getInactivesRolesData,
			inactivesRoles,
			isLoadingGetInactivesRoles,
			isSuccessGetInactivesRoles,
			searchRole,
			searchRoleData,
			isLoadingSearchRole,
			getPublicRoles,
			publicRoles,
			isLoadingGetPublicRoles,
			isSuccessGetPublicRoles,
		},
		getRoleInformation,
		isSuccessGetRole,
		roleData,
	}
}

useRole.propTypes = {
	formState: PropTypes.object,
	id: PropTypes.string,
}

export default useRole

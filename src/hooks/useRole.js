import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'
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
import useAlert from './useAlert'

function useRole(formState = {}, id) {
	const { successAlert, errorAlert } = useAlert()
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
			isFetching: isLoadingGetActivesRoles,
		},
	] = useLazyGetActivesRolesQuery()
	const [
		getInactivesRoles,
		{
			data: inactivesRoles,
			isSuccess: isSuccessGetInactivesRoles,
			isFetching: isLoadingGetInactivesRoles,
		},
	] = useLazyGetInactivesRolesQuery()
	const [
		searchRole,
		{ data: searchRoleData, isFetching: isLoadingSearchRole },
	] = useLazyGetSearchRoleQuery()

	const [
		getPublicRoles,
		{
			data: publicRoles,
			isLoading: isLoadingGetPublicRoles,
			isSuccess: isSuccessGetPublicRoles,
		},
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
			.then(data => {
				successAlert(data)
				navigate('/admin/roles')
			})
			.catch(errorAlert)
	}

	/**
	 *  Call the rtk query function of update the role, and then does some stuff with the promise
	 * 	to send a notification of success or error.
	 */
	const updateRoleData = e => {
		e.preventDefault()
		updateRole(formState)
			.unwrap()
			.then(data => {
				successAlert(data)
				navigate('/admin/roles')
			})
			.catch(errorAlert)
	}

	/**
	 *  Call the rtk query function of inactivate role, and then does some stuff with the promise
	 * 	to send a notification of success.
	 */
	const inactivateSelectedRole = () => {
		inactivateRole(parseToInteger(id))
			.unwrap()
			.then(data => {
				successAlert(data)
				navigate('/admin/roles')
			})
	}

	/**
	 *  Receives the id of the role and call the rtk query function of activate role
	 *  and then does some stuff with the promise to send a notification of success.
	 */
	const activateSelectedRole = idRole => {
		activateRole(parseToInteger(idRole))
			.unwrap()
			.then(data => {
				successAlert(data)
			})
	}

	/**
	 *  Call the rtk query function of get active roles
	 * 	@param pageNum - The page number to get the data from.
	 */
	const getActivesRolesData = (pageNum = 1) => {
		getActivesRoles(pageNum)
	}

	/**
	 *  Call the rtk query function of get inactive roles
	 * 	@param pageNum - The page number to get the data from.
	 */
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

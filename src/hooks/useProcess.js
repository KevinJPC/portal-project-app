import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import { toast } from 'react-toastify'
import {
	useActivateProcessMutation,
	useAddNewProcessMutation,
	useInactivateProcessMutation,
	useLazyGetActivesProcessQuery,
	useLazyGetInactivesProcessQuery,
	useLazyGetProcessByIdQuery,
	useLazyGetSearchProcessQuery,
	useLazyGetSeSuiteProcessesQuery,
	useLazyGetVisiblesProcessQuery,
	useUpdateProcessMutation,
} from '../app/services/processApi'
import useParseTo from './useParseTo'
import useAlert from './useAlert'

function useProcess(formState = {}, rolesData = {}, changeFormState, id = 0) {
	const { successAlert, errorAlert } = useAlert()
	const navigate = useNavigate()
	const { parseToInteger } = useParseTo()

	const [
		getSeSuiteProcesses,
		{
			data: seSuiteProcesses,
			isSuccess: isSucessGetSeSuiteProcesses,
			isLoading: isLoadingGetSeSuiteProcesses,
		},
	] = useLazyGetSeSuiteProcessesQuery()
	const [addNewProcess, { isLoading: isLoadingAddNewProcess }] =
		useAddNewProcessMutation()
	const [getProcessData, { data: processData, isSuccess: isSucessGetProcess }] =
		useLazyGetProcessByIdQuery()
	const [updateProcess, { isLoading: isLoadingUpdateProcess }] =
		useUpdateProcessMutation()
	const [inactivateProcess, { isLoading: isLoadingInactivateProcess }] =
		useInactivateProcessMutation()
	const [activateProcess, { isLoading: isLoadingActivateProcess }] =
		useActivateProcessMutation()
	const [
		getActivesProcesses,
		{
			data: activesProcesses,
			isSuccess: isSuccessGetActivesProcesses,
			isLoading: isLoadingGetActivesProcesses,
		},
	] = useLazyGetActivesProcessQuery()
	const [
		getInactivesProcesses,
		{
			data: inactivesProcesses,
			isSuccess: isSuccessGetInactivesProcesses,
			isLoading: isLoadingGetInactivesProcesses,
		},
	] = useLazyGetInactivesProcessQuery()
	const [
		searchProcess,
		{ data: searchProcessData, isLoading: isLoadingSearchProcess },
	] = useLazyGetSearchProcessQuery()
	const [
		getVisiblesProcess,
		{
			data: visiblesProcesses,
			isSuccess: isSuccessGetVisiblesProcesses,
			isLoading: isLoadingGetVisiblesProcesses,
		},
	] = useLazyGetVisiblesProcessQuery()

	const [selectedRole, setSelectedRole] = useState({})
	const [isEmptyContainer, setIsEmptyContainer] = useState(false)
	const [rolesOfProcess, setRolesOfProcess] = useState([])

	/**
	 *  Call the rtk query function of add a new process, and then does some stuff with the promise
	 * 	to send a notification of success or error.
	 */
	const registerNewProcess = e => {
		e.preventDefault()
		if (rolesOfProcess.length > 0) {
			addNewProcess(formState)
				.unwrap()
				.then(data => {
					successAlert(data)
					navigate('/admin/procesos')
				})
				.catch(errorAlert)
		} else {
			toast.error('Debe agregarse al menos un rol')
		}
	}

	/**
	 *  Call the rtk query function of update the process, and then does some stuff with the promise
	 * 	to send a notification of success or error.
	 */
	const updateProcessData = e => {
		e.preventDefault()
		if (rolesOfProcess.length > 0) {
			updateProcess(formState)
				.unwrap()
				.then(data => {
					successAlert(data)
					navigate('/admin/procesos')
				})
				.catch(errorAlert)
		} else {
			toast.error('Debe agregarse al menos un rol')
		}
	}

	/**
	 *  Call the rtk query function of inactivate process, and then does some stuff with the promise
	 * 	to send a notification of success.
	 */
	const inactivateSelectedProcess = () => {
		inactivateProcess(parseToInteger(id))
			.unwrap()
			.then(data => {
				successAlert(data)
				navigate('/admin/procesos')
			})
	}

	/**
	 *  Receives the id of the process and call the rtk query function of activate process
	 * 	and then does some stuff with the promise to send a notification of success.
	 */
	const activateSelectedProcess = idProcess => {
		activateProcess(parseToInteger(idProcess))
			.unwrap()
			.then(data => {
				successAlert(data)
			})
	}

	const getProcessInformation = () => {
		getProcessData(parseToInteger(id))
	}

	/**
	 *  Call the rtk query function of get active process
	 * 	@param pageNum - The page number to get the data from.
	 */
	const getActivesProcessesData = (pageNum = 1) => {
		getActivesProcesses(pageNum)
	}

	/**
	 *  Call the rtk query function of get inactive process
	 * 	@param pageNum - The page number to get the data from.
	 */
	const getInactivesProcessesData = (pageNum = 1) => {
		getInactivesProcesses(pageNum)
	}

	/**
	 *  Call the rtk query function of get the visibles processes to the role of the current user
	 * 	@param pageNum - The page number to get the data from.
	 */
	const getVisiblesProcessesData = (pageNum = 1) => {
		getVisiblesProcess(pageNum)
	}

	/**
	 *  Call the rtk query function of get the SE Suite processes elegible to
	 * 	display in the portal
	 */
	const getSeSuiteProcessesData = () => {
		getSeSuiteProcesses()
	}

	/**
	 * 	Load the first role from the array of the active roles
	 * 	@param role - Object with the id and name of the first role
	 */
	const preloadSelectedRole = role => {
		setSelectedRole(role)
	}

	/**
	 * 	Load all the roles that are linked to the process
	 * 	@param roles - Array of objects of roles
	 */
	const preloadRolesOfProcess = roles => {
		setRolesOfProcess(roles)
	}

	/**
	 * 	Filters from the array of active roles the role that has the same id as the
	 * 	selected role, and sets the selectedRole state to the filtered role.
	 * 	@param e - Event object and gets the value (role id)
	 */
	const handleChangeRole = e => {
		const value = rolesData?.data.roles.data.filter(
			role => role.id === parseToInteger(e.target.value)
		)
		setSelectedRole({ id: value[0].id, name: value[0].name })
	}

	/**
	 * 	When the user changes the value of the select element, filter the data in the seSuiteProcesses
	 * 	object to find the matching seOid and then update the form state with the new value.
	 * 	@param e - Event object and gets the value (process seOID)
	 **/
	const handleChangeProcess = e => {
		const value = seSuiteProcesses?.data.filter(
			process => process.seOid === e.target.value
		)
		changeFormState({ seOid: value[0].seOid })
	}

	/**
	 * 	If the selected role is not in the rolesOfProcess array, add it to the array, then gets
	 *  the roles id of the rolesOfProcess array and update the form state with the roles id
	 * 	and new role id added to the process.
	 */
	const addRoleToProcess = () => {
		if (rolesOfProcess.some(role => role.id === selectedRole.id)) {
			setIsEmptyContainer(true)
			setTimeout(() => {
				setIsEmptyContainer(false)
			}, 2500)
		} else {
			setRolesOfProcess([...rolesOfProcess, selectedRole])
			const ids = rolesOfProcess?.map(role => role.id)
			changeFormState({ roles: [...ids, selectedRole.id] })
		}
	}

	/**
	 *  Filter the rolesOfProcess array and returning a new array with the filtered roles and
	 * 	sets the rolesOfProcess state with that roles and update the form state with the roles id
	 * 	@param id - Role id
	 */
	const isDeletingRole = id => {
		setRolesOfProcess(rolesOfProcess.filter(role => role.id !== id))
		const ids = rolesOfProcess
			?.filter(role => role.id !== id)
			.map(role => role.id)
		changeFormState({ roles: [...ids] })
	}

	return {
		registerProps: { registerNewProcess, isLoadingAddNewProcess },
		updateProps: {
			updateProcessData,
			isLoadingUpdateProcess,
			inactivateSelectedProcess,
			isLoadingInactivateProcess,
			activateSelectedProcess,
			isLoadingActivateProcess,
		},
		manageRolesProps: {
			isEmptyContainer,
			rolesOfProcess,
			handleChangeRole,
			handleChangeProcess,
			addRoleToProcess,
			isDeletingRole,
			preloadSelectedRole,
			preloadRolesOfProcess,
		},
		listProps: {
			getActivesProcessesData,
			activesProcesses,
			isLoadingGetActivesProcesses,
			isSuccessGetActivesProcesses,
			getInactivesProcessesData,
			inactivesProcesses,
			isLoadingGetInactivesProcesses,
			isSuccessGetInactivesProcesses,
			searchProcess,
			searchProcessData,
			isLoadingSearchProcess,
			getVisiblesProcessesData,
			visiblesProcesses,
			isSuccessGetVisiblesProcesses,
			isLoadingGetVisiblesProcesses,
		},
		info: {
			getSeSuiteProcessesData,
			seSuiteProcesses,
			isSucessGetSeSuiteProcesses,
			isLoadingGetSeSuiteProcesses,
			getProcessInformation,
			processData,
			isSucessGetProcess,
		},
	}
}

useProcess.propTypes = {
	formState: PropTypes.object,
	rolesData: PropTypes.object,
	changeFormState: PropTypes.func,
	id: PropTypes.string,
}
export default useProcess

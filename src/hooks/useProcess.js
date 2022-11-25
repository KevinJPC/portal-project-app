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
	useUpdateProcessMutation,
} from '../app/services/processApi'
import useParseTo from './useParseTo'

function useProcess(formState = {}, rolesData = {}, changeFormState, id = 0) {
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
	 *  Receives the id of the process and call the rtk query function of activate process
	 */
	const activateSelectedProcess = idProcess => {
		activateProcess(parseToInteger(idProcess))
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

	const getProcessInformation = () => {
		getProcessData(parseToInteger(id))
	}

	const getActivesProcessesData = (pageNum = 1) => {
		getActivesProcesses(pageNum)
	}

	const getInactivesProcessesData = (pageNum = 1) => {
		getInactivesProcesses(pageNum)
	}

	const getSeSuiteProcessesData = () => {
		getSeSuiteProcesses()
	}

	const preloadSelectedRole = state => {
		setSelectedRole(state)
	}

	const preloadRolesOfProcess = state => {
		setRolesOfProcess(state)
	}

	const handleChangeRole = e => {
		const value = rolesData?.data.roles.data.filter(
			role => role.id === parseToInteger(e.target.value)
		)
		setSelectedRole({ id: value[0].id, name: value[0].name })
	}

	const handleChangeProcess = e => {
		const value = seSuiteProcesses?.data.filter(
			process => process.seOid === e.target.value
		)
		changeFormState({ seOid: value[0].seOid })
	}

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

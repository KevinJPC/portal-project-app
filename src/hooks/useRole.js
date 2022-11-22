import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import { toast } from 'react-toastify'
import {
	useAddNewRoleMutation,
	useLazyGetRoleByIdQuery,
	useUpdateRoleMutation,
	useInactivateRoleMutation,
	useActivateRoleMutation,
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

	const { parseToInteger } = useParseTo()

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

	const activateSelectedRole = idRole => {
		activateRole(parseToInteger(idRole))
	}

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

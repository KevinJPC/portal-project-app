import React, { useEffect, useState } from 'react'
import {
	useAddNewProcessMutation,
	useGetSeSuiteProcessesQuery,
} from '../../app/services/processApi'
import { useGetActivesRolesQuery } from '../../app/services/roleApi'
import SubmitButton from '../../components/buttons/SubmitButton'
import Input from '../../components/inputs/TextInput'
import RolesOfProcess from '../../components/rolesOfProcess/RolesOfProcess'
import { useNavigate } from 'react-router-dom'
import Alert from '../../components/alerts/Alert'
import Spinner from '../../components/Spinner'

const RegisterProcess = () => {
	const { data: roles, isSuccess: isSuccessGetRoles } =
		useGetActivesRolesQuery()
	const {
		data: seSuiteProcesses,
		isSuccess: isSucessGetSeSuiteProcesses,
		isLoading: isLoadingGetSeSuiteProcesses,
	} = useGetSeSuiteProcessesQuery()
	const [addNewProcess, { isLoading, isSuccess, data, isError, error }] =
		useAddNewProcessMutation()

	const navigate = useNavigate()
	const [processRoles, setProcessRoles] = useState([])

	const [selectedRole, setSelectedRole] = useState({
		id: '',
		name: '',
	})

	const [values, setValues] = useState({
		name: '',
		visible: false,
		seOid: '',
		roles: [],
	})

	const [isEmpty, setIsEmpty] = useState({
		roleContainer: false,
		roles: false,
	})

	useEffect(() => {
		if (isSuccessGetRoles) {
			setSelectedRole({
				id: roles?.data.roles.data[0].id,
				name: roles?.data.roles.data[0].name,
			})
		}
		if (isSucessGetSeSuiteProcesses) {
			setValues({
				...values,
				seOid: seSuiteProcesses?.data[0].seOid,
			})
		}
	}, [isSuccessGetRoles, isSucessGetSeSuiteProcesses])

	/**
	 * Filters the roles array to find the role that
	 * matches the id of the selected option, and then it sets the selectedRole state to the role that was
	 * found.
	 */
	const handleChangeRole = e => {
		const value = roles?.data.roles.data.filter(
			role => role.id === +e.target.value
		)
		setSelectedRole({ id: value[0].id, name: value[0].name })
	}

	/**
	 * Filters the processes array to find the process that
	 * matches the id of the selected option, and then it sets the selectedProcess state to the process that was
	 * found.
	 */
	const handleChangeProcess = e => {
		const value = seSuiteProcesses?.data.filter(
			process => process.seOid === e.target.value
		)
		setValues({ ...values, seOid: value[0].seOid })
	}

	/**
	 * If the selected role is not in the processRoles array, add it to the array and add it to the values
	 * object
	 */
	const addRoleToProcess = () => {
		if (processRoles.some(role => role.id === selectedRole.id)) {
			setIsEmpty({ roleContainer: true })
			setTimeout(() => {
				setIsEmpty({ roleContainer: false })
			}, 2500)
		} else {
			setProcessRoles([...processRoles, selectedRole])
			const ids = processRoles?.map(role => role.id)
			setValues({ ...values, roles: [...ids, selectedRole.id] })
		}
	}

	/**
	 * Takes an id as an argument and returns a function that
	 * sets the state of processRoles to the filtered processRoles array and sets the state of values to
	 * the filtered processRoles array mapped to the ids.
	 */
	const isDeleting = id => {
		setProcessRoles(processRoles.filter(role => role.id !== id))
		const ids = processRoles
			?.filter(role => role.id !== id)
			.map(role => role.id)
		setValues({ ...values, roles: [...ids] })
	}

	/**
	 * If the processRoles array has a length greater than 0, then add the new process, unwrap the
	 * promise, and if the payload is successful, then navigate to the previous page.
	 */
	const registerNewProcess = e => {
		e.preventDefault()
		try {
			if (processRoles.length > 0) {
				addNewProcess(values)
					.unwrap()
					.then(
						payload =>
							payload.success &&
							setTimeout(() => {
								navigate(-1)
							}, 2500)
					)
					.catch(error)
			} else {
				setIsEmpty({ roles: true })
				setTimeout(() => {
					setIsEmpty({ roles: false })
				}, 2500)
			}
		} catch (err) {}
	}

	return (
		<div className=' '>
			<div className='flex flex-col items-center pt-6 justify-center sm:pt-0 mt-24'>
				<div>
					<h3 className='text-3xl text-p-blue'>Registrar proceso</h3>
				</div>
				<div className='w-full px-6 py-4 mt-1 overflow-hidde max-w-xs sm:max-w-md'>
					<form onSubmit={registerNewProcess}>
						<div className='mt-4 '>
							<Input
								id='name'
								label='Nombre del proceso'
								placeholder='Nombre'
								value={values.name}
								onChange={e => setValues({ ...values, name: e.target.value })}
							/>
						</div>
						<div className='mt-4 '>
							<label className='block text-sm font-medium text-blue mb-2'>
								Proceso
							</label>
							<select
								id='countries'
								onChange={handleChangeProcess}
								className='bg-p-silver text-sm rounded-lg block w-full p-2.5'
							>
								{isLoadingGetSeSuiteProcesses ? (
									<option value=''>Cargando...</option>
								) : (
									seSuiteProcesses?.data.map(process => (
										<option
											key={process.seOid}
											value={process.seOid}
										>
											{process.seOid} - {process.seName}
										</option>
									))
								)}
							</select>
						</div>
						<div className='mt-4 '>
							<label
								htmlFor='first_last_name'
								className='block text-sm font-medium text-p-blue mb-2'
							>
								Roles
							</label>
							<div className='flex items-center gap-3 md:gap-4'>
								<select
									id='countries'
									onChange={handleChangeRole}
									className='bg-p-silver text-sm rounded-lg block w-full p-2.5'
								>
									{roles?.data.roles.data.map(role => (
										<option
											key={role.id}
											value={role.id}
										>
											{role.name}
										</option>
									))}
								</select>
								<button
									type='button'
									className='text-p-white bg-p-purple font-medium rounded-lg text-sm px-4 sm:px-8 py-2.5 text-center'
									onClick={addRoleToProcess}
								>
									Agregar
								</button>
							</div>
							{isEmpty.roleContainer && (
								<div className='mt-4'>
									<Alert
										type='error'
										message={'Este rol ya fue agregado'}
									/>
								</div>
							)}
						</div>
						<div className='mt-5 bg-p-silver rounded-lg'>
							<RolesOfProcess
								roles={processRoles}
								isDeleting={isDeleting}
							/>
						</div>
						<div className='mt-4 '>
							<div className='flex items-center'>
								<label
									htmlFor='visible'
									className='mr-5 text-sm font-medium text-p-blue'
								>
									Mostrar proceso
								</label>
								<input
									id='visible'
									type='checkbox'
									value={values.visible}
									checked={values.visible}
									onChange={e =>
										setValues({ ...values, visible: e.target.checked })
									}
									className='w-5 h-5 rounded'
								/>
							</div>
						</div>
						{isError && (
							<div className='mt-4'>
								<Alert
									type='error'
									message={
										Object.keys(error.data.errors).length === 1
											? error.data.message
											: 'Todos los campos son obligatorios'
									}
								/>
							</div>
						)}
						{isSuccess && (
							<div className='mt-4'>
								<Alert
									type='success'
									message={data.message}
								/>
							</div>
						)}
						{isEmpty.roles && (
							<div className='mt-4'>
								<Alert
									type='error'
									message={'Debe agregarse al menos un rol'}
								/>
							</div>
						)}
						<div className=' my-6'>
							<SubmitButton
								isLoading={isLoading}
								text='Registrar'
							/>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}

export default RegisterProcess

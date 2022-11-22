import React, { useEffect, useState } from 'react'
import ModalWindow from '../../components/ModalWindow'
import { useNavigate, useParams } from 'react-router-dom'
import Input from '../../components/inputs/TextInput'
import {
	useGetProcessByIdQuery,
	useUpdateProcessMutation,
	useInactivateProcessMutation,
	useGetSeSuiteProcessesQuery,
} from '../../app/services/processApi'
import { useGetActivesRolesQuery } from '../../app/services/roleApi'
import ClickButton from '../../components/buttons/ClickButton'
import SubmitButton from '../../components/buttons/SubmitButton'
import RolesOfProcess from '../../components/rolesOfProcess/RolesOfProcess'
import Alert from '../../components/alerts/Alert'

const UpdateProcess = () => {
	const [showModal, setShowModal] = useState(false)
	const { id } = useParams()
	const navigate = useNavigate()

	const { data: process, isSuccess: isSucessGetProcess } =
		useGetProcessByIdQuery(Number(id))
	const {
		data: seSuiteProcesses,
		isSuccess: isSucessGetSeSuiteProcesses,
		isLoading: isLoadingGetSeSuiteProcesses,
	} = useGetSeSuiteProcessesQuery()
	const { data: roles, isSuccess: isSuccessGetRoles } =
		useGetActivesRolesQuery()
	const [
		updateProcess,
		{
			isLoading: isLoadingUpdateAdmin,
			isSuccess: isSuccessUpdateAmin,
			isError: isErrorUpdate,
			error,
			data: dataUpdate,
		},
	] = useUpdateProcessMutation()
	const [
		inactivateProcess,
		{
			isLoading: isLoadingInactivate,
			isSuccess: isSuccessInactivate,
			data: dataInactivate,
		},
	] = useInactivateProcessMutation()

	const [processRoles, setProcessRoles] = useState([])

	const [values, setValues] = useState({
		id: id,
		name: '',
		visible: '',
		roles: [],
	})

	const [secondValues, setSecondValues] = useState({
		seOid: '',
		seName: '',
	})

	const [selectedRole, setSelectedRole] = useState({
		id: '',
		name: '',
	})

	const [isEmpty, setIsEmpty] = useState({
		roleContainer: false,
		roles: false,
	})

	useEffect(() => {
		if (isSucessGetProcess) {
			const ids = processRoles?.map(role => role.id)
			setValues({
				...values,
				name: process?.data.process.name,
				visible: Boolean(process?.data.process.visible),
				roles: ids,
			})
			if (isSucessGetSeSuiteProcesses) {
				const processOfSeSuite = seSuiteProcesses?.data.filter(
					processSeSuite => processSeSuite.seOid === process?.data.process.seOid
				)
				setSecondValues({
					seOid: processOfSeSuite[0].seOid,
					seName: processOfSeSuite[0].seName,
				})
			}
			setProcessRoles(process?.data.roles)
		}
		if (isSuccessGetRoles) {
			setSelectedRole({
				id: roles?.data.roles.data[0].id,
				name: roles?.data.roles.data[0].name,
			})
		}
	}, [isSucessGetProcess, isSuccessGetRoles])

	/**
	 * When the user clicks the button, the modal is set to show.
	 */
	const handleInactivate = () => {
		setShowModal(true)
	}

	/**
	 * If the user chooses to inactivate the process, then close the modal, inactivate the process, and
	 * navigate to the previous page.
	 */
	const areSureInactivate = choose => {
		if (choose) {
			setShowModal(false)
			inactivateProcess(id)
				.unwrap()
				.then(
					payload =>
						payload.success &&
						setTimeout(() => {
							navigate(-1)
						}, 2500)
				)
				.catch(error)
		}
	}

	/**
	 * When the form is submitted, try to update the process, and if
	 * successful, navigate to the previous page.
	 */
	const update = e => {
		e.preventDefault()
		try {
			if (processRoles.length > 0) {
				updateProcess(values)
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

	/**
	 * It takes the value of the selected option and filters the roles array to find the matching role.
	 *
	 * The result is an array with one element, which is the matching role.
	 *
	 * The matching role is then set as the selected role.
	 */
	const handleChangeRole = e => {
		const value = roles?.data.roles.data.filter(
			role => role.id === +e.target.value
		)
		setSelectedRole({ id: value[0].id, name: value[0].name })
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

	return (
		<div className=''>
			<div className='flex flex-col items-center pt-6 sm:pt-0 mt-14 mb-10'>
				<div>
					<h3 className='text-3xl text-p-blue'>Modificar proceso</h3>
				</div>
				<div className='w-full px-6 py-4 mt-1 overflow-hidde max-w-xs sm:max-w-md'>
					<form onSubmit={update}>
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
							<label className='block text-sm font-medium text-p-blue mb-2'>
								Proceso
							</label>
							<select
								className='bg-p-silver text-sm rounded-lg block w-full p-2.5'
								disabled
							>
								{isLoadingGetSeSuiteProcesses ? (
									<option value=''>Cargando...</option>
								) : (
									<option>
										{secondValues.seOid} - {secondValues.seName}
									</option>
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
									selected={roles?.data.roles.data[0].name}
									className='bg-p-silver text-sm rounded-lg block w-full p-2.5'
									onChange={handleChangeRole}
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
									onClick={addRoleToProcess}
									className='text-p-white bg-p-purple font-medium rounded-lg text-sm px-4 sm:px-8 py-2.5 text-center'
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
						{isErrorUpdate && (
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
						{isSuccessUpdateAmin && (
							<div className='mt-4'>
								<Alert
									type='success'
									message={dataUpdate.message}
								/>
							</div>
						)}
						{isSuccessInactivate && (
							<div className='mt-4'>
								<Alert
									type='success'
									message={dataInactivate.message}
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
						<ClickButton
							isLoading={isLoadingInactivate}
							text='Desactivar'
							func={handleInactivate}
							color='red'
						/>
						{showModal && (
							<ModalWindow
								text='¿Está seguro de inactivar este registro?'
								buttonText='Desactivar'
								setShowModal={setShowModal}
								onDialog={areSureInactivate}
							/>
						)}
						<div className='mt-3'>
							<SubmitButton
								isLoading={isLoadingUpdateAdmin}
								text='Guardar cambios'
							/>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}

export default UpdateProcess

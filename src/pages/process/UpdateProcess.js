import React, { useEffect, useState } from 'react'
import ModalWindow from '../../components/ModalWindow'
import { useParams } from 'react-router-dom'
import Input from '../../components/inputs/TextInput'
import ClickButton from '../../components/buttons/ClickButton'
import SubmitButton from '../../components/buttons/SubmitButton'
import RolesOfProcess from '../../components/rolesOfProcess/RolesOfProcess'
import Alert from '../../components/alerts/Alert'
import useForm from '../../hooks/useForm'
import useProcess from '../../hooks/useProcess'
import useRole from '../../hooks/useRole'
import useParseTo from '../../hooks/useParseTo'

const UpdateProcess = () => {
	const { id } = useParams()
	const { parseToBoolean } = useParseTo()
	const {
		formState,
		name,
		visible,
		showModal,
		onInputChange,
		changeFormState,
		closeModal,
		openModal,
	} = useForm({
		id,
		name: '',
		visible: false,
		seOid: '',
		roles: [],
	})

	const [values, setValues] = useState({
		seOid: '',
		seName: '',
	})

	const {
		listProps: {
			getActivesRolesData,
			activesRoles,
			isLoadingGetActivesRoles,
			isSuccessGetActivesRoles,
		},
	} = useRole()

	const {
		updateProps: {
			updateProcessData,
			isLoadingUpdateProcess,
			inactivateSelectedProcess,
			isLoadingInactivateProcess,
		},
		manageRolesProps: {
			isEmptyContainer,
			rolesOfProcess,
			handleChangeRole,
			addRoleToProcess,
			isDeletingRole,
			preloadSelectedRole,
			preloadRolesOfProcess,
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
	} = useProcess({ ...formState }, { ...activesRoles }, changeFormState, id)

	useEffect(() => {
		getActivesRolesData()
	}, [activesRoles])

	useEffect(() => {
		getProcessInformation()
	}, [processData])

	useEffect(() => {
		getSeSuiteProcessesData()
	}, [seSuiteProcesses])

	useEffect(() => {
		if (isSucessGetProcess) {
			preloadRolesOfProcess(processData?.data.roles)
			const ids = processData?.data?.roles?.map(role => role.id)
			changeFormState({
				name: processData?.data.process.name,
				visible: parseToBoolean(processData?.data.process.visible),
				seOid: processData?.data.process.seOid,
				roles: ids,
			})
		}
	}, [isSucessGetProcess, processData])

	useEffect(() => {
		if (isSuccessGetActivesRoles) {
			preloadSelectedRole({
				id: activesRoles?.data.roles.data[0]?.id,
				name: activesRoles?.data.roles.data[0]?.name,
			})
		}
	}, [isSuccessGetActivesRoles])

	useEffect(() => {
		if (isSucessGetSeSuiteProcesses) {
			const processOfSeSuite = seSuiteProcesses?.data.filter(
				processSeSuite =>
					processSeSuite.seOid === processData?.data.process?.seOid
			)
			setValues({
				seOid: processOfSeSuite[0]?.seOid,
				seName: processOfSeSuite[0]?.seName,
			})
		}
	}, [isSucessGetSeSuiteProcesses])

	return (
		<div className=''>
			<div className='flex flex-col items-center pt-6 sm:pt-0 mt-14 mb-10'>
				<div>
					<h3 className='text-3xl text-p-blue'>Modificar proceso</h3>
				</div>
				<div className='w-full px-6 py-4 mt-1 overflow-hidde max-w-xs sm:max-w-md'>
					<form onSubmit={updateProcessData}>
						<div className='mt-4 '>
							<Input
								id='name'
								label='Nombre del proceso'
								value={name}
								onChange={onInputChange}
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
										{values.seOid} - {values.seName}
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
									selected={activesRoles?.data.roles.data[0].name}
									className='bg-p-silver text-sm rounded-lg block w-full p-2.5'
									onChange={handleChangeRole}
								>
									{isLoadingGetActivesRoles ? (
										<option value=''>Cargando...</option>
									) : (
										activesRoles?.data.roles.data.map(role => (
											<option
												key={role.id}
												value={role.id}
											>
												{role.name}
											</option>
										))
									)}
								</select>
								<button
									type='button'
									onClick={addRoleToProcess}
									className='text-p-white bg-p-purple font-medium rounded-lg text-sm px-4 sm:px-8 py-2.5 text-center'
								>
									Agregar
								</button>
							</div>
							{isEmptyContainer && (
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
								roles={rolesOfProcess}
								isDeleting={isDeletingRole}
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
									value={visible}
									checked={visible}
									onChange={e => changeFormState({ visible: e.target.checked })}
									className='w-5 h-5 rounded'
								/>
							</div>
						</div>
						<ClickButton
							isLoading={isLoadingInactivateProcess}
							text='Desactivar'
							func={openModal}
							color='red'
						/>
						{showModal && (
							<ModalWindow
								text='¿Está seguro de inactivar este registro?'
								buttonText='Desactivar'
								setShowModal={closeModal}
								onDialog={inactivateSelectedProcess}
							/>
						)}
						<div className='mt-3'>
							<SubmitButton
								isLoading={isLoadingUpdateProcess}
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

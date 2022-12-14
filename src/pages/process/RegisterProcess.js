import React, { useEffect } from 'react'
import SubmitButton from '../../components/buttons/SubmitButton'
import Input from '../../components/inputs/TextInput'
import RolesOfProcess from '../../components/rolesOfProcess/RolesOfProcess'
import Alert from '../../components/alerts/Alert'
import useRole from '../../hooks/useRole'
import useProcess from '../../hooks/useProcess'
import useForm from '../../hooks/useForm'

const RegisterProcess = () => {
	const { formState, name, visible, onInputChange, changeFormState } = useForm({
		name: '',
		visible: false,
		seOid: '',
		roles: [],
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
		registerProps: { registerNewProcess, isLoadingAddNewProcess },
		manageRolesProps: {
			isEmptyContainer,
			rolesOfProcess,
			handleChangeRole,
			handleChangeProcess,
			addRoleToProcess,
			isDeletingRole,
			preloadSelectedRole,
		},
		info: {
			getSeSuiteProcessesData,
			seSuiteProcesses,
			isSucessGetSeSuiteProcesses,
			isLoadingGetSeSuiteProcesses,
		},
	} = useProcess({ ...formState }, { ...activesRoles }, changeFormState)

	useEffect(() => {
		getActivesRolesData()
	}, [activesRoles])

	useEffect(() => {
		getSeSuiteProcessesData()
	}, [seSuiteProcesses])

	useEffect(() => {
		preloadSelectedRole({
			id: activesRoles?.data?.roles?.data[0]?.id,
			name: activesRoles?.data?.roles?.data[0]?.name,
		})
	}, [isSuccessGetActivesRoles])

	useEffect(() => {
		changeFormState({ seOid: seSuiteProcesses?.data[0]?.seOid })
	}, [isSucessGetSeSuiteProcesses])

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
								value={name}
								onChange={onInputChange}
							/>
						</div>
						<div className='mt-4 '>
							<label className='block text-sm font-medium text-blue mb-2'>
								Proceso
							</label>
							<select
								id='seSuiteProcess'
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
									id='role'
									onChange={handleChangeRole}
									className='bg-p-silver text-sm rounded-lg block w-full p-2.5'
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
									className='text-p-white bg-p-purple font-medium rounded-lg text-sm px-4 sm:px-8 py-2.5 text-center'
									onClick={addRoleToProcess}
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
						<div className=' my-6'>
							<SubmitButton
								isLoading={isLoadingAddNewProcess}
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

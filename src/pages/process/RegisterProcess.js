import React, { useState } from 'react'
import {
	useAddNewProcessMutation,
	useGetActivesProcessQuery,
} from '../../app/services/processApi'
import { useGetActivesRolesQuery } from '../../app/services/roleApi'
import SubmitButton from '../../components/buttons/SubmitButton'
import Input from '../../components/inputs/TextInput'

const RegisterProcess = () => {
	const { data: roles } = useGetActivesRolesQuery()
	const { data: processes } = useGetActivesProcessQuery()

	const [addNewProcess, { isLoading, isSuccess, data, isError, error }] =
		useAddNewProcessMutation()

	const [values, setValues] = useState({
		// id: id,
		name: '',
		visible: '',
	})

	return (
		<div className=' '>
			<div className='flex flex-col items-center pt-6 justify-center sm:pt-0 mt-24'>
				<div>
					<h3 className='text-3xl text-p-blue'>Registrar proceso</h3>
				</div>
				<div className='w-full px-6 py-4 mt-1 overflow-hidde max-w-xs sm:max-w-md'>
					<form>
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
								className='bg-p-silver text-sm rounded-lg block w-full p-2.5'
							>
								{processes?.data.activeProcesses.data.map(process => (
									<option
										key={process.id}
										value={process.id}
									>
										{process.seOid} - {process.seName}
									</option>
								))}
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
									className='bg-p-silver text-sm rounded-lg block w-full p-2.5'
								>
									{roles?.roles.data.map(role => (
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
								>
									Agregar
								</button>
							</div>
						</div>
						<div className='mt-5 bg-p-silver p-12 rounded-lg overflow-y-auto'></div>
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
									value=''
									className='w-5 h-5 text-p-silver rounded'
								/>
							</div>
						</div>
						<div className='md:px-36 my-6'>
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

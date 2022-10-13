import React, { useEffect, useState } from 'react'
import ModalWindow from '../../components/ModalWindow'
import { useParams } from 'react-router-dom'
import Input from '../../components/inputs/TextInput'
import {
	useGetProcessByIdQuery,
	useUpdateProcessMutation,
	useInactivateProcessMutation,
} from '../../app/services/processApi'
import { useGetActivesRolesQuery } from '../../app/services/roleApi'

const UpdateProcess = () => {
	const [showModal, setShowModal] = useState(false)
	const { id } = useParams()
	const { data: process, isSuccess } = useGetProcessByIdQuery(Number(id))
	const { data: roles } = useGetActivesRolesQuery()

	const [values, setValues] = useState({
		id: id,
		name: '',
		visible: '',
	})

	const [secondValues, setSecondValues] = useState({
		seOid: '',
		seName: '',
	})

	useEffect(() => {
		if (isSuccess) {
			setValues({
				...values,
				name: process?.data.process.name,
				visible: Boolean(process?.data.process.visible),
			})
			setSecondValues({
				seOid: process?.data.process.seOid,
				seName: process?.data.process.seName,
			})
		}
	}, [isSuccess])

	return (
		<div className=''>
			<div className='flex flex-col items-center pt-6 sm:pt-0 mt-24'>
				<div>
					<h3 className='text-3xl text-p-blue'>Modificar proceso</h3>
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
							<label className='block text-sm font-medium text-p-blue mb-2'>
								Proceso
							</label>
							<select
								className='bg-p-silver text-sm rounded-lg block w-full p-2.5'
								disabled
							>
								<option>
									{secondValues.seOid} - {secondValues.seName}
								</option>
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
								<select className='bg-p-silver text-sm rounded-lg block w-full p-2.5'>
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
									// value={values.visible}
									// checked={values.visible}
									// onClick={e =>
									// 	setValues({ ...values, visible: e.target.value })
									// }
									className='w-5 h-5 rounded'
								/>
							</div>
						</div>
						<button
							type='button'
							className='text-p-white bg-p-red mt-7 focus:outline-none font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center'
							onClick={() => setShowModal(true)}
						>
							Desactivar
						</button>
						{showModal ? <ModalWindow setShowModal={setShowModal} /> : null}
						<button
							type='submit'
							className='text-p-white bg-p-purple mt-6 focus:outline-none font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center'
						>
							Modificar
						</button>
					</form>
				</div>
			</div>
		</div>
	)
}

export default UpdateProcess

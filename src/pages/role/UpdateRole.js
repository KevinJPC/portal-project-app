import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useGetRoleByIdQuery } from '../../app/services/roleApi'
import ModalWindow from '../../components/ModalWindow'
const UpdateRole = () => {
	const [showModal, setShowModal] = useState(false)
	const { id } = useParams()
	const { data: result } = useGetRoleByIdQuery(id)
	const [name, setName] = useState(result?.role.data)
	const [description, setDescription] = useState(result?.role.data)
	const [state, setState] = useState(result?.role.data)
	console.log(name)
	console.log(result)
	return (
		<div>
			<div className=' mt-16'>
				<div className='flex flex-col items-center pt-6 justify-center sm:pt-0'>
					<div>
						<h3 className='text-3xl text-p-blue'>Modificar Rol</h3>
					</div>
					<div className='w-full px-6 py-4 mt-1 overflow-hidde max-w-xs sm:max-w-md'>
						<form>
							<div className='mt-4 '>
								<label
									htmlFor='name'
									className='block text-sm font-medium text-p-blue mb-2'
								>
									Nombre
								</label>
								<div className='flex flex-col items-start relative'>
									<input
										value={name}
										type='text'
										name='name'
										className=' w-full mt-1 rounded-md shadow-sm bg-p-silver p-2'
										placeholder='Nombre'
									/>
								</div>
							</div>

							<div className='mt-4 '>
								<label
									htmlFor='description'
									className='block text-sm font-medium text-p-blue mb-2'
								>
									Descripción
								</label>
								<div className='flex flex-col items-start relative'>
									<textarea
										value={description}
										type='text'
										name='description'
										className=' w-full mt-1 rounded-md shadow-sm bg-p-silver p-2'
										placeholder='Descripción'
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
								className='text-p-white bg-p-purple mt-7 focus:outline-none font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center'
							>
								Guardar
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}

export default UpdateRole

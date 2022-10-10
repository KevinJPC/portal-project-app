import React, { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {
	useGetAdminByIdQuery,
	useUpdateAdminMutation,
} from '../../app/services/adminApi'
import ModalWindow from '../../components/ModalWindow'

const UpdateAdmin = () => {
	const [showModal, setShowModal] = useState(false)
	const { id } = useParams()
	const navigate = useNavigate()

	const { data: result } = useGetAdminByIdQuery(Number(id))
	const [updateAdmin, { isLoading }] = useUpdateAdminMutation()

	const [name, setName] = useState(result?.data.user.name)
	const [firstLastName, setFirstLastName] = useState(
		result?.data.user.first_last_name
	)
	const [secondLastName, setSecondLastName] = useState(
		result?.data.user.second_last_name
	)
	const [email, setEmail] = useState(result?.data.user.email)

	const updatedAdmin = [id, name, firstLastName, secondLastName, email]
	console.log(updatedAdmin)
	const canSave =
		[name, firstLastName, secondLastName, email].every(Boolean) && !isLoading

	const onSaveAdmin = async () => {
		if (canSave) {
			try {
				await updateAdmin(updatedAdmin).unwrap()
				navigate(-1)
			} catch (err) {}
		}
	}

	return (
		<div className=''>
			<div className='flex flex-col items-center pt-10 md:pt-2 mt-14'>
				<div>
					<h3 className='text-3xl text-p-blue'>Modificar usuario</h3>
				</div>
				<div className='w-full py-4 mt-1 px-4 overflow-hidde max-w-xs md:max-w-3xl'>
					<form>
						<div className='md:grid md:grid-cols-2 gap-5 '>
							<div className='mt-4 '>
								<label
									htmlFor='name'
									className='block text-sm font-medium text-p-blue mb-2'
								>
									Nombre
								</label>
								<div className='flex flex-col items-start '>
									<input
										type='text'
										name='name'
										value={name}
										onChange={e => setName(e.target.value)}
										className=' w-full mt-1 rounded-md shadow-sm bg-p-silver p-2'
										placeholder='Nombre del usuario'
									/>
								</div>
							</div>
							<div className='mt-4 '>
								<label
									htmlFor='first_last_name'
									className='block text-sm font-medium text-p-blue mb-2'
								>
									Primer apellido
								</label>
								<div className='flex flex-col items-start '>
									<input
										type='text'
										name='first_last_name'
										value={firstLastName}
										onChange={e => setFirstLastName(e.target.value)}
										className=' w-full mt-1 rounded-md shadow-sm bg-p-silver p-2'
										placeholder='Primer apellido'
									/>
								</div>
							</div>
							<div className='mt-4 '>
								<label
									htmlFor='second_last_name'
									className='block text-sm font-medium text-p-blue mb-2'
								>
									Segundo apellido
								</label>
								<div className='flex flex-col items-start '>
									<input
										type='text'
										name='second_last_name'
										value={secondLastName}
										onChange={e => setSecondLastName(e.target.value)}
										className=' w-full mt-1 rounded-md shadow-sm bg-p-silver p-2'
										placeholder='Segundo apellido'
									/>
								</div>
							</div>
							<div className='mt-4 '>
								<label
									htmlFor='second_last_name'
									className='block text-sm font-medium text-p-blue mb-2'
								>
									Correo electrónico
								</label>
								<div className='flex flex-col items-start '>
									<input
										type='email'
										name='second_last_name'
										value={email}
										onChange={e => setEmail(e.target.value)}
										className=' w-full mt-1 rounded-md shadow-sm bg-p-silver p-2'
										placeholder='Correo electrónico'
									/>
								</div>
							</div>
						</div>
						<div className='md:px-36'>
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
								onClick={onSaveAdmin}
								className='text-p-white bg-p-purple mt-6 focus:outline-none font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center'
							>
								Modificar
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}

export default UpdateAdmin

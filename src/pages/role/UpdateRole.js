import React, { useState } from 'react'
import Input from '../../components/inputs/TextInput'
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {
	useGetRoleByIdQuery,
	useUpdateRoleMutation,
	useInactivateRoleMutation,
} from '../../app/services/roleApi'
import ModalWindow from '../../components/ModalWindow'
import SubmitButton from '../../components/buttons/SubmitButton'
import ClickButton from '../../components/buttons/ClickButton'

const UpdateRole = () => {
	const [showModal, setShowModal] = useState(false)
	const { id } = useParams()
	const [isRoleInactive, setRoleInactivate] = useState(false)
	const { data: result, isSuccess } = useGetRoleByIdQuery(Number(id))
	const [updateaRole, { isLoading: isLoadingUpdate }] = useUpdateRoleMutation()
	const [inactivateRole, { isLoading: isLoadingInactivate }] =
		useInactivateRoleMutation()
	const navigate = useNavigate()

	const [values, setValues] = useState({
		id: 0,
		name: '',
		nameSlug: '',
		description: '',
	})

	useEffect(() => {
		if (isSuccess) {
			setValues({
				id: Number(id),
				name: result?.role.name,
				nameSlug: result?.role.nameSlug,
				description: result?.role.description,
			})
		}
	}, [isSuccess])

	const inactivate = e => {
		setShowModal(true)
		if (isRoleInactive) {
			inactivateRole(id).unwrap()
			navigate(-1)
		}
	}

	const update = e => {
		e.preventDefault()
		console.log(values.nameSlug)
		updateaRole(values)
		//navigate(-1)
	}

	return (
		<div>
			<div className=' mt-16'>
				<div className='flex flex-col items-center pt-6 justify-center sm:pt-0'>
					<div>
						<h3 className='text-3xl text-p-blue'>Modificar Rol</h3>
					</div>
					<div className='w-full px-6 py-4 mt-1 overflow-hidde max-w-xs sm:max-w-md'>
						<form onSubmit={update}>
							<div className='mt-4 '>
								<div className='flex flex-col items-start relative'>
									<Input
										id='name'
										label='Nombre'
										placeholder='Nombre'
										value={values.name}
										onChange={e =>
											setValues({
												...values,
												name: e.target.value,
												nameSlug: e.target.value.toLowerCase().replaceAll(' ','-'),
											})
										}
									/>
								</div>
							</div>

							<div className='mt-4 '>
								<div className='flex flex-col items-start relative'>
									<Input
										id='description'
										value={values.description}
										label='Descripción'
										placeholder='Descripción'
										onChange={e =>
											setValues({ ...values, description: e.target.value })
										}
									/>
								</div>
							</div>
							<ClickButton
								isLoading={isLoadingInactivate}
								text='Desactivar'
								func={inactivate}
								color='red'
							/>
							{showModal ? (
								<ModalWindow
									setShowModal={setShowModal}
									setRoleInactivate={setRoleInactivate}
								/>
							) : null}
							<div className='mt-3'>
								<SubmitButton
									isLoading={isLoadingUpdate}
									text='Guardar cambios'
								/>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}

export default UpdateRole

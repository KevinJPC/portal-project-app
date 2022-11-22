import React, { useState } from 'react'
import Input from '../../components/inputs/TextInput'
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {
	useGetRoleByIdQuery,
	useUpdateRoleMutation,
	useInactivateRoleMutation,
} from '../../app/services/roleApi'
import Alert from '../../components/alerts/Alert'
import ModalWindow from '../../components/ModalWindow'
import SubmitButton from '../../components/buttons/SubmitButton'
import ClickButton from '../../components/buttons/ClickButton'
import useForm from '../../hooks/useForm'
import useRole from '../../hooks/useRole'

const UpdateRole = () => {
	const { id } = useParams()

	const {
		formState,
		name,
		description,
		showModal,
		onInputChange,
		changeFormState,
		closeModal,
		openModal,
	} = useForm({
		id: id,
		name: '',
		nameSlug: '',
		description: '',
	})

	const {
		updateProps: {
			updateRoleData,
			isLoadingUpdateRole,
			inactivateSelectedRole,
			isLoadingInactivateRole,
		},
		getRoleInformation,
		isSuccessGetRole,
		roleData,
	} = useRole({ ...formState }, id)

	useEffect(() => {
		getRoleInformation()
	}, [roleData])

	useEffect(() => {
		if (isSuccessGetRole) {
			changeFormState({
				name: roleData?.data.role.name,
				nameSlug: roleData?.data.role.nameSlug,
				description: roleData?.data.role.description,
			})
		}
	}, [isSuccessGetRole])

	return (
		<div>
			<div className=' mt-16'>
				<div className='flex flex-col items-center pt-6 justify-center sm:pt-0'>
					<div>
						<h3 className='text-3xl text-p-blue'>Modificar Rol</h3>
					</div>
					<div className='w-full px-6 py-4 mt-1 overflow-hidde max-w-xs sm:max-w-md'>
						<form onSubmit={updateRoleData}>
							<div className='mt-4 '>
								<div className='flex flex-col items-start relative'>
									<Input
										id='name'
										label='Nombre'
										placeholder='Nombre'
										value={name}
										onChange={e =>
											changeFormState({
												name: e.target.value,
												nameSlug: e.target.value
													.toLowerCase()
													.replaceAll(' ', '-'),
											})
										}
									/>
								</div>
							</div>
							<div className='mt-4 '>
								<div className='flex flex-col items-start relative'>
									<Input
										id='description'
										value={description}
										label='Descripción'
										placeholder='Descripción'
										onChange={onInputChange}
									/>
								</div>
							</div>
							<ClickButton
								isLoading={isLoadingInactivateRole}
								text='Desactivar'
								func={openModal}
								color='red'
							/>
							{showModal ? (
								<ModalWindow
									text='¿Está seguro de inactivar este registro?'
									buttonText='Desactivar'
									setShowModal={closeModal}
									onDialog={inactivateSelectedRole}
								/>
							) : null}
							<div className='mt-3'>
								<SubmitButton
									isLoading={isLoadingUpdateRole}
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

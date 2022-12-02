import React from 'react'
import TextInput from '../../components/inputs/InputText'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import ModalWindow from '../../components/ModalWindow'
import SubmitButton from '../../components/buttons/SubmitButton'
import ClickButton from '../../components/buttons/ClickButton'
import useForm from '../../hooks/useForm'
import useRole from '../../hooks/useRole'
import { Form, Formik } from 'formik'
import { roleSchema } from '../../formYupSchemas/roleSchema'

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
		id,
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
	} = useRole()

	useEffect(() => {
		getRoleInformation(id)
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
						<Formik
							initialValues={{ ...formState }}
							onSubmit={values => {
								updateRoleData({
									id,
									nameSlug: values.name.toLowerCase().replaceAll(' ', '-'),
									...values,
								})
							}}
							enableReinitialize
							validationSchema={roleSchema}
						>
							{() => (
								<>
									<Form>
										<div className='mt-4 '>
											<TextInput
												label='Nombre'
												name='name'
											/>
										</div>
										<div className='mt-4 '>
											<TextInput
												label='Descripción'
												name='description'
											/>
										</div>
										<ClickButton
											isLoading={isLoadingInactivateRole}
											text='Desactivar'
											func={openModal}
											color='red'
										/>

										<div className='mt-3'>
											<SubmitButton
												isLoading={isLoadingUpdateRole}
												text='Guardar cambios'
											/>
										</div>
									</Form>
								</>
							)}
						</Formik>
					</div>
				</div>
				{showModal && (
					<ModalWindow
						text='¿Está seguro de inactivar este registro?'
						buttonText='Desactivar'
						setShowModal={closeModal}
						onDialog={() => inactivateSelectedRole(id)}
					/>
				)}
			</div>
		</div>
	)
}

export default UpdateRole

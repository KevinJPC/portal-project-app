import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Form, Formik } from 'formik'
import ClickButton from '../../components/buttons/ClickButton'
import SubmitButton from '../../components/buttons/SubmitButton'
import ModalWindow from '../../components/ModalWindow'
import useAdmin from '../../hooks/useAdmin'
import useForm from '../../hooks/useForm'
import InputText from '../../components/inputs/InputText'
import { adminSchema } from '../../formYupSchemas/adminSchema'

const UpdateAdmin = () => {
	const { id } = useParams()

	const { formState, showModal, changeFormState, closeModal, openModal } =
		useForm({
			id,
			name: '',
			email: '',
			firstLastName: '',
			secondLastName: '',
		})

	const {
		updateProps: {
			updateAdminUser,
			isLoadingUpdateAdmin,
			inactivaUserAdmin,
			isLoadingInactivateAdmin,
		},
		getUserAdminInformation,
		isSuccessGetAdmin,
		userInformation,
	} = useAdmin()

	useEffect(() => {
		getUserAdminInformation(id)
	}, [userInformation])

	useEffect(() => {
		if (isSuccessGetAdmin) {
			changeFormState({
				name: userInformation?.data.user.name,
				email: userInformation?.data.user.email,
				firstLastName: userInformation?.data.user.firstLastName,
				secondLastName: userInformation?.data.user.secondLastName,
			})
		}
	}, [isSuccessGetAdmin])

	return (
		<div className=''>
			<div className='flex flex-col items-center pt-10 md:pt-2 mt-14'>
				<Formik
					initialValues={{
						...formState,
					}}
					onSubmit={values => {
						updateAdminUser({ id, ...values })
					}}
					enableReinitialize
					validationSchema={adminSchema}
				>
					{() => (
						<>
							<div>
								<h3 className='text-3xl text-p-blue'>Modificar usuario</h3>
							</div>
							<div className='w-full py-4 mt-1 px-4 overflow-hidde max-w-xs md:max-w-3xl'>
								<Form>
									<div className='md:grid md:grid-cols-2 gap-5 '>
										<div className='mt-4 '>
											<InputText
												label='Nombre'
												name='name'
											/>
										</div>
										<div className='mt-4 '>
											<InputText
												label='Primer apellido'
												name='firstLastName'
											/>
										</div>
										<div className='mt-4 '>
											<InputText
												label='Segundo apellido'
												name='secondLastName'
											/>
										</div>
										<div className='mt-4 '>
											<InputText
												label='Correo electrónico'
												name='email'
											/>
										</div>
									</div>
									<div className='md:px-36'>
										<ClickButton
											isLoading={isLoadingInactivateAdmin}
											text='Desactivar'
											func={openModal}
											color='red'
										/>
										<div className='mt-3'>
											<SubmitButton
												isLoading={isLoadingUpdateAdmin}
												text='Guardar cambios'
											/>
										</div>
									</div>
								</Form>
							</div>
						</>
					)}
				</Formik>
				{showModal && (
					<ModalWindow
						text='¿Está seguro de inactivar este registro?'
						buttonText='Desactivar'
						setShowModal={closeModal}
						onDialog={() => inactivaUserAdmin(id)}
					/>
				)}
			</div>
		</div>
	)
}

export default UpdateAdmin

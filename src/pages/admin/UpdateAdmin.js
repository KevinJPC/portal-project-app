import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ClickButton from '../../components/buttons/ClickButton'
import SubmitButton from '../../components/buttons/SubmitButton'
import Input from '../../components/inputs/TextInput'
import ModalWindow from '../../components/ModalWindow'
import useAdmin from '../../hooks/useAdmin'
import useForm from '../../hooks/useForm'

const UpdateAdmin = () => {
	const { id } = useParams()

	const {
		formState,
		name,
		email,
		firstLastName,
		secondLastName,
		showModal,
		onInputChange,
		changeFormState,
		closeModal,
		openModal,
	} = useForm({
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
	} = useAdmin({ ...formState }, id)

	useEffect(() => {
		getUserAdminInformation()
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
				<div>
					<h3 className='text-3xl text-p-blue'>Modificar usuario</h3>
				</div>
				<div className='w-full py-4 mt-1 px-4 overflow-hidde max-w-xs md:max-w-3xl'>
					<form onSubmit={updateAdminUser}>
						<div className='md:grid md:grid-cols-2 gap-5 '>
							<div className='mt-4 '>
								<Input
									id='name'
									label='Nombre'
									value={name}
									onChange={onInputChange}
								/>
							</div>
							<div className='mt-4 '>
								<Input
									id='firstLastName'
									label='Primer apellido'
									value={firstLastName}
									onChange={onInputChange}
								/>
							</div>
							<div className='mt-4 '>
								<Input
									id='secondLastName'
									label='Segundo apellido'
									value={secondLastName}
									onChange={onInputChange}
								/>
							</div>
							<div className='mt-4 '>
								<Input
									id='email'
									label='Correo electrónico'
									value={email}
									onChange={onInputChange}
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
							{showModal && (
								<ModalWindow
									text='¿Está seguro de inactivar este registro?'
									buttonText='Desactivar'
									setShowModal={closeModal}
									onDialog={inactivaUserAdmin}
								/>
							)}
							<div className='mt-3'>
								<SubmitButton
									isLoading={isLoadingUpdateAdmin}
									text='Guardar cambios'
								/>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}

export default UpdateAdmin

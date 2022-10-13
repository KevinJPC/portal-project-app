import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {
	useGetAdminByIdQuery,
	useUpdateAdminMutation,
	useInactivateAdminMutation,
} from '../../app/services/adminApi'
import ClickButton from '../../components/buttons/ClickButton'
import SubmitButton from '../../components/buttons/SubmitButton'
import Input from '../../components/inputs/TextInput'
import ModalWindow from '../../components/ModalWindow'

const UpdateAdmin = () => {
	const [showModal, setShowModal] = useState(false)
	const { id } = useParams()
	const navigate = useNavigate()

	const { data: result, isSuccess } = useGetAdminByIdQuery(Number(id))
	const [updateAdmin, { isLoading: isLoadingUpdate }] = useUpdateAdminMutation()

	const [inactivateAdmin, { isLoading: isLoadingInactivate }] =
		useInactivateAdminMutation()

	const [values, setValues] = useState({
		id: id,
		name: '',
		email: '',
		firstLastName: '',
		secondLastName: '',
	})

	useEffect(() => {
		if (isSuccess) {
			setValues({
				...values,
				name: result?.data.user.name,
				email: result?.data.user.email,
				firstLastName: result?.data.user.firstLastName,
				secondLastName: result?.data.user.secondLastName,
			})
		}
	}, [isSuccess])

	/**
	 * When the user clicks the button, the modal is set to show.
	 */
	const handleInactivate = () => {
		setShowModal(true)
	}

	/**
	 * If the user chooses to inactivate the admin, then close the modal, inactivate the admin, and
	 * navigate to the previous page.
	 */
	const areSureInactivate = choose => {
		if (choose) {
			setShowModal(false)
			inactivateAdmin(id)
			navigate(-1)
		}
	}

	/**
	 * When the form is submitted, try to update the admin, and if
	 * successful, navigate to the previous page.
	 */
	const update = e => {
		e.preventDefault()
		try {
			updateAdmin(values)
			navigate(-1)
		} catch (err) {}
	}

	return (
		<div className=''>
			<div className='flex flex-col items-center pt-10 md:pt-2 mt-14'>
				<div>
					<h3 className='text-3xl text-p-blue'>Modificar usuario</h3>
				</div>
				<div className='w-full py-4 mt-1 px-4 overflow-hidde max-w-xs md:max-w-3xl'>
					<form onSubmit={update}>
						<div className='md:grid md:grid-cols-2 gap-5 '>
							<div className='mt-4 '>
								<Input
									id='name'
									label='Nombre'
									placeholder='Nombre'
									value={values.name}
									onChange={e => setValues({ ...values, name: e.target.value })}
								/>
							</div>
							<div className='mt-4 '>
								<Input
									id='firstLastName'
									label='Primer apellido'
									placeholder='Primer apellido'
									value={values.firstLastName}
									onChange={e =>
										setValues({ ...values, firstLastName: e.target.value })
									}
								/>
							</div>
							<div className='mt-4 '>
								<Input
									id='secondLastName'
									label='Segundo apellido'
									placeholder='Segundo apellido'
									value={values.secondLastName}
									onChange={e =>
										setValues({ ...values, secondLastName: e.target.value })
									}
								/>
							</div>
							<div className='mt-4 '>
								<Input
									id='email'
									label='Correo electrónico'
									placeholder='Correo electrónico'
									value={values.email}
									onChange={e =>
										setValues({ ...values, email: e.target.value })
									}
								/>
							</div>
						</div>
						<div className='md:px-36'>
							<ClickButton
								isLoading={isLoadingInactivate}
								text='Desactivar'
								func={handleInactivate}
								color='red'
							/>
							{showModal && (
								<ModalWindow
									text='¿Está seguro de inactivar este registro?'
									buttonText='Desactivar'
									setShowModal={setShowModal}
									onDialog={areSureInactivate}
								/>
							)}
							<div className='mt-3'>
								<SubmitButton
									isLoading={isLoadingUpdate}
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

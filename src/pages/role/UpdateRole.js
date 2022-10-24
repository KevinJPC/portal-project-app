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

const UpdateRole = () => {
	const [showModal, setShowModal] = useState(false)
	const { id } = useParams()

	const { data: result, isSuccess } = useGetRoleByIdQuery(Number(id))
	const [updateaRole, { isLoading: isLoadingUpdate }] = useUpdateRoleMutation()
	const [
		inactivateRole,
		{
			isUninitialized,
			isLoading: isLoadingInactivate,
			isError,
			error,
			isSuccess: isSuccesss,
		},
	] = useInactivateRoleMutation()
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
				...values,
				id: Number(id),
				name: result?.data.role.name,
				nameSlug: result?.data.role.nameSlug,
				description: result?.data.role.description,
			})
		}
	}, [isSuccess])

	const handleInactivate = () => {
		setShowModal(true)
	}

	const areSureInactivate = choose => {
		if (choose) {
			setShowModal(false)
			inactivateRole(id)
			if (isUninitialized) {
			}
		}
	}

	if (isSuccesss) {
		return navigate(-1)
	}

	/**
	 * "updateaRole" is a function that takes in an object called "values" and then does something with
	 * it.
	 */
	const update = e => {
		e.preventDefault()
		try {
			updateaRole(values)
			navigate(-1)
		} catch (error) {}
	}

	return (
		<div>
			<div className=' mt-16'>
				<div className='flex flex-col items-center pt-6 justify-center sm:pt-0'>
					<div>
						<h3 className='text-3xl text-p-blue'>Modificar Rol</h3>
					</div>

					<div className='w-full px-6 py-4 mt-1 overflow-hidde max-w-xs sm:max-w-md'>
						{isError && (
							<Alert
								type='error'
								message={error.data.message}
							/>
						)}
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
								func={handleInactivate}
								color='red'
							/>
							{showModal ? (
								<ModalWindow
									text='¿Está seguro de inactivar este registro?'
									buttonText='Desactivar'
									setShowModal={setShowModal}
									onDialog={areSureInactivate}
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

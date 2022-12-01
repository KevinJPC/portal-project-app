import React, { useEffect } from 'react'
import { Form, Formik } from 'formik'
import SubmitButton from '../../components/buttons/SubmitButton'
import TextInput from '../../components/inputs/InputText'
import useForm from '../../hooks/useForm'
import useUser from '../../hooks/useUser'
import { userProfileSchema } from '../../formYupSchemas/userSchema'

const UpdateUser = () => {
	const { formState, changeFormState } = useForm({
		name: '',
		email: '',
		firstLastName: '',
		secondLastName: '',
	})

	const {
		profileProps: { isLoadingUpdateProfile, userData, updateUserProfile },
	} = useUser()

	useEffect(() => {
		changeFormState({
			name: userData?.name,
			email: userData?.email,
			firstLastName: userData?.firstLastName,
			secondLastName: userData?.secondLastName,
		})
	}, [userData])

	return (
		<div className='mt-16 w-full'>
			<div className='flex flex-col items-center pt-6 justify-center sm:pt-0'>
				<Formik
					initialValues={{ ...formState }}
					onSubmit={values => {
						updateUserProfile({ ...values })
					}}
					enableReinitialize
					validationSchema={userProfileSchema}
				>
					{() => (
						<>
							<div>
								<h3 className='text-3xl text-p-blue'>Editar perfil</h3>
							</div>
							<div className='w-full px-6 py-4 mt-1 overflow-hidde max-w-xs sm:max-w-md'>
								<Form>
									<div className='mt-4 '>
										<TextInput
											label='Nombre'
											name='name'
										/>
									</div>
									<div className='mt-4 '>
										<TextInput
											label='Primer apellido'
											name='firstLastName'
										/>
									</div>
									<div className='mt-4 '>
										<TextInput
											label='Segundo apellido'
											name='secondLastName'
										/>
									</div>
									<div className='mt-4 mb-6'>
										<TextInput
											label='Correo electrónico'
											name='email'
										/>
									</div>
									<div className='mt-6'>
										<SubmitButton
											isLoading={isLoadingUpdateProfile}
											text='Guardar cambios'
										/>
									</div>
								</Form>
							</div>
						</>
					)}
				</Formik>
			</div>
		</div>
	)
}

export default UpdateUser

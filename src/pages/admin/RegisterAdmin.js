import React from 'react'
import { Form, Formik } from 'formik'
import SubmitButton from '../../components/buttons/SubmitButton'
import useAdmin from '../../hooks/useAdmin'
import { adminSchema } from '../../formYupSchemas/adminSchema'
import InputText from '../../components/inputs/InputText'
import InputPassword from '../../components/inputs/InputPassword'

const RegisterAdmin = () => {
	const {
		registerProps: { registerNewAdmin, isLoadingAddNewAdmin },
	} = useAdmin()

	return (
		<div className=''>
			<div className='flex flex-col items-center pt-10 md:pt-14 mt-14'>
				<Formik
					initialValues={{
						dni: '',
						name: '',
						email: '',
						firstLastName: '',
						secondLastName: '',
						password: '',
						passwordConfirmation: '',
					}}
					onSubmit={(values, { resetForm }) => {
						registerNewAdmin({ ...values })
						resetForm()
					}}
					validationSchema={adminSchema}
				>
					{() => (
						<>
							<div>
								<h3 className='text-3xl text-p-blue'>
									Registrar administrador
								</h3>
							</div>
							<div className='w-full py-4 mt-1 px-4 overflow-hidde max-w-xs md:max-w-3xl'>
								<Form>
									<div className='md:grid md:grid-cols-2 gap-5 '>
										<div className='mt-4 '>
											<InputText
												label='Cédula'
												name='dni'
											/>
										</div>
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
										<div className='mt-4'>
											<InputPassword
												label='Contraseña'
												name='password'
											/>
										</div>
										<div className='mt-4 mb-4'>
											<InputPassword
												name='passwordConfirmation'
												label='Confirmar contraseña'
											/>
										</div>
									</div>
									<div className='md:px-36 my-5'>
										<SubmitButton
											isLoading={isLoadingAddNewAdmin}
											text='Registrar'
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

export default RegisterAdmin

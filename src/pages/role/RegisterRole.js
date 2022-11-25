import React from 'react'
import SubmitButton from '../../components/buttons/SubmitButton'
import Input from '../../components/inputs/TextInput'
import useForm from '../../hooks/useForm'
import useRole from '../../hooks/useRole'

const RegisterRole = () => {
	const { formState, name, description, onInputChange, changeFormState } =
		useForm({
			name: '',
			nameSlug: '',
			description: '',
		})

	const {
		registerProps: { registerNewRole, isLoadingAddNewRole },
	} = useRole({ ...formState })

	return (
		<div>
			<div className=' mt-16'>
				<div className='flex flex-col items-center pt-6 justify-center sm:pt-0'>
					<div>
						<h3 className='text-3xl text-p-blue'>Registrar Rol</h3>
					</div>
					<div className='w-full px-6 py-4 mt-1 overflow-hidde max-w-xs sm:max-w-md'>
						<form onSubmit={registerNewRole}>
							<div className='mt-4 '>
								<div className='flex flex-col items-start relative'>
									<Input
										id='name'
										label='Nombre'
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
										name='Descripción'
										label='Descripción'
										value={description}
										onChange={onInputChange}
									/>
								</div>
							</div>
							<div className='w-full py-2.5 mt-5'>
								<SubmitButton
									isLoading={isLoadingAddNewRole}
									text='Registrar'
								/>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}

export default RegisterRole

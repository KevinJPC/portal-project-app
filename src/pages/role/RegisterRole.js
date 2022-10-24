import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAddNewRoleMutation } from '../../app/services/roleApi'
import Input from '../../components/inputs/TextInput'

const RegisterRole = () => {
	const navigate = useNavigate()

	const [addNewAdmin, { isLoading, isSuccess, data, error }] =
		useAddNewRoleMutation()

	const [values, setValues] = useState({
		name: '',
		nameSlug: '',
		description: '',
	})

	const RegisterNewRole = async e => {
		e.preventDefault()
		try {
			await addNewAdmin(values)
			navigate(-1)
		} catch (err) {}
	}

	return (
		<div>
			<div className=' mt-16'>
				<div className='flex flex-col items-center pt-6 justify-center sm:pt-0'>
					<div>
						<h3 className='text-3xl text-p-blue'>Registrar Rol</h3>
					</div>
					<div className='w-full px-6 py-4 mt-1 overflow-hidde max-w-xs sm:max-w-md'>
						<form onSubmit={RegisterNewRole}>
							<div className='mt-4 '>
								<div className='flex flex-col items-start relative'>
									<Input
										id='name'
										label='Nombre'
										
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
										name='Descripción'
										label='Descripción'
										onChange={e =>
											setValues({ ...values, description: e.target.value })
										}
									/>
								</div>
							</div>
							<button
								type='submit'
								className='text-p-white bg-p-purple mt-7 focus:outline-none font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center'
							>
								Registrar
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}

export default RegisterRole

import React from 'react'
import Roles from '../../components/Roles'
import SearchBar from '../../components/SearchBar'

const ActivesRoles = () => {
	return (
		<div>
			<div>
				<div className='h-24 mt-14 py-2'>
					<SearchBar
						title='Roles'
						buttonText='Nuevo rol'
						route='registrar'
					/>
				</div>
				<div className='mb-10'>
					<Roles
						name='Servicio al cliente'
						description='Rol de servicio al cliente'
						date='28/09/2022'
						buttonText='Modificar'
						route='register'
					/>
					<Roles
						name='Servicio al cliente'
						description='Rol de servicio al cliente'
						date='28/09/2022'
						buttonText='Modificar'
						route='register'
					/>
					<Roles
						name='Servicio al cliente'
						description='Rol de servicio al cliente'
						date='28/09/2022'
						buttonText='Modificar'
						route='register'
					/>
					<Roles
						name='Servicio al cliente'
						description='Rol de servicio al cliente'
						date='28/09/2022'
						buttonText='Modificar'
						route='register'
					/>
				</div>
			</div>
		</div>
	)
}

export default ActivesRoles

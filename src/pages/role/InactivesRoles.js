import React from 'react'
import Roles from '../../components/Roles'
import SearchBar from '../../components/SearchBar'

function InactivesRoles() {
	return (
		<div>
			<div className='h-24 mt-14 py-2'>
				<SearchBar
					title='Roles'
					buttonText='Nuevo rol'
					route='register'
				/>
			</div>
			<div className='mb-10'>
				<Roles
					name='Servicio al cliente'
					description='Rol de servicio al cliente'
					date='28/09/2022'vvv
					buttonText='Modificar'
					route='register'
				/>
				<Roles
					name='Cliente'
					description='Rol del cliente'
					date='28/09/2022'
					buttonText='Modificar'
					route='register'
				/>
				<Roles
					name='Proveedor'
					description='Rol del proveedor'
					date='28/09/2022'
					buttonText='Modificar'
					route='register'
				/>
				<Roles
					name='Mercadeo'
					description='Rol del Mercadeo'
					date='28/09/2022'
					buttonText='Modificar'
					route='register'
				/>
				<Roles
					name='Distribuidor'
					description='Rol del distribuidor'
					date='28/09/2022'
					buttonText='Modificar'
					route='register'
				/>
			</div>
		</div>
	)
}

export default InactivesRoles

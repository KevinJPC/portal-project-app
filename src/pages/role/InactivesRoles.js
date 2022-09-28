import React from 'react'
import Roles from '../../components/Roles'
import SearchBar from '../../components/SearchBar'

function InactivesRoles() {
	return (
		<div>
			<SearchBar
				title='Roles'
				buttonText='Nuevo rol'
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
		</div>
	)
}

export default InactivesRoles

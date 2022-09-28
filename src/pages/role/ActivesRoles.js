import React from 'react'
import Roles from '../../components/Roles'
import SearchBar from '../../components/SearchBar'

const ActivesRoles = () => {
	return (
		<div>
			<SearchBar
				title='Roles'
				buttonText='Nuevo rol'
				route='admin/register'
			/>
			<Roles />
		</div>
	)
}

export default ActivesRoles

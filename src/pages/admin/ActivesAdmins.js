import React from 'react'
import SearchBar from '../../components/SearchBar'

const ActivesAdmins = () => {
	return (
		<>
			<SearchBar
				title='Administradores'
				buttonText='Nuevo administrador'
				route='/admin/register'
			/>
		</>
	)
}

export default ActivesAdmins

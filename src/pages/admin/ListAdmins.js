import React from 'react'
import { useEffect } from 'react'
import { useGetActivesAdminQuery } from '../../app/services/adminApi'
import Admins from '../../components/Admins'
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

import React, { useState } from 'react'
import { useEffect } from 'react'
import { useGetActivesAdminQuery } from '../../app/services/adminApi'
import Admins from '../../components/Admins'
import SearchBar from '../../components/SearchBar'

const ActivesAdmins = () => {
	const [adminState, setAdminState] = useState()
	return (
		<>
			<SearchBar
				setAdminState={setAdminState}
				title='Administradores'
				buttonText='Nuevo administrador'
				route='/admin/register'
			/>
			{adminState === 'actives'}
		</>
	)
}

export default ActivesAdmins

import React, { useState } from 'react'
import { useEffect } from 'react'
import {
	useGetActivesAdminQuery,
	useGetInactivesAdminQuery,
} from '../../app/services/adminApi'
import Admins from '../../components/Admins'
import SearchBar from '../../components/SearchBar'

const ActivesAdmins = () => {
	const [adminState, setAdminState] = useState('actives')
	const { data: actives } = useGetActivesAdminQuery()
	const { data: inactives } = useGetInactivesAdminQuery()

	return (
		<>
			<SearchBar
				setAdminState={setAdminState}
				title='Administradores'
				buttonText='Nuevo administrador'
				route='registrar'
			/>
			{adminState === 'actives'
				? actives?.data.activeUsers.data.map(admin => (
						<Admins
							key={admin.id}
							admin={admin}
							buttonText='Modificar'
						/>
				  ))
				: inactives?.data.inactiveUsers.data.map(admin => (
						<Admins
							key={admin.id}
							admin={admin}
							buttonText='Activar'
						/>
				  ))}
		</>
	)
}

export default ActivesAdmins
